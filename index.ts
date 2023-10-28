#! /usr/bin/env node
import inquirer from "inquirer";


const answer : {
    numberOne: number,
    numberTwo: number,
    Operator: string
} = await inquirer.prompt([
    {

type:"number",
name: "numberOne",
message:"Kindly enter your first number: " 

    },

    {

        type:"number",
        name: "numberTwo",
        message:"Kindly enter your Second number: " 
        
            },
{ 
type:"list",
name: "Operator",
choices:["*", "+","-", "/",],
message:"Select Operator: " 

    },
]);

const{numberOne,numberTwo,Operator} = answer;
if(numberOne && numberTwo && Operator){
    let result: number = 0;
    if(Operator === "+"){
        result = numberOne + numberTwo
    } else if(Operator === "-"){
        result = numberOne - numberTwo
    }  if( Operator === "/"){
        result = numberOne / numberTwo
    }  if(Operator === "*"){
        result = numberOne * numberTwo
    }

    console.log("Your result is :", result)
}  else{
    console.log("Kindly enter valid input")
}

