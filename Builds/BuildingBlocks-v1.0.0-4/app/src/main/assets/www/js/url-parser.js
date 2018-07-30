
var parser ={

	printkeys: function() {
		var urlArray = [];
		
		//var testUrl = new URL("file:///android_asset/www/index.html#uid=5b50255d281f2?language=Hindi?grade=1?url=./");
		//var urlkeys = testUrl.hash.split('#')[1];
		
		var urlkeys = window.location.hash.split('#')[1];
		//console.log(urlkeys);
		
		urlkeys.match(/[#=][^#=?&]*/g).map(function(m) {
			//console.log( m.substr(1));
			urlArray.push(m.substr(1));
		});
		
		return urlArray;
	}
}

//parser.printkeys();

