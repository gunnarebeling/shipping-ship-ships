const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers:[
        {id: 1, name: "Big Boy" },
        {id: 2, name: "The Taj Ma Haul"},
        {id: 3, name:"Haul n Boats"},
        {id: 4, name: "Old Hauler"}
    ]
}

export const  getDocks = () =>{
    return database.docks.map(docks => ({...docks}))
}
export const getHaulers =() => {
    return database.haulers.map(hauler => ({...hauler}))
}