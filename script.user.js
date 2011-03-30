// ==UserScript==
// @name Quodis Mail Favicon Replacer
// @match https://mail.google.com/*
// ==/UserScript==
function replaceIcon() {
    var title = document.getElementsByTagName('title')[0];
    if (title && title.innerText && title.innerText.search('Quodis') >= 0) {
    	var links = document.getElementsByTagName('link'),
    	href,
    	newHref;
    	
    	for (var i=links.length; i--; ) {
    		if (links[i].type == 'image/x-icon') {
    		    href = links[i].href.split('/').reverse();
    		    newHref = 'http://dl.dropbox.com/u/16123073/favicon/' + href[0];
    			links[i].href = newHref;
    		}
    	}
    }
}

replaceIcon();
setInterval(replaceIcon, 500);