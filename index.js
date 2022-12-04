// Code your solutions in this file
const names = ["Ada","Brendan","Ali"]
const eventName = ["surprise"]
function writeCards(names ,eventName) {
  let array=[]
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    
  }
      return array;
} 


  function countDown(num){
    while(num >= 0){
      console.log(num);
      num--;
    }
  }
    

