/*****************************************************

	                    Catch
	=================================================
	Copyright © Arthur Guiot 2018. All right reserved.

******************************************************/
class Catch {}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Catch());
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
