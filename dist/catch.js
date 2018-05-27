"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*****************************************************

	                    Catch
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
var Catch = function () {
	_createClass(Catch, [{
		key: "browser",
		value: function browser(handler) {
			if (window) {
				window.onerror = function (messageOrEvent, source, noligne, nocolonne, erreur) {
					var obj = {
						err: messageOrEvent,
						src: source,
						nLine: noligne,
						nColumn: nocolonne,
						errObj: erreur,
						time: new Date().toString()
					};
					console.log(obj);
					handler(obj);
				};
			}
		}
	}]);

	function Catch(handler) {
		_classCallCheck(this, Catch);

		this.version = "v0.0.1"; // Catch version

		this.listen(handler);
	}

	_createClass(Catch, [{
		key: "listen",
		value: function listen(handler) {
			if (typeof module !== "undefined" && module.exports) {
				this.node(handler);
			} else {
				this.browser(handler);
			}
		}
	}, {
		key: "node",
		value: function node(handler) {
			if (process) {
				process.on('uncaughtException', function (err) {
					var obj = {
						err: err,
						time: new Date().toString()
					};
					handler(obj);
				});
			}
		}
	}]);

	return Catch;
}();
// Browserify / Node.js


if (typeof define === "function" && define.amd) {
	define(function () {
		return new Catch();
	});
	// CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
	// Support Node.js specific `module.exports` (which can be a function)
	if (typeof module !== "undefined" && module.exports) {
		exports = module.exports = new Catch();
	}
	// But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
	exports.Catch = new Catch();
} else if (typeof global !== "undefined") {
	global.Catch = new Catch();
}