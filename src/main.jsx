import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import App from './App.jsx'
import DestinationModal from "./components/DestinationModal.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
              <Route path=":destination" element={<DestinationModal/>}/>
          </Route>
      </Routes>

  </BrowserRouter>,
)
