import { spawn } from 'child_process'
import kill from 'tree-kill'

module.exports = (npmRunScript, options) => {
	const command = [ 'run', npmRunScript ]
	if (options && Array.isArray(options.args)) {
		command.push(...options.args)
	}

	let server

	function toExit() {
		if (server) kill(server.pid)
	}

	return {
		writeBundle() {
			toExit()
			server = spawn('npm', [ 'run', ...command ], {
				stdio: [ 'ignore', 'inherit', 'inherit' ],
				shell: true
			})
			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	}
}
