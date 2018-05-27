listen(handler) {
	if (typeof module !== "undefined" && module.exports) {
		this.node(handler)
	} else {
		this.browser(handler)
	}
}
