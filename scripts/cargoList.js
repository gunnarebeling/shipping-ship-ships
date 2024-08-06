import { getShippingShips } from "./database.js";

export const cargoList = () => {
    const shippingShips = getShippingShips();
    let cargoListHTML = `<ul class="cargo-list">`
    cargoListHTML += `<h1>Shipping ships</h1>`
    shippingShips.forEach(ship => {
        cargoListHTML += `<li data-type= "shipping-ship" data-id="${ship.id}" data-haulerId="${ship.haulerId}">${ship.name}</li>`
        
    });
    cargoListHTML += `</ul>`
    return cargoListHTML
}