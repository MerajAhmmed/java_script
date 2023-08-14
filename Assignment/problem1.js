
function cubeNumber(number) {
   if(typeof number == 'number')
   {
       var result = number * number * number;
    return result;
   }
   else
   {
    return('this is not a nnumber')
   }
}

function matchFinder(string1, string2) {
      let count = 0;
  if(typeof(string1) !== "string" || typeof(string2) !== "string")
  {
    return false;
  } 

  if(string1.length < string2.length)
  {
    return false;
  }

  if(string1.search(string2) !== -1)
  {
    return true;
  }
  
  return false;
}

function sortMaker(arr) {
   
   if(!Array.isArray(arr))
   {
      return false;
   }
   else
   {
      for(let i = 0; i<arr.length; i++)
      {
         if(typeof arr[i] !== 'number' && arr.length === 2)
         {
            return false;
         }
         else if(arr[i] < 0)
         {
            return "Invalid Input";
         }
         else
         {
            if(arr[0] === arr[1])
            {
               return "equal";
            }
            else
            {
               [arr[0], arr[1]] = [arr[1], arr[0]];
               return arr;
            }
         }
      }
    }    
}       

function findAddress(obj){
   let str = "";
   if(obj.street){
      str += obj.street
      str += ","
   } else {
      str += "__,"
   }

   if(obj.house){
      str += obj.house
      str += ","
   } else {
      str += "__,"
   }

   if(obj.society){
      str += obj.society
   } else {
      str += "__"
   }
   return str;
}

function canPay(changeArray, totalDue) {
      if(!Array.isArray(changeArray) && typeof totalDue == 'number')
      {
            return "it is not an array and it is not a number";
      }
      else
      {
            if(changeArray.length === 0)
            {
                  return "your first element is empty";
            }
            var SumOfArray = 0;
            for(var i = 0; i < changeArray.length; i++)
            {
                  SumOfArray += changeArray[i];  
            }
            if(SumOfArray >= totalDue)
            {
                return true;
            }else
            {
                  return false;
            }    
      }
   
}


