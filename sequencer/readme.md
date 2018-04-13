# The sequencer

This section of the tutorial will guide you throught using minnojs sequences.
It starts at the very essentials of what a sequence is, and walks you through various ways of changing the sequences of your study.

For the purpose of this section of the tutorial we will be using the manager and `message` tasks.
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

```javascript
API.addSequence([
    {
        type:'message',
        keys: ' ',
        template: 'Task 1'
    }
]);
```

In **Study 1** you can see a simple sequence of tasks.
As the name implies, they will be activated sequentially.

But what happens if you want to randomize the order in which they appear?
The next section addresses exactly that question.

## Study 2 - mixers
So, in the previous section we saw how to create a straight forward sequence.
Essentially you just have an array of elements.
Many times you want to manipulate the sequence in which these elements are activated in various ways.
In this section we will learn about mixers, and in particular about the `random` mixer.

Mixers allow wrapping a sub sequence in an object that allows you to manipulate the way in which they are activated.
You may insert such an object at any place within a sequence and it will be replaced by the appropriate objects.

The basic structure of a mixer object is:

```javascript
{
    mixer: 'mixerType', // let the sequencer know that this is a mixer, and define the type of the mixer
    data: [obj1, obj2] // define the sub-sequence to be mixed
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

You can see how this would actually work in a study in **Study 2**.
Note that the first and last element do not chage, only studies 2 and 3.

## Study 3


