class Employee{

    work(){
        console.log("Employee Works")
    }
}

class Developer extends Employee{

    performTask(){
        console.log("Search for code in GitHub CoPilot")
    }

    work(){
        console.log("Developer Works")
    }
}

class Manager extends Employee{
    manageTeam(){
        console.log("Question only the Team Lead")
    }
}

let employee = new Employee()
employee = new Developer()

let emp_list = []
emp_list.push(new Developer())
emp_list.push(new Manager())

//Safe Downcasting
for (emp of emp_list){
if(emp instanceof Developer){
    emp.performTask()
}
else if(emp instanceof Manager)
{
    emp.manageTeam()
}
}
