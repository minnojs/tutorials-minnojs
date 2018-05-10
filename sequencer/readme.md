# The sequencer

This section of the tutorial will guide you throught using minnojs sequences.
It starts at the very essentials of what a sequence is, and walks you through various ways of changing the sequences of your study.

Throught the tutorial we will review multiple techniques and code snippets.
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

Message tasks display a simple text message on the screen.
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

## Study 2 - mixing things up
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
        {
            type:'message',
            keys: ' ',
            template: 'Task 1'
        },
        {
            type:'message',
            keys: ' ',
            template: 'Task 2'
        }       
    ]
}
```

Try copying it into your sequence.
Can you add another element to the mixer? What happens if you add an element before or after the mixer?
You can see this in action in **Study 2**.

## Study 3
In this section of the tutorial we will get to know some more mixers and learn how to mannage some more complex sequences.

In order to get a better intuition for how these mixers work we will use questionnaires.
Questionnaires are composed of pages.
Each page can have a *sequence* of one or more questions.
This will allow us to see a more comprehensive eye of the bird view of each mixer.
We will not get into all the details of a questionaire in this tutorial, but here are the basics.

A questionnaire page looks like this:

```javascript
{
    header: 'Page header',
    questions: [
        { type:'info', stem: 'This is the text used for this question' }
    ]
}
```

The `header` property of the page controls the page header.
The `questions` property holds a sequence of questions.

We will most often use *info* questions in this tutorial - they are essentially questions that only display some text witout any user interactions.
The `type` of the questions we will use will usually simpley be set to *info*.
The `stem` sets the exact text that will be used.

Put together a minimal questionnaire for you to tinker with looks like this:

```javascript
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: 'Page header',
            questions: [
                { type:'info', stem: 'This is the text used for this question' }
            ]
        }
    ]);

    return API.script;
});
```






