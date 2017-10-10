import cli from 'commander'
import develop from './commands/develop'
import build from './commands/build'
import { version } from '../package'

cli
  .usage('<command> [options]')
  .version(version)

cli
  .command('develop <file>')
  .description('Develop your email.')
  .option('--open', 'Open the email in your browser')
  .option('-p, --port', 'Port for server', 3000)
  .action(develop)

cli
  .command('build <file>')
  .description('Build an HEML email for sending in the wild.')
  .option('-o, --output <file>', 'The output HTML file')
  .option('-v, --validate [level]', 'Sets the validation level', /^(none|soft|strict)$/i, 'soft')
  .action(build)

if (!process.argv.slice(2).length) {
  cli.outputHelp()
}

cli.parse(process.argv)