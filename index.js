#!/usr/bin/env node

// const args = process.argv.splice(2)
// const cmd = args[0]
// const rest = args.slice(1)
const [a, b, cmd, ...rest] = process.argv
// commands
const help = require('./cmds/help')
const add = require('./cmds/add')
const ls = require('./cmds/ls')
const check = require('./cmds/check')
const rm = require('./cmds/rm')

function handler(cmd='') {
  switch(cmd.toLowerCase()) {
    case 'rm':
      return rm(rest)
    case 'check':
      return check(rest)
    case 'ls':
      return ls()
    case 'add':
      return add(rest)
    case 'help':
      return help()
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)
