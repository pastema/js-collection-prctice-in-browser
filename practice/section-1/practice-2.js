'use strict';

function collectSameElements(collectionA, collectionB) {
  var myArray = new Array();
  
  for(var x = 0; x <= collectionA.length-1; x++)
  {
      for(var y = 0; y <=collectionB[0].length-1; y++)
      {
        if(collectionB[0][y] == collectionA[x])
        {
          myArray.push(collectionB[0][y]);
        }
        else
        {
         
        }
      }
  }
  return myArray;
}