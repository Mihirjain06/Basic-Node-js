function greet(name) {
    console.log(`Hello ${name}`);

}
function greetmihir(callback){
    const name = "Mihir Jain"
    callback(name);
}
greetmihir(greet);