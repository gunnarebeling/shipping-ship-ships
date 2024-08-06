import { getHaulers } from "./database.js";


export const haulerList = () => {
    const haulers = getHaulers();
    let haulersHTML = "<ul class='Haulers'>"
    haulersHTML += `<h1>Hauling Ships</h1>`
    haulers.forEach(hauler => {
        haulersHTML += `<li data-type="hauler" data-id="${hauler.id}" data-dockId="">${hauler.name}</li>`

        
    });
    haulersHTML += "</ul>"
    return haulersHTML
    
}