import destinations from './destinations.json'


function getMinMaxAverageCost() {
    const averageCost = destinations.map(place => place.average_cost);
    const minAvgCost = Math.min(...averageCost);
    const maxAvgCost = Math.max(...averageCost);

    return [minAvgCost, maxAvgCost];
}


function searchVacations(temp, activity, budget){
    const minMaxAverageCost = getMinMaxAverageCost()
    const min = minMaxAverageCost[0]
    const max = minMaxAverageCost[1]
    let budgetNormalized =
        budget <= min
            ? ["Low"]
            : budget > min && budget <= ((min + max) / 2) + 400
                ? ["Low", "Medium"]
                : ["Low", "Medium", "High"];
    console.log(`${temp}, ${activity}, ${budgetNormalized}`);
    let curatedDestinations = destinations.filter(d =>
        d.weather === temp && budgetNormalized.includes(d.budget) && d.activities.includes(activity)
    );

    if (curatedDestinations.length === 0){
        console.log("none")
    }
    console.log(curatedDestinations.length)
    return curatedDestinations
}

function getAllVacations(){
    return destinations;
}
export {searchVacations, getAllVacations}