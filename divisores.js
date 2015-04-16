var myCad = "Es menor a 1";
var nCuantos = 0;

var myNbr = 45530;

if (myNbr > 0) {

	nCuantos = 1;
	myCad = "1";
	
	for (myDiv = 2; myDiv <= myNbr; myDiv++) {

		if ( myNbr % myDiv === 0 ) {
			myCad += ", " + String(myDiv);
			nCuantos++;
		}

	}
}

console.log("Tiene " + String(nCuantos) + " divisores: " + myCad);