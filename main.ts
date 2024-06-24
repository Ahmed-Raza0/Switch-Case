import inquirer from "inquirer";
import chalk from 'chalk'

let nam:string[] = ["Sidra","Ahmed","Danish"];
console.log(chalk.yellow(`[${nam}]`));


const answer = await inquirer.prompt([
    {
        name :"name",
        message:"enter your name",
        type: "input",
    }
])

switch (answer.name) {
    case'Sidra':
        console.log(chalk.yellow("Thanks for logging in"));
        
        break;

    case 'Ahmed':
        console.log(chalk.blue("Thanks for logging in"));
        
        break;

    case 'Danish':
        console.log(chalk.rgb(222,178,237)("Thanks for logging in"));
        
        break;
    default:
        console.log(chalk.red("You are not logged in. Please logging in"));
        
        break;
}
console.log(answer.name);
