constructor(handler) {
	this.version = "%%GULP_INJECT_VERSION%%" // Catch version

	this.listen(handler)

	this.errors = []
}
