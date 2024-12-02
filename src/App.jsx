import './App.css'

function App() {


  return (
    <div className="container">
        <div className="header">
            <h1>Vacation Planner</h1>
        </div>

        <div className="search-box">
            <form>
                <div className="search-row">
                    <label htmlFor="weather">Preferred Weather:</label>
                    <select id="weather">
                        <option value="Warm">Warm</option>
                        <option value="Cool">Cool</option>
                        <option value="Snowy">Snowy</option>
                    </select>

                    <label htmlFor="activity">Activity Type:</label>
                    <select id="activity">
                        <option value="Adventure">Adventure</option>
                        <option value="Relaxation">Relaxation</option>
                        <option value="Culture">Culture</option>
                    </select>
                </div>
                <div className="search-row">
                    <label htmlFor="budget">Budget: </label>
                    <input type="range" min="1" max="10" id="budget" />
                </div>
                <button id="search">Get A Vacation</button>
            </form>

        </div>
    </div>
  )
}

export default App
