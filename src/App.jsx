import logo from "./logo.svg";
import "./style.css";
import { data } from "./data/data";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [flightData, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
  });


  useEffect(() => {
    settingData();
  }, []);

  const settingData = () => {
    setData(data.results);
  };

  // useEffect(() => {}, [flightData]);

  console.log("data", flightData);

  const handleChange = (e, name) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log("name", name);
    setFormData((formData) => ({ ...formData, [name]: e.target.value }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (
      formData.departureDate !== "" &&
      formData.destination !== "" &&
      formData.origin !== ""
    ) {
      const filteredData = data.results.filter(
        (index) =>
          index.originCity === formData.origin &&
          index.destinationCity === formData.destination &&
          index.departureDate === formData.departureDate
      );
      if (filteredData.length !== 0) {
        setData(filteredData);
      } else {
        setErrorMessage("No Flight Details Found");
      }
    }
  };

  const handleReset = () =>{
    setData(data.results)
  }

  console.log(data.results);
  return (
    <div>
      <h1>Flight Search Engine</h1>
      <div className="container">
        <div className="rightSide">
          <form action="">
            <input
              type="text"
              placeholder="Enter Origin City"
              onChange={(e) => handleChange(e, "origin")}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Enter Destination City"
              onChange={(e) => handleChange(e, "destination")}
            />{" "}
            <br />
            <select
              name=""
              id=""
              onChange={(e) => handleChange(e, "departureDate")}
            >
              <option>Departure Date</option>
              {flightData.map((e) => (
                <option>{e.departureDate}</option>
              ))}
            </select>{" "}
            <br />
            <button type="submit" onClick={handleForm}>
              Search
            </button>
            <button onClick={handleReset}>Reset</button>
          </form>
        </div>

        <div className="leftSide">
          {errorMessage == "" &&
            flightData.map((e) => (
              <div>
                <h2>
                  {e.originCity} {`>`} {e.destinationCity}
                </h2>
                <h2>Rs {e.price.toFixed(2)}</h2>
                <p>Depart: {e.departureTime}</p>
                <p>Arrive: {e.departureTime}</p>
              </div>
            ))}
          {errorMessage !== "" && <h1>{errorMessage}</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
