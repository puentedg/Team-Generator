const Manager = require("../Lib/Manager")

describe("Manager", () => {
    //verify Manager school
    it("should set officeNumber when created", () => {
        const officeNumber = num;
        const manager = new Manager("Gabriella",888,"puentedg@gmail.com",num);
        expect(manager.officeNumber).toBe(num);
    })
    // verify Manager role
    it("should set role created", () => {
        const manager = new Manager(("Gabriella",777,"puentedg@gmail.com",'Manager'));
        expect(manager.getRole()).toBe("Manager");
    })
});

