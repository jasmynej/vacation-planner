import {getAllVacations} from "../vacationPlanning.js";
import {useEffect, useState} from "react";
import DestinationCard from "../components/DestinationCard.jsx";
import "../styles/misc.css"
function AllDestinations(){
    const [destinations, setAllDestinations] = useState([])

    useEffect(() => {
        let places = getAllVacations()
        setAllDestinations(places)
    }, []);
    return (
        <div>
            <div>
                <h1>All Destinations</h1>
            </div>
            <div className="all-destinations">
                {
                  destinations.map((place) => {
                      return (
                          <DestinationCard destination={place} key={place.id}/>
                      )

                  })
                }
            </div>
        </div>
    )
}

export default AllDestinations