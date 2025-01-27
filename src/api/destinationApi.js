import destinations from '../destinations.json'

function getDestinationById(id){
    let destination = destinations.filter((d) => d.id === id)
    return destination[0]
}

function getMinMaxAverageCost() {
    const averageCost = destinations.map(place => place.average_cost);
    const minAvgCost = Math.min(...averageCost);
    const maxAvgCost = Math.max(...averageCost);

    return [minAvgCost, maxAvgCost];
}
export {getDestinationById, getMinMaxAverageCost}