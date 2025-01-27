import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import App from './App.jsx'
import AllDestinations from "./pages/AllDestinations.jsx";
import DestinationModal from "./components/DestinationModal.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
              <Route path="place/:destination" element={<DestinationModal/>}/>
          </Route>
         <Route path="/all" element={<AllDestinations/>}>

         </Route>
      </Routes>

  </BrowserRouter>,
)
