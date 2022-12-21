class Person{
 
    constructor(name='Unknown'){
        this.name = name;
        console.log(`user ${name} has been created!`);
    }

    getGreeting(){
        return `hello! ${this.name}`;
    }
}
 

class Student extends Person{
    constructor(name,subject){
        super(name);
        this.subject = subject;
    }

    hasSubject(){
        return !!this.subject; //flipping value (checking if true or not)
    }

    //Overriding get greeting
    getGreeting(){
        let greeting = super.getGreeting();
        return greeting + ' you are a student!';
    }
}

const me = new Person('John');                          //user John has been created!
console.log(me);                                        //Person {name: 'John'}

const st = new Student('Alin','Information Systems');   //user Alin has been created!
console.log(st);                                        //Student {name: 'Alin', subject: 'Information Systems'}
console.log(st.hasSubject());                           //true
console.log(st.getGreeting());                          //hello! Alin you are a student!