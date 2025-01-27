import './App.css'
import {useState} from "react";
import {searchVacations} from "./vacationPlanning.js";
import DestinationCard from "./components/DestinationCard.jsx";
import {Outlet} from "react-router";
import {useNavigate} from "react-router";

function App() {
    const [vacationParams, setVacationParams] = useState({
        "weather":"Warm",
        "activity": "Relaxation",
        "budget": 5
    })
    const [vacations, setVacations] = useState([])
    let navigate = useNavigate()

    const formChange = (event) => {
        setVacationParams((vacationParams) => ({
            ...vacationParams,
            [event.target.name]: event.target.value
        }));
    }

    const submitSearch = (event) => {
        event.preventDefault()
        let res = searchVacations(vacationParams.weather, vacationParams.activity, vacationParams.budget)
        setVacations(res)
    }
  return (
    <div className="container">
        <Outlet/>
        <div className="header">
            <h1>Vacation Planner</h1>
        </div>

        <div className="search-box">
            <form onChange={formChange} onSubmit={submitSearch}>
                <div className="search-row">
                    <label htmlFor="weather">Preferred Weather:</label>
                    <select id="weather" name="weather">
                        <option value="Warm">Warm</option>
                        <option value="Cool">Cool</option>
                        <option value="Snowy">Snowy</option>
                    </select>

                    <label htmlFor="activity">Activity Type:</label>
                    <select id="activity" name="activity">
                        <option value="Adventure">Adventure</option>
                        <option value="Relaxation">Relaxation</option>
                        <option value="Culture">Culture</option>
                    </select>
                </div>
                <div className="search-row">
                    <label htmlFor="budget">Budget: </label>
                    <input type="range" min="1" max="10" id="budget" defaultValue="2" name="budget" />
                </div>
                <button id="search" type="submit">Get A Vacation</button>
                <button onClick={() => navigate("/all")} id="all">See All Destinations</button>
            </form>

        </div>
        <div className="results">
            {
                vacations.map((v) => {
                    return (
                       <DestinationCard destination={v} key={v.name}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default App
