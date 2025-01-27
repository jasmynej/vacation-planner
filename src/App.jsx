import './App.css'
import {useState} from "react";
import {searchVacations} from "./vacationPlanning.js";
import {getMinMaxAverageCost} from "./api/destinationApi.js";
import DestinationCard from "./components/DestinationCard.jsx";
import {Outlet} from "react-router";

function App() {
    const [vacationParams, setVacationParams] = useState({
        "weather":"Warm",
        "activity": "Relaxation",
        "budget": 100
    })
    const [vacations, setVacations] = useState([])
    const [budget, setBudget] = useState(2000)
    const minMaxAverageCost = getMinMaxAverageCost()

    const formChange = (event) => {
        setVacationParams((vacationParams) => ({
            ...vacationParams,
            [event.target.name]: event.target.value
        }));
    }

    const handleBudgetChange = (event) => {
        setBudget(event.target.value)
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
                    <label htmlFor="budget">
                        Budget:
                        <br/>
                        <p id="min-max">Min: {minMaxAverageCost[0]} Max: {minMaxAverageCost[1]}</p>
                    </label>

                    <input type="range"
                           min={minMaxAverageCost[0]}
                           max={minMaxAverageCost[1]}
                           id="budget"
                           defaultValue={budget}
                           name="budget"
                           onChange={handleBudgetChange}/>
                    <p>Current Budget: {budget}</p>
                </div>
                <button id="search" type="submit">Get A Vacation</button>
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
