const fs = require('fs');
const path = require('path');

let employees = [
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'John',
        age : 45,
        designation : 'Sr. Manager',
        active : false
    },
    {
        name : 'Wilson',
        age : 50,
        designation : 'Chief Technical Officer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Trainee',
        active : false
    }
];


// Create a Json file
fs.writeFile(path.join(__dirname , 'employee.json') , JSON.stringify(employees) , 'utf8' , (err) => {
    if(err) throw err;
    console.log('data is saved');
});

// Read data from JSON
fs.readFile(path.join(__dirname,'employee.json'),'utf8',(err,data) => {
    if(err) throw  err;
    console.log(JSON.parse(data));
});
