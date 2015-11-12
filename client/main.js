Template.howmany.count = function () {

    var numer = People.find().fetch().length;

    if (People.find() != undefined) {
    	var numer = People.find().fetch().length;

    	var colors = ['rebeccapurple','blue','steelblue'];
    	var body = $('body');

    	for(i=0; i<colors.length; i++){

	        if(numer === 1){
	    		body.css({background:colors[0]});
	    		console.log(colors[numer]);
	        }

	        if(numer === 2){
	    		body.css({background:colors[1]});
	    		console.log(colors[numer]);
	        }

	        if(numer === 3){
	    		body.css({background:colors[2]});
	    		console.log(colors[numer]);
	        }

    	}

        return numer;
    }
    return 'Well well well...';
}