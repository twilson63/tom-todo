// const args = process.argv.splice(2)
// const cmd = args[0]
// const rest = args.slice(1)
const [a, b, cmd, ...rest] = process.argv
// commands
const help = require('./cmds/help')

function handler(cmd) {
  switch(cmd.toLowerCase()) {
    case 'help':
      return help()
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)
