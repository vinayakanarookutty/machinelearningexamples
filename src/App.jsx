import BloodDonationForm from "./Blood-DonationForm"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles.css';
function App() {
 
  return (
 <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/BloodDonation" element={ <BloodDonationForm />}/>
          <Route path="/BloodDonationList" element={ <BloodDonationForm />}/>
           
  
         
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
