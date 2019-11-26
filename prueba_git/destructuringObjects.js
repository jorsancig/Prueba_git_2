let employee ={
    name: "Ricardo",
    lastname: "Rodriguez",
    salary: 60000,

    getSalary: function getSalary()
};

function getSalary ({name, lastname, salary}){

    console.log( name, lastname, salary);

}

getSalary(employee);