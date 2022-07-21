const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

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
    console.log(ans)
    const me = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficeNumber)
    console.log(me)
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
            console.log("Finished building team. Please wait.")
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
       console.log(ans)
        const me = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
        console.log(me)
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
       console.log(ans)
        const me = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool)
        console.log(me)
        addAnEmployee()
    })
}

start();