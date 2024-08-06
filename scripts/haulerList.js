import { getHaulers } from "./database.js";
import { getShippingShips } from "./database.js";
const haulers = getHaulers();
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const shippingShips = getShippingShips();
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler"){
            
            // Get the id of the hauler clicked
            const haulerId = parseInt(itemClicked.dataset.id);
            // Start a counter variable at 0
            let counter = 0;
            // Iterate all of the shipping ships
            shippingShips.forEach(ship => {
                // Does the haulerId foreign key match the id?

                    // Increase the counter by 1
                if(ship.haulerId === haulerId){
                    counter += 1
                }
                
            });
            if(counter > 1){
                
                window.alert(`This hauler is carrying ${counter} shipping ships`);
            }else{
                window.alert(`This hauler is carrying ${counter} shipping ship`);
            }
        }
    }
)

export const haulerList = () => {
    let haulersHTML = "<ul class='Haulers'>"
    haulersHTML += `<h1>Hauling Ships</h1>`
    haulers.forEach(hauler => {
        haulersHTML += `<li data-type="hauler" data-id="${hauler.id}" data-dockId="${hauler.dockId}">${hauler.name}</li>`

        
    });
    haulersHTML += "</ul>"
    return haulersHTML
    
}