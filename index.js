theBeatlesPlay(musicians,instruments)
function theBeatlesPlay(musicians,instruments){
var emptyArray = []
  for( var i=0; i<musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(arr){
  facts = []
  i = 0
  while(i<facts.length){
    facts.push(arr[i] + "!!!")
  ++i 
  }
}
