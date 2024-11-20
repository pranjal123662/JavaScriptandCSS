class UserName{
    constructor(UserName){
        this.UserName=UserName;
    }
    logMe(){
        console.log("logged successfully")
    }
}

class Basic extends UserName{
    constructor(username,salary){
        super(username)
        this.salary=salary;
    }
    static showSalary(){
        console.log(this.salary);
    }
}

const s1=new Basic("Pranjal",2000);
console.log(Basic.showSalary)/* This is how we can access static property using classname*/

/*Static keyword is defined for data hiding when we use static keyword we cannot access 
that method from that instance.
In JavaScript, the static keyword is used to define methods and properties that belong 
to the class itself, rather than to instances of the class. Static methods and properties 
are accessible on the class but not on the individual objects (instances) created from the class.*/