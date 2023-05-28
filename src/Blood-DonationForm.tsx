import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9u3hFPChKOvKy_I-fKJbMC9g5mprGvak",
  authDomain: "blood-donation-app-cbd2f.firebaseapp.com",
  projectId: "blood-donation-app-cbd2f",
  storageBucket: "blood-donation-app-cbd2f.appspot.com",
  messagingSenderId: "206115079103",
  appId: "1:206115079103:web:67665ba79d1d2b9e74d70a"
  //...
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const BloodDonationForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [place, setPlace] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  

async function handleSubmit(e) {
  e.preventDefault();
  try {
      const docRef =  addDoc(collection(db, "Donors"), {
        Name: name,
        Place: place,
        phoneNumber: phoneNumber,
        BloodGroup:bloodGroup
      });
      console.log("Document written with ID: ", );
    } catch (e) {
      console.error("Error adding document: ", );
    }
  
}

  return (
    
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
    
      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bloodGroup">Blood Group:</label>
        <select
          id="bloodGroup"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BloodDonationForm;
