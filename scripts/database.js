const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5", HaulerId: [1,2]},
        { id: 2, location: "Busan, South Korea", volume: "21.6", haulerId:[1,2,3,4] },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35", haulerId: [4] },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04", haulerId:[] }
    ],
    haulers:[
        {id: 1, name: "Big Boy"  },
        {id: 2, name: "The Taj Ma Haul", },
        {id: 3, name:"Haul n Boats"},
        {id: 4, name: "Old Hauler"}
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
    return database.docks.map(docks => ({...docks})).sort((a, b)=>
        a.location.localeCompare(b.location))
}
export const getHaulers =() => {
    return database.haulers.map(hauler => ({...hauler})).sort((a, b)=>
        a.name.localeCompare(b.name))
}
export const getShippingShips = () => {
    return database.shippingShips.map(ships => ({...ships})).sort((a, b)=>
        a.name.localeCompare(b.name))
}