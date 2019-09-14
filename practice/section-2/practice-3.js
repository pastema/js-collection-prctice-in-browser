'use strict';

var final = new Array();
var getLetters = new Array();
var getCollectedLetters = new Array();
var getAddNumber = new Array();
var letterHaveNumChar = 0;

 function getLettersList(collection) {
   var letter = collection[0];
  return {
    name: letter,
    summary: collection.length
  }; 
} 

 function getHaveNumChar(collection) {
   var letter = collection[0];
   var myNumbers =0;
   //console.log(getAddNumber.length + " GET ADDNUMBER LENGTH");
   for(var i = 0; i <= getAddNumber.length-1; i++)
   {
     myNumbers += Number(getAddNumber[i]);
   }
  //console.log("ANG IAADD "+ Number(myNumbers));
   //console.log("COLLECTION LENGTH  "+ collection.length);
  return {
    name: letter,
    summary: collection.length + Number(myNumbers)
  }; 
} 

function getHaveNumChar2(collection,letter) {
   var myNumbers =0;
   for(var i = 0; i <= getAddNumber.length-1; i++)
   {
     myNumbers += Number(getAddNumber[i]);
   }
   //console.log("LETTER MO " + letter);
  return {
    name: letter,
    summary: collection.length + Number(myNumbers)-1
  }; 
} 

 function getLast(collection) {
      var letter = collection[0];
  return {
    name: letter,
    summary: collection.length
  }; 
} 


function countSameElements(collection) {
  for(var x=0; x<=collection.length-1;x++) //37
  {
    if(collection[x].length ==1) 
    {
      if(getLetters[0] != collection[x])  
      {
        if(getLetters.length != 0)     
        { 
          getCollectedLetters = getLetters; 
          if(letterHaveNumChar == 0)
          {
            final.push(getLettersList(getCollectedLetters));  
          }
          else
          {
            final.push(getHaveNumChar(getCollectedLetters));
            letterHaveNumChar = 0;
            getAddNumber.length = 0;
          }
          getLetters.length = 0;    
        }
      }
    getLetters.push(collection[x]);
    }
    else
    {
      if(collection[x].substring(0,1) != getLetters[0]) // c != f
      {
        getCollectedLetters = getLetters; 
        final.push(getLettersList(getCollectedLetters));
        getLetters.length = 0;
        getLetters.push(collection[x].substring(0,1));
        var number;
        getAddNumber.push(number = collection[x].match(/\d+/)[0]);
        final.push(getHaveNumChar2(getCollectedLetters,collection[x].substring(0,1)));
        letterHaveNumChar = 0;
        getAddNumber.length = 0;
        getLetters.length = 0;
      }
      else
      {
       letterHaveNumChar = 1;
      var number;
      getAddNumber.push(number = collection[x].match(/\d+/)[0]); //get the value of number
      //console.log(getAddNumber + " GET ADD NUMBER"); 
      }
    }
}
return final;
}
