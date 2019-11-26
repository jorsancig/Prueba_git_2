class Employee {

    constructor(name, lastname, salary){
        this.name = name
        this.lastname = lastname
        this.salary = salary
    }

    getSalary (){
        console.log(this.salary)
    }

    getName () {
        console.log(this.name)
    }

    getLastname () {
        console.log(this.lastname)
    }
}

const employee1 = new Employee ("Jorge", "Sanjuán", 60000)

employee1.getSalary()

class Boss extends Employee{

    constructor(name, lastname){
        super(name, lastname)
    }

    toFire() {
        console.log("You're fired!!")
    }
    
}


const boss1 = new Boss ("Juan", "Sanjorge")

boss1.toFire()