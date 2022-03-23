**Create variables**
* title

* input box
    * onSubmit for taking in todo's ---> newTodo function
    * ready to take in a new todo after the previous todo is added

* to do item
    * input check box
    * description text 
    * X close button
    * onClick for checkbox ---> markComplete function
    * onClick for X ---> deleteTodo function

* number of to do's div
    * show todos.active.length

* filter buttons container:
    * All
        * onClick ---> filterAll: shows all todos in list (active and completed)
    * Active
        * onClick ---> filterActive: only shows active todos
    * Completed
        * onClick ---> filterCompleted: only shows completed todos

* ... menu
    * complete all button
        * markComplete for all todos

    * clear completed button
        * for any todos that are completed (checked) ---> delete // hide appearence

    * Activate all button
        * Ability to press a button and all checked off items become active again
        * for any todos that are completed (checked) ---> mark un-completed // uncheck again

**Functionality** 
* newTodo
    * add to the all list in app state
    * active status
    * unique id
    * save input as description
    * update local storage 
    * clear input box


~ markComplete, markUncomplete, and deleteTodo can be the same function with different props ?

* markComplete
    * find unique id for the chosen todo
    * update todo state to completed
    * update list state
    * update local storage

* markUncomplete 
    * same as above except updating to do state to uncomplete

* deleteTodo 
    * same as above except making item hidden // deleted


~ filter functions can have one template function that pass in different props ? ...loop through todos to find the following...CONDITIONAL RENDERING!

    * filterAll ---> all todos (checked and unchecked)

    * filterActive ---> unchecked todos

    * filterCompleted ---> checked todos

**State**
App state: 
- current view (all, active, complete)
- todo list as []

Todo state (singular todo):
- status (active/inactive // checked/unchecked)
- description (input value) ...can be updated/edited
- id (not going to change, so not really state but a property of each todo)

**Tree structure**
title
input
todos
    todo
        input checkbox
        text (<p>?)
        button X
    todo
    todo
number of items <div> or <p>
filter button container
    button All
    button Active
    button completed
overflow menu
    button complete all
    button clear completed
    button activate all


**Props tree** 
App --> import ToDoList and pass todos to ToDoList from state
ToDoList --> expects todos as prop, import Task and pass todo to Task from mapping
Task --> expects todo as prop

**unique id for each todo**
ex: 
1: do laundry
2: walk dog
3: do homework
4: workout

unique id 1: d
uniqure id 2: w
unique id 3: do
unique id 4: wo

