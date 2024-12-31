import '../styles/destinations.css'
import {useNavigate, useParams} from "react-router";
import {getDestinationById} from "../api/destinationApi.js";
function DestinationModal(){
    let params = useParams()
    let navigate = useNavigate()
    let destinationId = params.destination
    const destination = getDestinationById(destinationId)

    if (JSON.stringify(destination) === '{}'){
        return (
            <div className="destination-modal-overlay">
                <div className="destination-modal-container">
                    <h1>Loading</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="destination-modal-overlay">
            <div className="destination-modal-container">
                <button onClick={()=> navigate("/")}>Close</button>
                <img src={destination.image} alt="destination img" id="destination-img"/>
                <h1>{destination.name}</h1>
            </div>
        </div>
    )
}

export default DestinationModal