import { morseCode } from "./morse.js";

export const translate = (input) => {
    
    let characterArray = input.toLowerCase().split("");
    let translation = characterArray.map((character) => {
        return morseCode[character];
    });
    let finalTranslation = translation.join(" ");
    return finalTranslation   
};