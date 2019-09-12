'use strict';

function collectSameElements(collectionA, collectionB) {
  var myArray = new Array();
  
  for(var x = 0; x <= collectionA.length-1; x++)
  {
      for(var y = 0; y <=collectionB.length-1; y++)
      {
        if(collectionB[y] == collectionA[x])
        {
          myArray.push(collectionB[y]);
        }
        else
        {
         
        }
      }
  }

  return myArray;
}