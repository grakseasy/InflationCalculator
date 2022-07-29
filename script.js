
function inflationCalculator() {
    

    var rate = document.form1.rate;
    var w1  = document.form1.money;
    var years = document.form1.years;
    if(rate.value.length == 0 || w1.value.length == 0 || years.value.length == 0){
        alert("NISTE UNELI SVA POLJA!");  
    }
    else{ 
     rate = parseFloat(rate.value);
     w1 = parseFloat(w1.value);
     var w2 = w1;
     years = parseFloat(years.value);
   
    
 
 
    for(let i = 0; i < years ; i++){
            w1 = w1 * ((rate/100)+1);
        }
        w1 = w1.toFixed(2);
    
        document.getElementById('rezultat').innerHTML = `<div> Todays <span class="text-danger">${w2}</span> euros will be worth <span class="text-danger">${w1}</span> euros in <span class="text-danger">${years}</span> years.</div>`;
        
    }
}
   

