/*****************************************************

	                    Catch
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
class Catch {
	browser(handler) {
		if (window) {
			window.onerror = function(messageOrEvent, source, noligne, nocolonne, erreur) {
				const obj = {
					err: messageOrEvent,
					src: source,
					nLine: noligne,
					nColumn: nocolonne,
					errObj: erreur,
					time: new Date().toString()
				}
				console.log(obj)
				handler(obj)
			}
		}
	}
	constructor(handler) {
		this.version = "v0.0.1" // Catch version
	
		this.listen(handler)
	}
	listen(handler) {
		if (typeof module !== "undefined" && module.exports) {
			this.node(handler)
		} else {
			this.browser(handler)
		}
	}
	node(handler) {
		if (process) {
			process.on('uncaughtException', err => {
				const obj = {
					err: err,
					time: new Date().toString()
				}
				handler(obj)
			});
		}
	}
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
    define(() => new Catch);
    // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== "undefined" && module.exports) {
        exports = module.exports = new Catch;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.Catch = new Catch;
} else if (typeof global !== "undefined") {
    global.Catch = new Catch;
}