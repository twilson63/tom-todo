# Toms Todo CLI

A project todo list app.

## Summary

Create Project Checklists quickly and without leaving the command line. There are
a lot of a great todo list applications, but sometimes you just need a quick way
to keep a list of items and track what is done. The todos-cli is a way to keep
your list in a json file and access and manage it via the command line, you
can check it in to your repository and leverage it to keep track of your progress.

## Install

* NodeJS v8 is required

`npm install toms-todos -g`

## Usage

* Create todo
* List Todos
* Mark a Todo Complete
* Remove a Todo Item

### Create Todo

Adds a new todo to your project

`todo add [Text Description here]`

eg:

`todo add (feat): implement percent completed command`

### List Todos

List all todos in your project.

`todo ls`

### Mark Todo Completed

Toggle a todo from completed

`todo check [Todo Id Here]`

eg:

`todo check 2`

### Remove Todo

Removes a specific todo by providing the todo id

`todo rm [Todo Id Here]`

eg:

`todo rm 1`


## Future features

* Edit Todo
* Show the percent complete `todo progress`
* Assign todo task to person
* Record the date time completed
* Add tags
* Create a flag to show tags with list
* Export to github issues
* Export to trello board and list

Other suggestions?

## License

MIT

## How to contribute

* Contributions are welcome - submit a PR

## Styleguide

* standardjs
* fun-fp linter

## Project Structure

* `index.js` - main executable file
* cmds - contains all the command handlers
* `cmds/add.js` - `todo add` command handler
* `cmds/ls.js` - `todo ls` command handler
* `cmds/check.js` - `todo check` command handler
* `cmds/rm.js` - `todo rm` command handler
* `cmds/help.js` - `todo help` command handler
* lib - contains the library functions
* `lib/store` - storage library - get/set
