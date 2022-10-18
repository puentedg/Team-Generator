const Employee = require("../Lib/Employee")
// const Engineer = require("../Lib/Engineer")
// const Intern = require("../Lib/Intern")
// const Manager = require("../Lib/Manager")


describe("Employee", () => {
    //verify employee name
    it("should set the name when created", () => {
        const name = "Gabriella";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    })
    // verify employee id
    it("should set id when created", () => {
        const number = 0;
        const employee = new Employee("Gabriella",number);
        expect(employee.getID()).toEqual(number);
    })
     // verify employee email
     it("should set the email when created", () => {
        const email = "puentedg@gmail.com";
        const number = 0;
        const employee = new Employee("Gabriella",number, email);
        expect(employee.email).toBe(email)
     })
    // verify employee role
     it("should set the role when created", () => {
        const email = "puentedg@gmail.com";
        const number = 0;
        const employee = new Employee("Gabriella",number,email);
        expect(employee.getRole()).toBe("Employee");
    
    });
});




