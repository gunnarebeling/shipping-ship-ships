import { getDocks } from "./database.js";
import { getHaulers } from "./database.js";
const docks = getDocks()

const haulerList = getHaulers();




export const dockList = () => {

    let docksHTML = "<ul class='docks'>"
    docksHTML += `<h1>Docks</h1>`

    for (const dock of docks) {
    
        docksHTML += `<li data-type="dock" data-id="${dock.id}" data-volume="${dock.volume}" data-location="${dock.location}" data-haulerid="${dock.haulerId.join(",")}>${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const dockId = parseInt(itemClicked.dataset.id)
        
        if (itemClicked.dataset.type === "dock") {
        //     let atDockHaulers = haulerList.filter(hauler => hauler.dockId === dockId);
        //     let haulerListNames = atDockHaulers.map(haulers => haulers.name)
        //     haulerListNames = haulerListNames.join(', ');
        //     if (atDockHaulers.length === 0) {
        //         haulerListNames = "nothing"
        //     } 
                
        //         window.alert(`${itemClicked.dataset.location} is currently unloading ${haulerListNames} `)
            haulerList.forEach(hauler => {
                
            });
            
        }

        /*
            Your job is to design an algorithm and implement it
        */
    }
)