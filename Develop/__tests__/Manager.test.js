const Manager = require("../Lib/Manager")

describe("Manager", () => {
    //verify Manager school
    it("should set officeNumber when created", () => {
        const officeNumber = 123;
        const manager = new Manager("Gabriella",888,"puentedg@gmail.com",officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    })
    // verify Manager role
    it("should set role created", () => {
        const officeNumber = 123;
        const manager = new Manager(("Gabriella",777,"puentedg@gmail.com",'Manager', officeNumber));
        expect(manager.getRole()).toBe("Manager");
    })
});

