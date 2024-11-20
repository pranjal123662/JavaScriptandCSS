class Candidate{
    constructor(name,city,designation,yop){
        this.name=name;
        this.city=city,
        this.designation=designation;
        this.yop=yop

    }
    getAllData(){
        console.log(this)
        return `Candiates Name ${this.name}
                Candidate city name ${this.city}
                Candidate Designation ${this.designation}
                Candidate year of experience ${this.yop}`
                
    }
}

class InterviewResult extends Candidate{
    constructor(name,city,designation,yop,interviewerfeedBack,hrFeedBack,finalResult){
        super(name,city,designation,yop)
        this.interviewerfeedBack=interviewerfeedBack;
        this.hrFeedBack=hrFeedBack;
        this.finalResult=finalResult;
    }
}

const chai=new InterviewResult("Pranjal","Jaunpur","Engineer","3 years","positive","positive","hired");
const tea= new Candidate("Pranjal","Jaunpur","Senior Engineer","3 years");
console.log(chai instanceof Candidate)
/*In JavaScript, an instance refers to an individual object created using a class or a 
constructor function. When you define a class and create an object from that class, 
the object is called an "instance" of the class. Each instance has access to the properties 
and methods defined in the class, and the values of these properties are unique to each instance.
chai
  └──> InterviewResult.prototype  (chai.__proto__)
          └──> Candidate.prototype  (InterviewResult.prototype.__proto__)
                  └──> Object.prototype  (Candidate.prototype.__proto__)
                        └──> null  (end of chain)
Now, let's evaluate chai instanceof Candidate.

1. chai.__proto__:
The chai object is an instance of InterviewResult, so its [[Prototype]] 
(or __proto__ in informal terms) points to InterviewResult.prototype.
First check: chai.__proto__ === InterviewResult.prototype. No match for Candidate.prototype.
2. Next in the Prototype Chain:
Since there's no match, JavaScript moves up the prototype chain. It checks the __proto__ 
of InterviewResult.prototype, which is Candidate.prototype.
Second check: InterviewResult.prototype.__proto__ === Candidate.prototype. Here, it finds a match!
Since Candidate.prototype is found in the prototype chain of chai, 
JavaScript returns true for chai instanceof Candidate.*/

/*We cannot do (chai instanceof tea)  The error arises because instanceof is being 
used incorrectly in your code. The instanceof operator checks if an object is an 
instance of a specific class, not another instance of an object.
In this line, you're trying to check if tea is an instance of chai, 
which is another object, not a class. instanceof expects a class or 
constructor function on the right-hand side.*/

/* What is instance?
Ans:- In JavaScript, an instance refers to an individual object created using a 
class or a constructor function. When you define a class and create an object from 
that class, the object is called an "instance" of the class. Each instance has access to 
the properties and methods defined in the class, and the values of these properties are 
unique to each instance.*/