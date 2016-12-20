/**
 * Created by Jacek on 2016-01-11.
 */


 var arr = [
 [11, 12],
 [42, 2],
 [-4, -120],
 [0, 0],
 [1, 34],
 ];
 function print2DArray(array) {
     for(var i = 0 ; i < array.length ; i++)
     {
         for(var t = 0 ; t < array[i].length ; t++)
         {
             console.log(array[i][t]);
         }
     }
 }
 print2DArray(arr);

 var random = [["kasia", "Asia"],["Ada", "panda"],["kot", "ryś", "łoś"]];
  print2DArray(random);


  function create2DArray(rows, columns) {
      //Tworzę tablice
      var table = [];
      //Tworzę counter
      var counter = 0;


      for(var i = 0 ; i < rows ; i++) {
          table[i] = [];
          for(var t = 0 ; t < columns ; t++) {
              table[i].push(counter)
              counter++;

          }

      }

      return table;
  }

  var result = create2DArray(3,3);
  console.log(result);
