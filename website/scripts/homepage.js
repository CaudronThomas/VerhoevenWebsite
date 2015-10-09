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

function Result(type, text){
	var self = this;

	self.type = type;
	self.text = text;
}

function BioYear(year){
	var self = this;

	self.year = year;
	self.results = [
		new Result("uitleg", "Uitleg over dit jaar kan hier komen met wat tijden en nog vanalle andere dingen!"),
		new Result("ek", "7<sup>e</sup> 3000m Steeple ETC Heraklion (GRE)"),
		new Result("bk", "2<sup>e</sup> 3000m Steeple (AC)"),
		new Result("pk", "1<sup>e</sup> 1500m (senioren)")
		
	];
}

function Homepage() {
	var self = this;

	self.articles = [ 
		new NewsArticle("twitter", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke"),
		new NewsArticle("facebook", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke"),
		new NewsArticle("twitter", "25 apr. 2015 // 00:11", "@VerhoevenAstrid", "Geen PK voor mij dit jaar, ziektekiemen hebben er anders over beslist. Aan iedereen die deelneemt: veel succes! #PKOVL @ACLebbeke")
	];

	self.years = [
		new BioYear("'15"),
		new BioYear("'14")
	]
}

ko.applyBindings(new Homepage());