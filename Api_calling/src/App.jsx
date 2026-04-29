/*import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);

  const handleLoadData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setdata([response.data]);
    console.log(data);
  };

  return (
    <>
      <button onClick={handleLoadData}>Load</button>

      <div className="cardBox">
        {data.map((element) => (
          <div className="card" key={element.id}>
            <div className="cardImg">
              <img src={element.thumbnail} alt="card Image" />
            </div>
            <div className="cardDesc">
              <h4>{element.title}</h4>
              <p>
                <b>Rs{element.price}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
*/

import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const handleLoadData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data.products); // ✅ correct array
    console.log(data);
  };

  return (
    <>
      <button onClick={handleLoadData}>Load</button>

      <div className="cardBox">
        {data.map((item) => (
          <div className="card" key={item.id}>
            {" "}
            {/* ✅ unique key */}
            <div className="cardImg">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
