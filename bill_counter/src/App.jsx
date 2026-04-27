import { useState } from "react";
import "./App.css";
function App() {
  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("+91");
  const [ProductName, setProductName] = useState("");
  const [ProductQTY, setProductQTY] = useState(0);
  const [ProductPrice, setProductPrice] = useState(0);

  return (
    <>
      <h1>Billing counter</h1>
      <div className="customerdetails">
        <div className="customername">
          <label htmlFor="name">Customer Name:</label>
          <input
            type="text"
            name="name"
            value={customerName}
            onChange={(e) => setcustomerName(e.target.value)}
          />
        </div>
        <div className="customerPhone">
          <label htmlFor="contact">Customer Phone:</label>
          <input
            type="phone"
            name="contact"
            value={customerPhone}
            onChange={(e) => setcustomerPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="allProducts">
        <table>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Total</th>
            <th>RM</th>
          </tr>
        </table>
      </div>
      <div className="itemInput">
        <div className="productNamebox">
          <label htmlFor="productname">Product Name:</label>
          <input
            type="text"
            name="productname"
            value={ProductName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="productQtyBox">
          <label htmlFor="productQTY">QTY:</label>
          <input
            type="number"
            name="productQTY"
            value={ProductQTY}
            onChange={(e) => setProductQTY(e.target.value)}
          />
        </div>
        <div className="productQtyBox">
          <label htmlFor="productprice">Price:</label>
          <input
            type="number"
            name="productprice"
            value={ProductPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="TotalAmount">
          <p>
            <b>Total:</b>
            Rs.{ProductPrice * ProductQTY}
          </p>
        </div>
        <div className="AddItemBox">
          <button>Add Item</button>
        </div>
      </div>
    </>
  );
}

export default App;
