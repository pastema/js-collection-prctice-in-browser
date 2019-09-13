'use strict';

function createUpdatedCollection(collectionA, objectB) {
  function getcollectsame(key, count) {
    var localMinus = 0;
    
    localMinus = Math.floor(count/3);

    
  return {
    key: key,
    count: count - localMinus
  };
}


function getcollect(key, count) {
  return {
    key: key,
    count: count
  };
}

var myArray = new Array();
var mema = 0;

for(var x = 0; x <= collectionA.length-1; x++)  
{
mema = 0;
for(var y = 0; y <=objectB.value.length-1; y++)
{ 
  if(collectionA[x].key == objectB.value[y])    
  {
    myArray.push(getcollectsame(collectionA[x].key,collectionA[x].count));  
    mema = 1;
  }
  else
  {
    
  }
}
  if(mema == 0)
  { 
    myArray.push(getcollect(collectionA[x].key,collectionA[x].count));
  }
}
  return myArray;
}
