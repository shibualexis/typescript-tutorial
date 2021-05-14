let userInput: unknown;
userInput = 10;
userInput = "Shibu";

let anyUserInput: any;
anyUserInput = 10;
anyUserInput = "Shibu";

let firstName: string;
// firstName = userInput; //Throws error because unknown cannot be assigned to defined type variable. 
firstName = anyUserInput; // Doesn't throw error because of the flexibility of "any" type in typescript. - Don't use any