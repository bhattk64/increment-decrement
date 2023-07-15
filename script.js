const countvalue=document.querySelector('#counter');


function decrement()  {
 
    //  value paune UI bata 

    let value= parseInt(countvalue.innerText);

    // update garne value lai 

    value = value-1;

    // value lai UI ma set garne 

    countvalue.innerText=value;
};

function increment() {

     //  value paune UI bata 
    
     let value= parseInt(countvalue.innerText);

     // update garne value lai 
 
     value=value+1;
 
     // value lai UI ma set garne 
 
     countvalue.innerText=value;

};