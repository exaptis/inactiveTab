javascript:(function(window){
var _inactiveTab = {
	counter: 0,
	interval: 0,
	documentTitle: document.title,
	
	init: function() {
		// http://stackoverflow.com/questions/1060008/is-there-a-way-to-detect-if-a-browser-window-is-not-currently-active
		if ('hidden' in document)
			document.addEventListener("visibilitychange", this.toggleTimer.bind(this));
		else if ('mozHidden' in document)
			document.addEventListener("mozvisibilitychange", this.toggleTimer.bind(this));
		else if ('webkitHidden' in document)
			document.addEventListener("webkitvisibilitychange", this.toggleTimer.bind(this));
		else if ('msHidden' in document)
			document.addEventListener("msvisibilitychange", this.toggleTimer.bind(this));
		else if ('onfocusin' in document)
			document.onfocusin = document.onfocusout = this.toggleTimer.bind(this);
		else
			window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.toggleTimer.bind(this);
	},
	
	resetCounter: function() {
		this.counter = 0;
	},
	
	toggleTimer: function() {
		if(this.counter === 0 && !this.interval) {
			this.startTimer();
		} else {
			this.stopTimer();
		}
	},
	
	startTimer: function() {
		this.resetCounter();
		this.interval = setInterval(this.increaseTimer.bind(this),1000);
	},
	
	stopTimer: function() {
		clearInterval(this.interval);
		this.interval = undefined;
		this.resetCounter();
	},
	
	clearTimer: function() {
		this.stopTimer();
		this.resetDocumentTitle();		
	},
	
	increaseTimer: function() {
		this.counter++;
		this.setDocumentTitle(this.getReadableTimeFromSeconds(this.counter)+' - '+this.documentTitle); 	
	},
	
	setDocumentTitle: function(documentTitle) {
		document.title = documentTitle;
	},
	
	resetDocumentTitle: function() {
		document.title = this.documentTitle;
	},
	
	getReadableTimeFromSeconds: function(totalSec) {
		var hours = this.modulo(parseInt( totalSec / 3600 ),24),
			minutes = this.modulo(parseInt( totalSec / 60 ),60), 
			seconds  = this.modulo(totalSec,60), 
			formatedTime = '';
		
		if(hours > 0) {
			formatedTime =  (hours < 10 ? '0' + hours : hours) + ':';
		}
		return formatedTime + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds  < 10 ? '0' + seconds : seconds);
	},
	
	modulo: function(dividend, divisor) {
		return Math.floor((dividend/divisor-Math.floor(dividend/divisor))*divisor);
	}
};
_inactiveTab.init();

window.inactiveTab = {
	startTimer: _inactiveTab.startTimer,
	stopTimer: _inactiveTab.stopTimer,
	clearTimer: _inactiveTab.clearTimer,
}

})(window);