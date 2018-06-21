# The sequencer

This section of the tutorial will guide you through using minnojs sequences.
It starts at the very essentials of what a sequence is, and walks you through various ways of changing the sequences of your study.

Throughout the tutorial we will review multiple techniques and code snippets.
You are encouraged to follow through in a playground of your own.
Copy the code into your file (and by copy, I mean type it out - you'll learn better), and run it at each step to get a better idea of what is going on.

For the purpose of this tutorial we will be using the manager and `message` tasks.
The format for a message task is very simple:

```javascript
{
    type:'message',
    template:'Task 1',
    keys:' '
}
```

[Message tasks](https://minnojs.github.io/minno-quest/0.1/manager/messages.html) display a simple text message on the screen. 
The `type` property defines this as a *message* task.
The `tepmlate` property sets the text to be displayed (we could have used `templateUrl` to refer to an external file, but this way is simpler for short texts).
The `keys` property sets the key to click in order to proceed to the next task.

## Study 1 - the sequence

Each Minno task is composed of a series of elements sequentially activated and presented to the users (these are trials for miTime, pages for miQuest and tasks for miManager). 
This sequence of elements is defined within the sequence.

The following code is a minimal manager sequence with a single message printing "Task 1" to the screen.

```javascript
define(['managerAPI'], function(Manager){
    var API = new Manager();

    API.addSequence([
        {
            type:'message',
            keys: ' ',
            template: 'Task 1'
        }
    ]);

    return API.script;
});
```

See if you can add another message to this sequence, labeled "Task 2".
Hint: elements in an array must be separated by commas.

In **Study 1** you can see a simple sequence of tasks.
As the name implies, they will be activated sequentially.
But what happens if you want to randomize the order in which they appear?
The next section addresses exactly that question.

## Study 2 - Random
In the previous section we saw how to create a straight forward sequence.
Essentially, you just have an array of elements.
Many times you will want to manipulate the sequence in which these elements are activated in various ways.
In this section we will learn about mixers, and in particular about the `random` mixer.

Mixers allow you to take a part of the sequence and manipulate the way in which it is activated.
You may insert such an object at any place within a sequence and it will be replaced by the appropriate elements.

The basic structure of a mixer object is:

```javascript
{
    mixer: 'mixerType', 
    data: [
        element1, 
        element2
    ]
}
```

The `mixer` property defines the type of the mixer (see the docs for a list of mixer types).
The `data` property defines the sub-sequence; an array of elements (either plain objects or mixer objects themselves).
The mixer transforms the sub-sequence and injects it into the ongoing sequence of elements.

Let us see an example. One of the most useful mixers is the random mixer.
In a nut shell, it takes a sub-sequence and randomizes the order of the elements within.
Following is a rudimentary use of a `random` mixer, it randomly displays either *Task 1* and then *Task 2* or *Task 2* and then *Task 1*.

```javascript
{
    mixer:'random',
    data: [
        { type:'message', keys: ' ', template: 'Task 1' },
        { type:'message', keys: ' ', template: 'Task 2' }       
    ]
}
```

Try copying it into your sequence.
Can you add another element to the mixer? What happens if you add an element before or after the mixer?
You can see this in action in **Study 2**.

## Study 3 - Groups

What happens though, if we want to add some instructions before each task?
A naive implementation would look something like this:

```javascript
{
    mixer:'random',
    data: [
        { type:'message', keys: ' ', template: 'Instructions for task 1' },
        { type:'message', keys: ' ', template: 'Task 1' },
        { type:'message', keys: ' ', template: 'Instructions for task 2' },
        { type:'message', keys: ' ', template: 'Task 2' }       
    ]
}
```

Try it out!

As you can see the randomizer mixes all tasks together.
In order to hold a pair of tasks together we will need to use a `wrapper` mixer.
The `wrapper` mixer tells the `random` mixer that it should not randomize anything within it. 

```javascript
{
    mixer:'random',
    data: [
        {
            mixer:'wrapper',
            data: [
                { type:'message', keys: ' ', template: 'Instructions for task 1' },
                { type:'message', keys: ' ', template: 'Task 1' },
            ]
        },
        {
            mixer:'wrapper',
            data: [
                { type:'message', keys: ' ', template: 'Instructions for task 2' },
                { type:'message', keys: ' ', template: 'Task 2' }       
            ]
         }
    ]
}
```

Add a third task that should be randomized.
After you have that working, see if you can replace "Task 3" With "Task 3a" and "Task 3b".
Then have the order in which they appear be randomized.

You can see this in action in **Study 3**.

## Study 4 - Pick random condition
In the previous sections we discussed how you randomize the order in which your study runs.
What happens when you need to pick random conditions?

The simplest way to do this is by using the `choose` mixer.
The `choose` mixer allows you to randomly choose one or more elements from a list.
See the [documentation](https://minnojs.github.io/minno-quest/0.1/basics/mixer.html#choose) to learn how to choose multiple elements.
Following is a simple case in which we choose a random priming task and follow it by a common questionnaire.

```javascript
{
    mixer:'choose',
    data:[
        { type:'message', keys:' ', template: 'Priming 1' },
        { type:'message', keys:' ', template: 'Priming 2' }
    ]
},
{ type: 'message', keys:' ', template: 'Questionnaire' }
```

In some occasions you may want to give different weights to the elements, you can do this using the `weightedChoose` mixer.
The `weights` array assigns a likelihood to each element respectively.
In the following example the "Priming 1" task has twice the chance to be chosen than the "Priming 2" task.

```javascript
[
    {
        mixer:'weightedChoose',
        weights: [2,1],
        data:[
            { type:'message', keys:' ', template: 'Priming 1' },
            { type:'message', keys:' ', template: 'Priming 2' }
        ]
    },
    { type: 'message', keys:' ', template: 'Questionnaire' }
]
```

Getting back to the simple choose, we sometimes want to choose more than one element.
For example we may want to choose a task with its instructions.
The wrapper mixer that we discussed before comes in useful again:

```javascript
{
    mixer:'choose',
    data: [
        {
            mixer:'wrapper',
            data: [
                { type:'message', keys: ' ', template: 'Instructions for task 1' },
                { type:'message', keys: ' ', template: 'Task 1' },
            ]
        },
        {
            mixer:'wrapper',
            data: [
                { type:'message', keys: ' ', template: 'Instructions for task 2' },
                { type:'message', keys: ' ', template: 'Task 2' }       
            ]
         }
    ]
}
```

## Study 5 - Branching out
So far we saw how you can introduce randomness to effect the flow of your sequence.
Sometimes it will be important for you to change the sequence in response to some previous events.

Minno keeps a record of the "state" of the player.
The state includes any responses given by the users, as well as additional data saved by you or the player itself.
You can read more about state in the [documentation](https://minnojs.github.io/minno-quest/0.1/basics/variables.html),
There are several ways that you can use state to manipulate your studies.
In this section we will introduce the branching mixers.

Many times you will want to branch your tasks in response to user input (given, for example, within a questionnaire).
In this case, for the sake of simplicity, we will stick to manually changing the state and seeing how it affects the flow of our study.
When you are ready to apply the ideas you've learnt here to questionnaires, 
you should look up the [documentation](https://minnojs.github.io/minno-quest/0.1/basics/variables.html) to see how it is  done.

We will introduce another type of task to simulate user input (though as we will see it is useful in other contexts as well).
The `set` tasks simply sets a `value` into a `path` within the global object.
For example, the following task sets the variable `global.personal.name` to "Albert".

```javascript
{
    type:'set',
    path: 'global.personal.name',
    value: 'Albert'
}
```

Let's say that we have a study investigating patients referred to a mental health clinic.
We start out by asking about their previous experience in therapy, and simulating a response
(the path used here is what we'd expect from a Minno questionnaire).

```javascript
{ type:'message', keys: ' ', template: 'Have you ever been in therapy?' },
{ type:'set', path: 'global.therapy.questions.hadTherapy.response', value: 'no' }
```

We now want to ask for the details of therapy, but only in case that the patient actually participated.
For this purpose we will use a branching mixer.

```javascript
{ type:'message', keys: ' ', template: 'Have you ever been in therapy?' },
{ type:'set', path: 'global.therapy.questions.hadTherapy.response', value: 'no' },
{
    mixer:'branch',
    conditions: [
        {compare: 'global.therapy.questions.hadTherapy.response', to: 'yes'}
    ],
    data: [
        { type:'message', keys: ' ', template: 'Please elaborate on your experience in therapy' },
    ]
}
```

Try this snippet out.
Can you change the `set` task so that you reach the elaboration "questionnaire"?
(tip: you should be changing the `value`).

We have a time sensitive task that we want to run next.
But what if we want people suffering from Social Anxiety Disorder to participate in a different task?
Turns out that the `branch` mixer has an additional property just for this case.
Instead of adding elements to `data`, you can add them to `elseData` 
and they will be activated in case the condition turns out to be false.

```javascript
{ type:'message', keys: ' ', template: 'Do you suffer from Social Anxiety Disorder?' },
{ type:'set', path: 'global.therapy.questions.hadSAD.response', value: 'yes' },
{
    mixer:'branch',
    conditions: [
        {compare: 'global.therapy.questions.hadSAD.response', to: 'yes'}
    ],
    data: [
        { type:'message', keys: ' ', template: 'Social Anxiety task' },
    ],
    elseData: [
        { type:'message', keys: ' ', template: 'General population task' },
    ]
}
```

So far we've dealt with simple conditions.
Simply checking if a single variable is equal to a value.
Branches support much richer [conditions](https://minnojs.github.io/minno-quest/0.1/basics/mixer.html#conditions).
Let's say we have a measure for depression (the BDI score) for our patient.
And we want to choose only patients that have both severe depression (a BDI >= 29) and social anxiety.
We will want to combine two conditions;
The first, we already know, requires Social Anxiety:

```javascript
{compare: 'global.therapy.questions.hadSAD.response', to: 'yes'}
```

The second requiring severe depression, uses a new property: `operator`.
The operator defines what type of comparison should be done within the condition.
In our case we want to use `greaterThanOrEquals`, you can learn more about operators in the [documentation](https://minnojs.github.io/minno-quest/0.1/basics/mixer.html#operators).

```javascript
{compare: 'global.therapy.questions.BDI.response', operator: 'greaterThanOrEquals', to: 29}
```

Now, how do we require both of them to be true?
We could of course nest two branches, one within the other, but that would become cumbersome very fast.
Instead we can aggregate the conditions, simply by dropping them both into the conditions array.
See the [documentation](https://minnojs.github.io/minno-quest/0.1/basics/mixer.html#aggregation) for other types of aggregators,
including OR and more complex conditions.

```javascript
{ type:'set', path: 'global.therapy.questions.hadSAD.response', value: 'yes' },
{ type:'set', path: 'global.therapy.questions.hadSAD.response', value: 23},
{
    mixer:'branch',
    conditions: [
        {compare: 'global.therapy.questions.hadSAD.response', to: 'yes'},
        {compare: 'global.therapy.questions.BDI.response', operator: 'greaterThanOrEquals', to: 29}
    ],
    data: [
        { type:'message', keys: ' ', template: 'Social Anxiety AND depression task' },
    ]
}
```

See if you can change the conditions so that they include moderate depression as well as sever (BDI >= 20).
How would you require only moderate depression (BDI between 20 and 28)?

Finally, we want each patient to fill a questionnaire according to their primary diagnosis.
We could create a branch for each possibility, but the sequencer offers us a more straightforward option.
The `mulitBranch` mixer allows us to set multiple alternative conditions, as well as set a "default" condition (`elseData`).
You should note that only the first true condition will be activated.

```javascript
{ type:'set', path: 'global.therapy.questions.primaryDiagnosis.response', value: 'depression'},
{
    mixer: 'multiBranch',
    branches: [
        {
            conditions: [
                {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'SAD'},
            ],
            data: [
                { type:'message', keys: ' ', template: 'Social Anxiety Disorder questionnaire' },
            ]
        },
        {
            conditions: [
                {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'depression'},
            ],
            data: [
                { type:'message', keys: ' ', template: 'Major Depression questionnaire' },
            ]
        },
        {
            conditions: [
                {compare: 'global.therapy.questions.primaryDiagnosis.response', to: 'panic'},
            ],
            data: [
                { type:'message', keys: ' ', template: 'Panic Disorder questionnaire' },
            ]
        }
    ],
    elseData: [
        { type:'message', keys: ' ', template: 'Unspecified Disorder questionnaire' },
    ]
}
```

See if you can split the depression condition into two conditions according to BDI - 
one with moderate depression (or less), the other with sever depression.

## Study 6 - Repetition

Imagine that you have a task that is composed of 20 trials (or 200 for that matter).
How would you go about repeating these trials?
Instead of manually repeating them 20 times you can use the `repeat` mixer.
The syntax is simple, all you need to know is that the content of `data` is repeated `times` times.

```javascript
{
    mixer:'repeat',
    times:3,
    data: [
        { type:'message', keys: ' ', template: 'Repeated task A' },
        { type:'message', keys: ' ', template: 'Repeated task B' }
    ]
}
```

Note that "task A" and "task B" are repeated as a pair (A B A B A B).

On its own, the repeat mixer is not very useful.
Its power come out when combined with the many dynamic aspects of Minno.
There are many ways that allow an element to behave differently each time that it is encountered;
[inheritance](https://minnojs.github.io/minno-quest/0.1/basics/inheritance.html), 
[templates](https://minnojs.github.io/minno-quest/0.1/basics/templates.html), and many other types of custom actions.
In concert with these features the repeat mixer becomes extremely convinient, and quite likely one of the most commonly used mixers.

Following is an example for a bit more complex sequence using both templates and inheritance.
If you are not familiar with them yet, don't worry if you don't understand how they work.
The following sequence displays three sets of intensive task-relaxation-questionnaire.

The task is randomly chosen using `inherit`.
The relaxation and questionnaires are the same for each iteration.
Seeing that the questionnaires are identical it can become a problem to know to which task they belong.
In order to solve that problem we use templates (and `tasksMeta`) to dynamically set their name.
When analyzing the data, the questionnaire names can be sorted according to their names: intensive1 with quest1 and so on.

```javascript
// set up inheritance
API.addTasksSet('intensiveTask', [
    { type:'message', keys: ' ', template: 'intensiveTask1' },
    { type:'message', keys: ' ', template: 'intensiveTask2' },
    { type:'message', keys: ' ', template: 'intensiveTask3' }
]);

// the sequence itself
API.addSequence([
    {
        mixer:'repeat',
        times: 3,
        data: [
            { inherit: {type:'exRandom', set:'intensiveTask'}, name: 'intensive<%= tasksMeta.number %>' },
            { type:'message', keys: ' ', template: 'Relaxation' },
            { type:'message', keys: ' ', template: 'Same questionnaire, different name', name: 'quest<%= tasksMeta.number -2 %>'  },
        ]
    }
]);
```

## Study 7 - Live updates
In this section we will learn how to use the sequencer to have Minno react to user input in real time.

There are some situation within Minno that a specific mixer can be revisited.
In particular, this happens in minno-quest. 
When using the [`prev` feature](https://minnojs.github.io/minno-quest/0.1/manager/templates.html) in pages, 
users can go back to pages that they've already completed.
In addition, Minno treats each set of questions in minno-quest as a sequence that is updated every time that the response to an answer is updated.

We will follow this behaviour in a minno-quest questionnaire.
Following is a minimal template study which we will slowly develop.

```javascript
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: 'simple',
            questions: [
                { type: 'text', stem: 'first question'},
                { type: 'text', stem: 'second question'}
            ]
        }
    ]);

    return API.script;
});
```

This is a simple questionnaire, with a single page element.
It has the `header` 'simple', and a pair of text `questions`.
The `stem` is simply the text prompt acompanying the question.
The `questions` array can be treated as a sequence and used to mix the questions.
For example, the following page randomizes the order of questions in the page:

```javascript
{
    header: 'random',
    questions: [
        {
            mixer:'random',
            data: [
                { type: 'text', stem: 'first question'},
                { type: 'text', stem: 'second question'}
            ]
        }
    ]
}
```

We mentioned previously that the sequencer updates all questions each time that a response is updated.
By default this doesn't really have any effect because mixers are not "remixed" when they are updated.
Lets activate remixing for the random mixer, and see what happens.
Simply add the `remix` property to your mixer:

```javascript
{
    header: 'random - not very usefull',
    questions: [
        {
            mixer:'random',
            remix:true,
            data: [
                { type: 'text', stem: 'first question'},
                { type: 'text', stem: 'second question'}
            ]
        }
    ]
}
```

At first glance it seems that everything is working the same, but try entering some texts into the inputs.
Each time an input is updated, the order is re-randomized.
This doesn't seem something very useful for questionnaires.
How about we try a different mixer here:

```javascript
{
    header: 'branch - this is where the magic happens',
    questions: [
        { type: 'text', stem: 'Do you speak Spanish? (type "yes")'},
        {
            mixer:'branch',
            conditions: { compare:'current.questions.regular.response', to:'yes' },
            remix:true,
            data: [
                { type: 'text', stem: 'How do you say "Fantastic" in Spanish?'}
            ]
        }
    ]
}
```

The branching mixers in combination with `remix` allow you to have questions in your questionnaires that respond directly and immidiately to subject responses.
This combination is extremely useful in many situations.
