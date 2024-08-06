import { getDocks } from "./database.js";





export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul class='docks'>"
    docksHTML += `<h1>Docks</h1>`

    for (const dock of docks) {
    
        docksHTML += `<li class="dock" data-id="${dock.id}" data-volume="${dock.volume}">${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}