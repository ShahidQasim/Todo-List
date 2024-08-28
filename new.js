import inquirer from "inquirer";
let todos = [];
async function creatingTODO(todos) {
    do {
        let answers = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "select option from below",
                choices: ["add", "update", "view", "delete", "exit"],
            }
        ]);
        if (answers.select === "add") {
            console.clear();
            let additem = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "Enter your item to add",
                }
            ]);
            todos.push(additem.todo);
            console.log(`${additem.todo} added successfully`);
        }
        else if (answers.select === "update") {
            console.clear();
            let updateitem = await inquirer.prompt([
                {
                    name: "update",
                    type: "list",
                    message: "select item for updating",
                    choices: todos.map((x) => x)
                },
            ]);
            let additem = await inquirer.prompt([
                {
                    name: "add",
                    type: "input",
                    message: " Enter your item to update"
                }
            ]);
            let newtodo = todos.filter((y) => y != updateitem.update);
            todos = [...newtodo]; //, additem.add
            console.log(`${updateitem.update} updated successfully to ${additem.add}`);
        }
        else if (answers.select === "delete") {
            console.clear();
            let deleteitem = await inquirer.prompt([
                {
                    name: "delete",
                    type: "list",
                    message: "select to delte",
                    choices: todos.map((i) => i)
                }
            ]);
            let newtodo = todos.filter((h) => h != deleteitem.delete);
            todos = [...newtodo];
            console.log(`${deleteitem.delete} deleted successfully`);
        }
        else if (answers.select === "view") {
            console.clear();
            console.log("-----my TODO LIST---------");
            todos.forEach((f, i) => {
                console.log(`${i + 1}.${f}`);
            });
        }
        else {
            break;
        }
    } while (true);
}
creatingTODO(todos);
