// ==UserScript==
// @name Quodis Mail Favicon Replacer
// @match https://mail.google.com/*
// ==/UserScript==
function replaceIcon() {
	var title = document.getElementsByTagName('title')[0];
	
    if (title && title.innerText && title.innerText.search('Quodis') != -1) {
    	var links = document.getElementsByTagName('link'),
    	href,
    	newHref,
    	inboxElement = document.getElementById("canvas_frame").contentDocument.getElementsByClassName("n0").item(0),
    	inboxTitle,
    	unreadMsgCount = 0,
    	matches;
    	
    	if (inboxElement) {
    		inboxTitle = inboxElement.title;
    		matches = inboxTitle.match(/\((\d*)\)/);
    		
    		if (matches) {
				unreadMsgCount = matches[1];
			} else {
				unreadMsgCount = 0;
			}
			
			unreadMsgCount = (unreadMsgCount > 20) ? '20+' : unreadMsgCount;
    	}
    	
    	for (var i=links.length; i--; ) {
    		if (links[i].rel == 'icon' || links[i].rel == 'shortcut icon') {
    		    //href = links[i].href.split('/').reverse();
    		    newHref = 'http://dl.dropbox.com/u/16123073/favicon/' + unreadMsgCount + '.png';
    			links[i].href = newHref;
    		}
    	}
    }
}


replaceIcon();
setInterval(replaceIcon, 250);