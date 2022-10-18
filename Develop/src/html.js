const Manager = require("../Lib/Manager")

const generateHtml = function (team) {

const createManager = (manager) => {
    return `<div class="card bg-primary bg-gradient text-white" style="width: 18rem;">
    <img src="./images/manager.png" class="card-img-top employee-icon" alt="manager icon">
    <h5 class="card-title fs-3">${manager.getName()}</h5>
    <div class="card-header text-bg-primary p-3"> 
      <h6 class="card-subtitle fs-4">${manager.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul>
        <li>ID: ${manager.getID()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li></a>
        <li>Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
  </div>`
}
const createEngineer = (engineer) => {
    return `<div class="card bg-primary bg-gradient text-white" style="width: 18rem;">
    <img src="./images/engineer.png" class="card-img-top employee-icon" alt="engineer icon">
    <h5 class="card-title fs-3">${engineer.getName()}</h5>
    <div class="card-header text-bg-primary p-3">
      <h6 class="card-subtitle fs-4">${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul>
        <li>ID: ${engineer.getID()}</li>
        <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li></a>
        <li>GitHub:  <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</li></a>
        </ul>
    </div>
  </div>`
} 
const createIntern = (intern) => {
    return `<div class="card bg-primary bg-gradient text-white" style="width: 18rem;">
    <img src="./images/intern.png" class="card-img-top employee-icon" alt="intern icon">
    <h5 class="card-title fs-3">${intern.getName()}</h5>
    <div class="card-header text-bg-primary p-3">  
      <h6 class="card-subtitle fs-4">${intern.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul>
        <li>ID: ${intern.getID()}</li>
        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li></a>
        <li>School: ${intern.getSchool()}</li>
        </ul>
    </div>
  </div>`
} 
const template = [];
template.push(team
    .filter(member => member.getRole() === "Manager")
    .map(manager => createManager(manager)))
template.push(team
    .filter(member => member.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer)))
template.push(team
    .filter(member => member.getRole() === "Intern")
    .map(intern => createIntern(intern)))

    return template.join('')
}

    module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Peralta&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="mb-5">
            <nav class="navbar">
                <span class="h1 w-100 text-center mt-4" id="nav">My Team</span>
            </nav>
        </header>
        <main>
            <section class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${generateHtml(team)}
                </div>
            </section>
        </main>
    </body>
    </html>
  `
  }
  ;

