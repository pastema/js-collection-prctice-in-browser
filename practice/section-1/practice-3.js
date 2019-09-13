'use strict';

function collectSameElements(collectionA, objectB) {
  var myArray = new Array();
  
  for(var x = 0; x <= collectionA.length-1; x++)
  {
      for(var y = 0; y <=objectB.value.length-1; y++)
      {
        if(objectB.value[y] == collectionA[x])
        {
          myArray.push(objectB.value[y]);
        }
        else
        {
         
        }
      }
  }
  return myArray;
}

