node(handler) {
	if (process) {
		process.on('uncaughtException', err => {
			const obj = {
				err: err,
				time: new Date().toString()
			}
			this.errors.push(obj)
			handler(obj)
		});
	}
}
