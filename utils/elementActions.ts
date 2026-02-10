import {test,expect} from '@playwright/test';

export async function clickElement(locator:any,reportText?:string){
    try{
        await locator.click();
    }
    catch(error){
        console.error(`Error clicking element-${reportText}: ${error}`);
        throw error;
    }
    
}

export async function enterText(locator:any,text:string,reportText?:string){
    try{
        await locator.fill(text);
    }
    catch(error){
        console.error(` Error entering text-${reportText}: ${error}`);
        throw error;
    }
    
}