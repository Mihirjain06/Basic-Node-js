(function(){
    const Cars = "BMW"
    console.log(Cars); 
})(); 

//Using parameters of IIFE 
(function(message){
    const Cars = "BMW"
    console.log(message,Cars); 
})("Beautiful"); 