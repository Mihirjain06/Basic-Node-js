class Cars{
    constructor(name){
        this.name = name;
    }

    getname(){
        return this.name;
    }
    
    setname(name){
        this.name = name;
    }
}
module.exports = new Cars("BMW");