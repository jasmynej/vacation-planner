import destinations from './destinations.json'

function searchVacations(temp, activity, budget){
    console.log(`${temp}, ${activity}, ${budget}`)
    let budgetNormalized =
        budget <= 4 ? ['Low'] :
            budget < 7 ? ['Low','Medium'] :
                ['Low','Medium','High'];
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