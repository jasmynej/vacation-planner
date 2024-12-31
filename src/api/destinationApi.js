import destinations from '../destinations.json'

function getDestinationById(id){
    let destination = destinations.filter((d) => d.id === id)
    return destination[0]
}

export {getDestinationById}