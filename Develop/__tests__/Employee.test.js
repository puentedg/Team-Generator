const Employee = require("../Lib/Employee")

describe("Employee", () => {
    //verify employee name
    it("should set the name when created"), () => {
        const name = "Gabriella";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    }
    // verify employee id
    it("should set id when created", () => {
        let number = 0;
        const employee = new Employee(number);
        expect(employee.getID()).toEqual(number);
    })
     // verify employee email
     it("should set the email when created", () => {
        let email = "puentedg@gmail.com";
        const employee = new Employee(email);
        expect(employee.email).toBe(email)
     })
    // verify employee role
     it("should set the role when created", () => {
        const employee = new Employee("Gabriella",123,"puentedg@gmail.com");
        expect(employee.getRole()).toBe("Employee");
    
    });
});




