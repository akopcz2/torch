Template.howmany.count = function () {

    var numer = People.find().fetch().length;

    if (People.find() != undefined) {
    	var numer = People.find().fetch().length;


		//generate a random colors 
		var cl = "#" + Math.random().toString(16).slice(2, 8);
    	var body = $('body');
    	var player = $('#christmas');

    	for(i=0; i<cl.length; i++){

			body.css({background:cl});

    	}

        return numer;
    }

    return;
}



