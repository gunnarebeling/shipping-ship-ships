const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers:[
        {id: 1, name: "Big Boy", dockId: 1 },
        {id: 2, name: "The Taj Ma Haul", dockId: 2},
        {id: 3, name:"Haul n Boats", dockId: 4},
        {id: 4, name: "Old Hauler", dockId: 2}
    ],
    shippingShips: [
        {id: 1, name: "Little Guy", haulerId: 1},
        {id: 2, name: "Shrimp", haulerId: 1},
        {id: 3, name: "Cargo Robbie", haulerId: 2},
        {id: 4, name: "Lil Baby", haulerId: 1},
        {id: 5, name: "The Little Shipper", haulerId: 2},
        {id: 6, name: "Nemo", haulerId: 3},
        {id: 7, name: "Barkley", haulerId: 4}
    ]

}

export const  getDocks = () =>{
    return database.docks.map(docks => ({...docks}))
}
export const getHaulers =() => {
    return database.haulers.map(hauler => ({...hauler}))
}
export const getShippingShips = () => {
    return database.shippingShips.map(ships => ({...ships}))
}