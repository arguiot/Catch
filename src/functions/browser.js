browser(handler) {
	if (window) {
		window.onerror = (messageOrEvent, source, noligne, nocolonne, erreur) => {
			const obj = {
				err: messageOrEvent,
				src: source,
				line: noligne,
				column: nocolonne,
				errObj: erreur,
				time: new Date().toString()
			}
			this.errors.push(obj)
			handler(obj)
		}
	}
}
