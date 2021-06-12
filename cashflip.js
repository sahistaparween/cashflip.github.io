var url="https://api.exchangeratesapi.io/latest?base=";
async function convert(){

  
   let base = document.getElementById('Base').value;
   let out = document.getElementById('Output').value;
   let amount = document.getElementById('amount').value;
   let finalValue;
   
   
   let response= await fetch('https://api.exchangeratesapi.io/latest?base=',{method:'GET'});
   let data= await response.json();
   finalValue=data.rates;
   if(base=='EUR')
   {
      finalValue=finalValue[out]*Number(amount);
   }
   else{
       finalValue=(1/finalValue[base])*(finalValue[out])*Number(amount);
   }
   console.log(finalValue);
   let res= 'Converted Amount of '+amount+' ' +base +' is '+ finalValue+ ' '+out ;
   let finalRes = res.fontcolor("dark red");
   document.getElementById('converted').innerHTML=finalRes;
}
