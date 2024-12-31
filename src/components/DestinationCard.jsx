/* eslint-disable react/prop-types */
import '../styles/destinations.css';
import {useNavigate} from "react-router";
function DestinationCard({destination}){
    let navigate = useNavigate()
    return (
        <div className="destination-card">
           <h2>{destination.name}</h2>
            <p>{destination.region}</p>
            <button id="learn-more" onClick={() => navigate(`${destination.id}`)}>Learn More</button>
        </div>
    )
}

export default DestinationCard