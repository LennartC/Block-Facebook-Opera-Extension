(function() {

	var fbDomains = ['facebook.com', 'facebook.net', 'fb.com', 'fbcdn.com', 'fbcdn.net'];

	function isFacebookDomain(domain) {
		for (var i = 0; i<fbDomains.length; i++) {
			if (domain.toLowerCase().indexOf(fbDomains[i]) != -1) return true;
		}
		return false;
	};

	if (!isFacebookDomain(window.location.hostname)) {
	  console.log('blocking from: '+window.location.hostname);
	  window.opera.addEventListener('BeforeScript', function (e) {
		var hostname = e.element.src.split(/\/+/g)[1];
		if (hostname && isFacebookDomain(hostname)) {
		
			e.preventDefault();
			console.log("blocking "+hostname);
			console.log(e);
		}
	  }, true);

	} else {
		console.log('not blocking from: '+window.location.hostname);
	}

}());
