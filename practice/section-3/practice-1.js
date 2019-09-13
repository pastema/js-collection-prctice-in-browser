'use strict';


function getcollectsame(key, count) {
  return {
    key: key,
    count: count - 1
  };
}

function getcollect(key, count) {
  return {
    key: key,
    count: count
  };
}

function createUpdatedCollection(collectionA, objectB) {

  var myArray = new Array();
  var ifSame = 0;
  
for(var x = 0; x <= collectionA.length-1; x++)
{
  ifSame = 0;
  for(var y = 0; y <=objectB.value.length-1; y++) 
  { 
    if(collectionA[x].key == objectB.value[y])    
    {
      myArray.push(getcollectsame(collectionA[x].key,collectionA[x].count));  
      ifSame = 1;
    }
    else
    {
      
    }
  }
    if(ifSame == 0)
    { 
      myArray.push(getcollect(collectionA[x].key,collectionA[x].count));
    }
}

return myArray;
}
