'use strict';
var final = new Array();
var getLetters = new Array();
 function getLettersList(collection) {
   var letter = collection[0];
  return {
    key: letter,
    count: collection.length
  }; 
} 


function countSameElements(collection) {
  var getCollectedLetters = new Array();
  
  for(var x=0; x<=collection.length-1;x++)
  {
    if(getLetters[0] != collection[x])   
    {
      if(getLetters.length != 0 )     
      { 
        getCollectedLetters = getLetters;    
        final.push(getLettersList(getCollectedLetters)); 
        getLetters.length = 0;    
      }
    }
      getLetters.push(collection[x]); 
      if(x+1 == collection.length)
      {
        final.push(getLettersList(getCollectedLetters)); 
      }
}
     return(final);

}
