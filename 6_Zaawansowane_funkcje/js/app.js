/**
 * Created by Agata on 21.01.2016.
 */


//Zadanie 1
function go() {
  console.log("Jajka ugotowane");
  //Czyszczę zeby nie gotowac liczyc jeszcze raz
  clearInterval(check);

}
function boilEgg() {
    var boil = setTimeout(function() {
        go();



    }, 5000);



    check = setInterval(function() {
        console.log("Jako się gotuje");
    }, 1000);
}

boilEgg();





var id = setInterval(function() {
    console.log('jestem wywoływana co dwie sekundy');
}, 2000
)


clearInterval(id)

//Zadanie 4


function getHighest() {
    console.log(arguments);
    var highest = null;

    if(typeof arguments == 'object') {

        for(var i = 0 ; i < arguments.length ; i++) {
            if(typeof arguments[i] == 'number') {
                if(arguments[i] > highest) {
                    highest = arguments[i];
                }
            }
        }

    }

    return highest;
}
console.log(getHighest(2,3,44,5,6));
