class Person {
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old!!`
    };
}

class traveller extends Person{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getTravel(){
        let Description=super.getDescription();
        if(this.homeLocation)
        {
             Description+=` Im Visiting from ${this.homeLocation}`
        }
        return Description;
    }
    
}

const arnav = new traveller ('Arnav khare',19,'Gonda');
console.log(arnav.getTravel());

const me = new traveller ();
console.log(me.getTravel());