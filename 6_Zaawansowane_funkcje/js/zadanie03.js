/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...
//Deklaracja funkcji
function sortArray() {

    //Twój komentarz ...
    //Tworzymy array
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ...
    //https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/sort

    //Więcej o algorytmach sortujacych http://blog.code.org/post/153734114248/cool-visualization-of-different-sorting
    points.sort(function(a, b) {
        //Twój komentarz ...
        //Sortuje z funckja porownujaca
        return a-b;
    });

    //Twój komentarz ...
    //zwracam posortowany array
    return points;
}

//Twój komentarz ...
//pokazuje array
console.log(sortArray());
