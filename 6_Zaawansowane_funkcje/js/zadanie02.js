/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Twój komentarz ...
function jeden() {

    //Twój komentarz ... Dostępna w funkcji jeden() i dwa()
    var zmienna1 = 1;

    //Twój komentarz ...
    function dwa() {

        //Twój komentarz ...
        console.log(zmienna1);

        //Twój komentarz ...
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    dwa();

    //Twój komentarz ... Zmienna2 jest lokalna dla funkcji dwa czyli jest niewdoczna w funkcji jeden
    console.log(zmienna2)
}

//Twój komentarz ...
jeden()
