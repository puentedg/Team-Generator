const Engineer = require("../Lib/Engineer")

describe("Engineer", () => {
    //verify engineer github
    it("should set the github account when created", () => {
        const github = "puentedg";
        const engineer = new Engineer("Gabriella",123,"puentedg@gmail.com",github);
        expect(engineer.getGithub()).toBe(github);
    })
    // verify engineer role
    it("should set id when created", () => {
        const engineer = new Engineer(("Gabriella",123,"puentedg@gmail.com",github));
        expect(engineer.getRole()).toBe("Engineer");
    })
})

