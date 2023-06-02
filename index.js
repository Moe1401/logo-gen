const inquirer = require("inquirer");
const fs = require("fs");


//Q prompts for the user
const input = [{

    type: 'input',
    name: 'text',
    message: 'Choose 3 characters for logo',
    validate: choice => {
        if (choice.length != 3){
            console.log("must enter 3 characters!!")
            return false;
        }else{
            return true;
        }
    }
},
{
    type: 'input',
    name: 'textcolor',
    message: 'Choose text color (by name or hex code) for logo '
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'pick a shape color (by name or hex code) for your logo'
},
{
    type: 'list',
    name: 'shape',
    message: 'choose a logo shape',
    choices: ['Circle', 'Square', 'Triangle']
}
];
inquirer.prompt(input).then( (input) => {
    
    //check input
    if (input.shape == 'Circle'){
        var shapeTag = `<circle cx="150" cy="100" r="80" fill="${input.shapeColor}" />` 
    }
    
    else if (input.shape == 'Square'){
        var shapeTag =  `<rect x="90" y="40" width="120" height="120" fill="${input.shapeColor}" />`

    }
    
    else {
        var shapeTag = `<polygon points="150, 18 244, 140 56, 140" fill="${input.shapeColor}"/>`
    }
    var imageTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shapeTag} 
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${input.textcolor}">${input.text}</text>
    </svg>`;


    //write the file
    fs.writeFile('logo.svg', imageTag, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
})

