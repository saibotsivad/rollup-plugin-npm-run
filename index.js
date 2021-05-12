import { spawn } from 'child_process'
import kill from 'tree-kill'

export default npmRunScript => {
	let server

	function toExit() {
		if (server) kill(server.pid)
	}

	return {
		writeBundle() {
			toExit()
			server = spawn('npm', [ 'run', npmRunScript ], {
				stdio: [ 'ignore', 'inherit', 'inherit' ],
				shell: true
			})
			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	}
}
