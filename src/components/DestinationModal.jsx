import '../styles/destinations.css'
import {useNavigate, useParams} from "react-router";
import {getDestinationById} from "../api/destinationApi.js";
import beach from '../assets/summer.png'
import cool from '../assets/placeholder.png'
import snowy from '../assets/winter-sport.png'

function DestinationModal(){
    let params = useParams()
    let navigate = useNavigate()
    let destinationId = params.destination
    const destination = getDestinationById(destinationId)
    const id_img_map = {
        "Warm": beach,
        "Cool":  cool,
        "Snowy": snowy
    }



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
                <div className="modal-header">
                    <div id="identifier">
                        <img src={id_img_map[destination.weather]} alt="vitamin sea" id="sticker"/>
                        <h1>{destination.name}
                        <br/>
                            <span id="region">{destination.region}</span>
                        </h1>
                    </div>

                    <div onClick={() => navigate("/")}><i className="fi fi-rr-cross"></i></div>
                </div>
                <div className="modal-content">
                    <img src={destination.image} alt="destination img" id="destination-img"/>
                    <div className="activities">
                        {destination.activities.map((a, index) => (
                            <div key={index}>{a}</div>
                        ))}
                    </div>
                    <div className="description">
                        <p>{destination.description}</p>
                    </div>
                    <div className="fun-fact">
                        <p> <span>Fun Fact: </span> {destination.fun_fact}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DestinationModal