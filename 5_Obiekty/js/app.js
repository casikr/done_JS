/**
 * Created by Jacek on 2016-01-11.
 */

 String.prototype.upperLower = function() {
     console.log(this);
     var string = [];
     var counter = 0;
     for(var i = 0 ; i < this.length ; i++) {

         if(this.charAt(i) != " ") {
             counter++;
             if(counter%2==0)
             {
                 string.push(this.charAt(i).toLowerCase());
             }
             else
             {
                 string.push(this.charAt(i).toUpperCase());
             }
        } else {
            string.push(" ");
        }
     }
     return string.join("");
 }
var s = "Koza do Woza do Siana do Zboza".upperLower();
console.log(s);

//Ćwiczenie 2

function samochod(marka, kolor, km) {
    this.marka = marka;
    this.kolor = kolor;
    this.km = km;
    this.printCarinfo = function() {
        console.log(this.marka + ', ' + this.kolor + ', ' + 'Przejechane: 0', this.km);
    };
    this.drive = function(kms) {
        return this.km + kms;

    }

}
samochod.prototype.reviews = [];
samochod.prototype.addReview = function(review) {
    this.reviews.push(review);
    //console.log(this.reviews);

};
samochod.prototype.showReview = function() {
    console.log(this.reviews);
}

var skoda = new samochod('skoda', 'srebrny', 1200);


skoda.drive();
skoda.printCarinfo();
skoda.addReview("2023");
skoda.addReview("2023");
skoda.addReview("2033");
skoda.addReview("2053");
skoda.addReview("2063");
skoda.showReview();

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        console.log(this.width * this.height);
    };
    this.getPerimiter = function() {
        console.log(2*this.width + 2*this.height);
    };
}

var kwadrat = new Rectangle(100, 200);
kwadrat.getArea();
kwadrat.getPerimiter();


function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    var string = "added " + num1 + " to " + num2 + " got " + result;

    this.history.push(string);

}
Calculator.prototype.multiple = function(num1, num2) {
    var result = num1 * num2;
    var string = "Multiple " + num1 + " to " + num2 + " got " + result;

    this.history.push(string);

}

Calculator.prototype.subtract = function(num1, num2) {
    var result = num1 - num2;
    var string = "Subtracting " + num1 + " to " + num2 + " got " + result;

    this.history.push(string);

}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    var string = "Divide " + num1 + " to " + num2 + " got " + result;

    this.history.push(string);

}

Calculator.prototype.printOperations = function() {
    console.log(this.history);
}
Calculator.prototype.clearOperations = function() {
    this.history = [];
}

var act = new Calculator();
act.add(2,3);
act.subtract(200, 333);
act.divide(2,2);
act.multiple(2,33);
act.printOperations();
