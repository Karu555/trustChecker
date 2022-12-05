import logo from './logo.svg';
import './style.css';
import { data } from './data/data'
import { useState } from 'react';

function App() {
 const [userData, setUserData] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleOrigin = (e) => {
    e.preventDefault();
    setOrigin(e.target.value);
    
  };

  const handleDestination = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
    
  };

  const handleForm = (e) => {
    e.preventDefault()
    
  }


  console.log(data.results)
  return (
    <div>
      <h1>Flight Search Engine</h1>
     <div className="container">
     <div className='rightSide'>
      <form action="">
      <input type="text" placeholder='Enter Origin City' value={origin} onChange={handleOrigin}/>  <br />
      <input type="text"  placeholder='Enter Destination City' value={destination} onChange={handleDestination}/> <br />
      <select name="" id="">
      <option>Departure Date</option>
      {
        data.results.map(e => (
          <option>{e.departureDate}</option>
        ))
      }
      </select> <br />
     
      <button type='submit' onClick={handleForm}>Search</button>
      </form>
      </div>
      
      
      <div className='leftSide'>
        {
        data.results.map(e => (
          <div>
        <h2>{e.originCity} {`>`} {e.destinationCity}</h2>
        <h2>Rs {e.price.toFixed(2)}</h2>
        <p>Depart: {e.departureTime}</p>
        <p>Arrive: {e.departureTime}</p>
      </div>
        ))
      }</div>
     </div>


    </div>
  );
}

export default App;
