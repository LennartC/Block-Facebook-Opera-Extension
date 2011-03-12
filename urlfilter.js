if (typeof opera.extension.urlfilter != 'undefined') {
	var fbDomains = ['facebook.com', 'facebook.net', 'fb.com', 'fbcdn.com', 'fbcdn.net'];
	var fbPaths = ['plugins'];

    var filter = opera.extension.urlfilter;
	for (var i=0, leni = fbDomains.length; i < leni; i++) {
		for (var j=0, lenj = fbPaths.length; j < lenj; j++) {
			filter.block.add('*://'+fbDomains[i]+'/'+fbPaths[j]+'/*');
			filter.block.add('*://*.'+fbDomains[i]+'/'+fbPaths[j]+'/*');
		}
	}
}