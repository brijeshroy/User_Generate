import { UserCategory, UserCategoryKey } from "../constants/project-constants";

export const idCreator = (userCategory:UserCategoryKey) : string =>{
    console.log('User is of type  ',userCategory)
    const currentDate = new Date().toISOString().split("T")[0]!.replaceAll("-","")
    const currentTime = new Date().toISOString().split("T")[1]!.slice(0,7).replaceAll(":","")
   
    console.log("The Current Data is ",currentDate)
    const userId : string = UserCategory[userCategory].concat(`_${currentDate}_${currentTime}`);

    console.log(`The user id is ${userId}`);

    return userId;
}