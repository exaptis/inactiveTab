javascript:(function()%7Bjavascript:(function()%7Bwindow.hidden%3D%27hidden%27%3Bwindow.inactiveTab%3D%7Bcounter:0,interval:0,documentTitle:document.title,init:function()%7Bif(hidden%20in%20document)document.addEventListener(%22visibilitychange%22,this.toggleTimer.bind(this))%3Belse%20if((hidden%3D%22mozHidden%22)in%20document)document.addEventListener(%22mozvisibilitychange%22,this.toggleTimer.bind(this))%3Belse%20if((hidden%3D%22webkitHidden%22)in%20document)document.addEventListener(%22webkitvisibilitychange%22,this.toggleTimer.bind(this))%3Belse%20if((hidden%3D%22msHidden%22)in%20document)document.addEventListener(%22msvisibilitychange%22,this.toggleTimer.bind(this))%3Belse%20if(%27onfocusin%27%20in%20document)document.onfocusin%3Ddocument.onfocusout%3Dthis.toggleTimer.bind(this)%3Belse%20window.onpageshow%3Dwindow.onpagehide%3Dwindow.onfocus%3Dwindow.onblur%3Dthis.toggleTimer.bind(this)%3B%7D,resetCounter:function()%7Bthis.counter%3D0%3B%7D,toggleTimer:function()%7Bif(this.counter%3D%3D%3D0%26%26!this.interval)%7Bthis.startTimer()%3B%7Delse%7Bthis.stopTimer()%3B%7D%7D,startTimer:function()%7Bthis.resetCounter()%3Bthis.interval%3DsetInterval(this.increaseTimer.bind(this),1000)%3B%7D,stopTimer:function()%7BclearInterval(this.interval)%3Bthis.interval%3Dundefined%3Bthis.resetCounter()%3B%7D,clearTimer:function()%7Bthis.stopTimer()%3Bthis.resetDocumentTitle()%3B%7D,increaseTimer:function()%7Bthis.counter%2B%2B%3Bthis.setDocumentTitle(this.getReadableTimeFromSeconds(this.counter)%2B%27%20-%20%27%2Bthis.documentTitle)%3B%7D,setDocumentTitle:function(documentTitle)%7Bdocument.title%3DdocumentTitle%3B%7D,resetDocumentTitle:function()%7Bdocument.title%3Dthis.documentTitle%3B%7D,getReadableTimeFromSeconds:function(totalSec)%7Bvar%20hours%3Dthis.modulo(parseInt(totalSec/3600),24),minutes%3Dthis.modulo(parseInt(totalSec/60),60),seconds%3Dthis.modulo(totalSec,60),formatedTime%3D%27%27%3Bif(hours%3E0)%7BformatedTime%3D(hours%3C10%3F%270%27%2Bhours:hours)%2B%27:%27%3B%7Dreturn%20formatedTime%2B(minutes%3C10%3F%270%27%2Bminutes:minutes)%2B%27:%27%2B(seconds%3C10%3F%270%27%2Bseconds:seconds)%3B%7D,modulo:function(dividend,divisor)%7Breturn%20Math.floor((dividend/divisor-Math.floor(dividend/divisor))*divisor)%3B%7D%7D%3Bwindow.inactiveTab.init()%3B%7D)()%3B%7D)()%3B