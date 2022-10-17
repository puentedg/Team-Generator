const Intern = require("../Lib/Intern")

describe("Intern", () => {
    //verify Intern school
    it("should set school when created", () => {
        const school = "uot";
        const intern = new Intern("Gabriella",777,"puentedg@gmail.com",school);
        expect(intern.getSchool()).toBe(school);
    })
    // verify Intern role
    it("should set role created", () => {
        const intern = new Intern(("Gabriella",777,"puentedg@gmail.com",'Intern'));
        expect(intern.getRole()).toBe("Intern");
    })
});

