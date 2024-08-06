import { getShippingShips } from "./database.js";
import { getHaulers } from "./database.js";

const shippingShips = getShippingShips();
export const cargoList = () => {
    let cargoListHTML = `<ul class="cargo-list">`
    cargoListHTML += `<h1>Shipping ships</h1>`
    shippingShips.forEach(ship => {
        cargoListHTML += `<li data-type= "shipping-ship" data-id="${ship.id}" data-haulerid="${ship.haulerId}" 
                            data-name="${ship.name}">${ship.name}</li>`
        
    });
    cargoListHTML += `</ul>`
    return cargoListHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const Haulers = getHaulers();
        const shipName = itemClicked.dataset.name
        

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shipping-ship") {
            
            // Get the haulerId value of the shipping ship clicked
            const haulerId = parseInt(itemClicked.dataset.haulerid);
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            // Iterate the array of hauler objects
            Haulers.forEach(hauler  => {
                // Does the haulerId foreign key match the id of the current hauler?
                if(hauler.id === haulerId){
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip ={name: hauler.name};

                }

                
                
            });

            window.alert(`${shipName} is being hauled by ${haulingShip.name}`)

            
            
        }






            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
    }
)