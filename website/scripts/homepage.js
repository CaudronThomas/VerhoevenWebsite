function NewsArticle(type, date, name, text) {
	var self = this;

	self.type= type;
	self.date = date; 
	self.name = name; 
	self.text = text;

	self.getTypeImage = ko.computed(function(){
		return "images/" + self.type + ".jpg";
	});
}

	function Homepage() {
		var self = this;

		self.years = ko.observableArray();
		self.articles = [ 
			new NewsArticle("twitter", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke"),
			new NewsArticle("facebook", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke"),
			new NewsArticle("twitter", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke")
		];

		function getData(){
			$.getJSON("data/results.json", function(json) {
				self.years(json);
			});
		}

		getData();
	}

	ko.applyBindings(new Homepage());
