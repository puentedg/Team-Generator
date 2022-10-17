const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
      
    {
        type: 'input',
        name: 'id',
        message: 'Please, type your id number',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      }
  ])

  
  .then((data) => {
    const htmlContent = generateHTML(data);

    // const filename = `${data.title.toLowerCase().split(' ').join('')}.html`;

    fs.writeFile(`team.html`, htmlContent, (err) =>
      err ? console.log(err) : console.log('Your Team page is ready'));
  });