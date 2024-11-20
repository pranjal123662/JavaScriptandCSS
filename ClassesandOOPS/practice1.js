class Pranjal{
    constructor(...args){
        this.name=args[0]
        this.person=args[1]
    }
    greet(){
        console.log(this);
        console.log(`My name is ${this.name}`)
    }
}
const res=new Pranjal("Himanshu","Jalebi");
res.greet();
