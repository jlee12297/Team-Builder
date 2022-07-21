const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require("./util/generateHtml")

const employees = [];

const start = ()=>{
    inquirer.prompt([
        {
        type:"input",
        message:"Team Manager's Name?",
        name:"managerName"
        },
        {
        type:"input",
        message:"Employee ID?",
        name:"managerId"
        },
        {
        type:"input",
        message:"Email Address?",
        name:"managerEmail"
        },
        {
        type:"input",
        message:"Office Number?",
        name:"managerOfficeNumber"
        }
]).then(ans=>{
    const me = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficeNumber)
    employees.push(me)
    console.table(employees)
    addAnEmployee()
    })
}

const addAnEmployee = ()=>{
    inquirer.prompt([
        {
        type:"list",
        choices:["Add an Engineer","Add an Intern", "Finish Building Team!"],
        message:"Please make a selection: ",
        name:"selection"
        }
    ]).then(ans=>{
        if(ans.selection==="Add an Engineer"){
            addAnEngineer()
        } else if(ans.selection==="Add an Intern"){
            addAnIntern()
        } else {
            console.log("Finished building team. Please checkout index.html to see your team's profiles!")
            writeToFile('index.html', team(employees))
        }
    })
}

const addAnEngineer = ()=>{
   inquirer.prompt([
        {
        type:"input",
        message:"Engineer's Name?",
        name:"engineerName"
        },
        {
        type:"input",
        message:"Employee ID?",
        name:"engineerId"
        },
        {
        type:"input",
        message:"Email Address?",
        name:"engineerEmail"
        },
        {
        type:"input",
        message:"Github Username?",
        name:"engineerGithub"
        }
    ]).then(ans=>{
        const me = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
        employees.push(me)
        console.table(employees)
        addAnEmployee()
    })
}

const addAnIntern = ()=>{
   inquirer.prompt([
        {
        type:"input",
        message:"Intern's Name?",
        name:"internName"
        },
        {
        type:"input",
        message:"Employee ID?",
        name:"internId"
        },
        {
        type:"input",
        message:"Email Address?",
        name:"internEmail"
        },
        {
        type:"input",
        message:"School Name?",
        name:"internSchool"
        }
    ]).then(ans=>{
        const me = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool)
        employees.push(me)
        console.table(employees)
        addAnEmployee()
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) {
            console.error(err)
        }
    })
}

start();