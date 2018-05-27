browser(handler) {
	if (window) {
		window.onerror = function(messageOrEvent, source, noligne, nocolonne, erreur) {
			const obj = {
				err: messageOrEvent,
				src: source,
				line: noligne,
				column: nocolonne,
				errObj: erreur,
				time: new Date().toString()
			}
			handler(obj)
		}
	}
}
