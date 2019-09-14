'use strict';


var final = new Array();
var getLetters = new Array();
var finalFinal = new Array();
 function getLettersList(collection) {
   var letter = collection[0];
  return {
    key: letter,
    count: collection.length
  }; 
} 

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


function createUpdatedCollection(collectionA, objectB) {
  var getCollectedLetters = new Array();
  
  for(var x=0; x<=collectionA.length-1;x++) 
  {
    if(getLetters[0] != collectionA[x])   
    {
      if(getLetters.length != 0 )     
      { 
        getCollectedLetters = getLetters;     
        final.push(getLettersList(getCollectedLetters)); 
        getLetters.length = 0;    
      }
    }
      getLetters.push(collectionA[x]); 
      if(x+1 == collectionA.length)
      {
        final.push(getLettersList(getCollectedLetters)); 
      }
  }


var myArray = new Array();
var mema = 0;
var numberChar = 0;
for(var x = 0; x <= final.length-1; x++)  
{
  mema = 0;
  for(var y = 0; y <=objectB.value.length-1; y++)
  { 
    if(final[x].key.length == 3)
    {
      console.log(final[x].key.length);
      myArray.push(getcollectsame(final[x].key.substring(0,1),final[x].key.match(/\d+/)[0]));
      numberChar = 1;
      break;
    }
    if(final[x].key.length == 1) 
    {
    if(final[x].key == objectB.value[y])    
    {
    if(numberChar == 1)
    {
      
    }
      myArray.push(getcollectsame(final[x].key,final[x].count));  
      mema = 1; 
    }
    else
    {
    
    }
    }
  }
  if(mema == 0)
  { 
    myArray.push(getcollect(final[x].key,final[x].count));
  }
}
myArray.pop();
return(myArray);
}
