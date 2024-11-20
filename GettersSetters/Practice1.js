const User={
    _name:"Pranjal",
    Goal:"switch kar le chutiya",
    current:"lust se dur rh",

    get name(){
        return this._name.toLowerCase()
    },

    set name(value){
        this._name=value;
    }

}

const chutiya=Object.create(User)
console.log(chutiya.name);
