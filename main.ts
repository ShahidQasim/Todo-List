import inquirer from "inquirer"

let todoList : string[] = []
let loop  = true

while (loop) {
    let answers : {
        todos : string
        AddMore : boolean
    } = await inquirer.prompt([
        {
            type : "input",
            name : "todos",
            message : "enter your todo point....."
    },
    {
            type : "confirm",
            name : "AddMore",
            message : "add your next todo....",
            default : false
    }
])
let {todos,AddMore}=answers
console.log(answers);

loop = AddMore

if (todos){
    todoList.push(todos)
}
else {
    console.log("enter  the valid input");
    
}
}


if  (todoList.length>0){
    console.log("your TODO lis");
    todoList.forEach((x)=>{console.log(x);
    })
    
}
else {
    console.log("NO TODOS  FOUND");
    
}



