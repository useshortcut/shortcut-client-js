# Introduction

This tutorial is going to walk you through importing data into your
Clubhouse account using the REST API and the Node.js client library.
You can manage almost all of your information in Clubhouse using
the rest API.

The goal of this tutorial is to provide you with the knowledge
to interact programmatically with your Clubhouse account.

This tutorial assumes a familiarity with `JavaScript`, `Node.js`, and the
command line.

## Understanding the Clubhouse API

### Key objects in Clubhouse

Before using the Clubhouse API, it is important to be familiar with the
core objects in Clubhouse.

#### Users

You can't create users via the REST API. New users must be invited
through the Clubhouse UI.

#### Stories

[Stories](https://clubhouse.zendesk.com/hc/en-us/articles/205587589-The-Stories-Page-and-The-Story-Card) are the basic unit of work in Clubhouse
At minimum, Stories must have a name and a Requester (this defaults to the user who created the token being used) and be assigned to a Project.

```javascript
var story = {
    'name': 'This is a test story',
    'project_id': 274
};

clubhouse.createStory(newStory).then(function (newStory) {
    console.log(story.id);
});
```

#### Projects
As mentioned above, all Stories in Clubhouse must be associated with a
[Project](https://clubhouse.zendesk.com/hc/en-us/articles/205702359-The-Projects-Page).

```javascript
var project = { 'name': 'This is a test project' };

clubhouse.createProject(project).then(function (project) {
    console.log(project.id);
});

```
#### Epics
You can also assign a new Story to an
[Epic](https://clubhouse.zendesk.com/hc/en-us/articles/205274149-Epics-and-The-Epics-Page).
This is optional and a Story does not need to be assigned to an Epic.

```javascript
var epic = { 'name': 'This is a test epic' };

clubhouse.createEpic(epic).then(function (new) {
    console.log(new.id);
});
```

#### Workflow States

Workflow states define the current state your Story is in. If you do
not include a workflow state when you create your Story, Clubhouse
will select a default. Read more about workflow states, here in the [Clubhouse Help Center](https://clubhouse.zendesk.com/hc/en-us/articles/205268889).

```javascript
clubhouse.listWorkflowStates().then(function (workflows) {
    console.log(workflows.length) // 0
});
```

Each organization's Workflow has a list of states and each state has an ID. You'll want
to use the Workflow State ID rather than its name.

##### Tasks and Comments
When you are creating your Story you can also include Tasks or Comments
inlined.  This is a convenience so you do not have to make multiple
requests for a single Story.

```javascript
var story = {
  "name": "A test story",
  "project_id": 10,
  "comments": [ { "text": "This is a comment" } ],
  "tasks": [ { "description": "this is a task", "complete": false } ]
};

clubhouse.createStory(newStory).then(function (new) {
    console.log(new);
}).catch(function (error) {
    console.log(error);
});
```

### Errors in the Clubhouse API

The Clubhouse REST API tries to follow the norms around https status
codes. All `200` or `201` respones mean that the operation you
requested was completed successfully.

- `40x` Client error [TODO]

These are client errors. It means you failed to include a required
field, or referneed another object that did not exist.

- `50x` Server error [TODO]

These are errors on our side. Feel free to [report them](support@clubhouse.io).

## Setup Your Machine to Use the Clubhouse API

### Install Node

First you must have `Node.js` installed. On OS X you can install node.js
via [homebrew](http://brew.sh/)

```shell
$ brew install node.js
```

On Ubuntu/Debian Linux
```shell
$ sudo apt get install nodejs
```

More information can be found on the `Node.js` [website]().

### Generate a token

All interactions with the Clubhouse REST API must be done via a
token. You can generate a Clubhouse token
[here](https://me.clubhouse.io/settings/account/api-tokens).

Clubhouse tokens are only displayed to the user once so remeber to
copy your token value.

We should also mention that by default the Clubhouse API takes the
token user as the author for any object you create in clubhouse.

### Installing the Clubhouse NPM package

```shell
npm install clubhouse-lib
```

### Create a script

```shell
touch first_steps.js
```
## Basic API Interaction

### Create A New Instance of the Clubhouse Client

```shell
$ node
```

```javascript
> var Clubhouse = require('clubhouse-lib');
> var clubhouse = new Clubhouse('your token');
```
## Working With Projects

Each object in Clubhouse can be `listed`, `created`, `updated`, `fetched`
and `deleted`. For example, let's list all of the Projects in your
Clubhouse account.

```javascript
clubhouse.listProjects().then(function (projects) {
    projects.forEach(function (project) {
        console.log(project.id, project.name);
    });
});
```
You can request an individual Project by its ID.
```javascript
clubhouse.getProject(10).then(function (project) {});
```

You can create a Project
```javascript
clubhouse.createProject({ name: "Test" }).then(function (newProject) { console.log(newProject); });
```
And, finally, you can delete a Project
```javascript
clubhouse.deleteProject(10).then(function () {}).catch(function (error) { throw error; });
```
### A Quick Note Working With the Bluebird Library

Each method in clubhouse.js returns a
[bluebird](http://bluebirdjs.com/docs/getting-started.html) `Promise`
object. That means you can use any of the combinator functions provided by
the `bluebird` library. For example, if you wanted to filter all of the Projects that
start with the word `Mobile` you would do the following:

```javascript
clubhouse.listProjects().filter(function (project) {
    return project.name.startsWith('Mobile');
}).then(function (projects) {
    console.log(projects);
});
```

Each method accepts an optional callback function that is called with an
error and a value.

```javascript
clubhouse.listProjects(function (error, projects) {
    if (error) { throw error };
    console.log(projects);
});
```
### Creating your first Story with Clubhouse API.
Let's go ahead and create a test Story and then immediately delete it
to go through the whole process and make sure everything is working.

```javascript
var Clubhouse = require('clubhouse');
var clubhouse = new Clubhouse('your token');

var story = {
    'name': 'This is a test',
    'project_id': 274
};

clubhouse.createStory(newStory).then(function (newStory) {
    console.log('new story', newStory);
    return clubhouse.deleteStory(newStory.id);
}).catch(function (error) {
    console.log(error);
});
```

```shell
node first_steps.js
```

You should see the contents of your new story printed in the
console. You can also check your activity feed to confirm that a story
was created and then deleted.


### Importing your data with Clubhouse API

At this point, we are ready to import a collection of Stories into our
Clubhouse account. The schema of the CSV file we will be using is as follows

```JavaScript
id
name
type
state
requester
project
created_at
updated at
estimate
```

Download the sample data here

```shell
curl
```

Create your script

```shell
touch import_to_clubhouse.js
```

The script is as follows

```javascript
var Promise = require('bluebird');
var _ = require('lodash');
var fs = require('fs');
var Clubhouse = require('Clubhouse');
var clubhouse = new Clubhouse('Your Clubhouse Token');

function findUserByEmail(users, email) {
    return _.find(users, function (x) { return x.permissions[0].email === email; });
}

function findWorkflowStateByName(workflows, name) {
    return _.find(workflows[0].states, function (x) { return x.name === name; });
}

function generateStory(ctx, row) {
    var rawStory = row.split(',');
    var user = findUserByEmail(ctx.users, rawStory[4]);
    var workflowState = findWorkflowStateByName(ctx.workflows, rawStory[3]);

    return { external_id: rawStory[0],
             name: rawStory[1],
             story_type: rawStory[2],
             workflow_state_id: workflowState.id,
             requested_by_id: user.id,
             project_id: ctx.projects[0].id,
             epic_id: ctx.epics[0].id,
             estimate: parseInt(rawStory[8])
    };

}

Promise.props({
    projects: clubhouse.listProjects().filter(function (x) { return x.name === 'API'; }),
    epics: clubhouse.listEpics().filter(function (x) { return x.name === 'Multi-org Support'; }),
    users: clubhouse.listUsers(),
    workflows: clubhouse.listWorkflows()
}).then(function (ctx) {

    fs.readFile('./stories.csv', function (error, csv) {
        if (error) { throw error; }
        // Remove CSV header
        var stories = _.tail(csv.toString().split('\n')).map(_.partial(generateStory, ctx));

        Promise.all(
            stories.map(function (x) { return clubhouse.createStory(x); })
         ).then(function (all) {
             console.log('Created ' + all.length + ' new stories in your clubhouse account');
         }).catch(function (e) {
             console.log(e);
         });

    });

});
```

Lets break this script down part by part.

We want to include [bluebird](), [lodash](), `Node`'s `fs` module and
the Clubhouse client library.

```javascript
var Promise = require('bluebird');
var _ = require('lodash');
var fs = require('fs');
var Clubhouse = require('Clubhouse');
var clubhouse = new Clubhouse('Your Clubhouse Token');
```

Next we define two helper lookup functions using lodash.

```javascript
function findUserByEmail(users, email) {
    return _.find(users, function (x) { return x.permissions[0].email === email; });
}

function findWorkflowStateByName(workflows, name) {
    return _.find(workflows[0].states, function (x) { return x.name === name; });
}

```

Notice that the we take the first Workflow and then iterate through
its states.


We abstract parsing a Story row and generating an object of values so
that the Story create endpoint can accept into its own function. In
this function we also look up the Workflow state of the Story and the
requestor's ID. If you don't supply a requested_by_id it will be the
user who generated the token.

```javascript
function generateStory(ctx, row) {
    var rawStory = row.split(',');
    var user = findUserByEmail(ctx.users, rawStory[4]);
    var workflowState = findWorkflowStateByName(ctx.workflows, rawStory[3]);

    return { external_id: rawStory[0],
             name: rawStory[1],
             story_type: rawStory[2],
             workflow_state_id: workflowState.id,
             requested_by_id: user.id,
             project_id: ctx.projects[0].id,
             epic_id: ctx.epics[0].id,
             estimate: parseInt(rawStory[8])
    };

}
```

Lastly, we use `Promise.props` to request the Projects, Epics, users,
and Workflows that we need in order to create our new Stories.

```javascript
Promise.props({
    projects: clubhouse.listProjects().filter(function (x) { return x.name === 'API'; }),
    epics: clubhouse.listEpics().filter(function (x) { return x.name === 'Multi-org Support'; }),
    users: clubhouse.listUsers(),
    workflows: clubhouse.listWorkflows()
}).then(function (ctx) {

    fs.readFile('./stories.csv', function (error, csv) {
        if (error) { throw error; }
        var stories = _.tail(csv.toString().split('\n')).map(_.partial(generateStory, ctx));
        Promise.all(
            stories.map(function (x) { return clubhouse.createStory(x); })
         ).then(function (all) {
             console.log('Created ' + all.length + ' new stories in your clubhouse account');
         }).catch(function (e) {
             console.log(e);
         });
    });

});
```

`Promise.props` is used to create an object that matches the properties you've defined.

```shell
node import_to_clubhouse.js
```

And you should see something like.

```shell
Created 2 new Stories in your Clubhouse account.
```

## FAQ

### How do I redo/undo my import?

There are several ways to do this. The simplest way might be
to simply keep a mapping of the Story IDs you have created and
 delete those Stories if something goes wrong with your import.

### Do you support (language x)?

Right now we only support Node.js, but our REST API is well documented
and it is possible to interact with any language that supports
HTTP requests.

### I am getting an unauthorized error.
Check that your token was not entered incorrectly or deleted.
