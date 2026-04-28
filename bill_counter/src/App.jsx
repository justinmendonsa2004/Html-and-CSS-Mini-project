import { useState } from "react";
import "./App.css";
function App() {
  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("+91");
  const [ProductName, setProductName] = useState("");
  const [ProductQTY, setProductQTY] = useState(0);
  const [ProductPrice, setProductPrice] = useState(0);
  const [productList, setProductList] = useState([]);
  const [showGeneratedBill, setShowGeneratedBills] = useState(false);

  const handleAddButton = () => {
    let obj1 = {
      ProductName: ProductName,
      QTY: ProductQTY,
      Total: ProductQTY * ProductPrice,
    };
    setProductList([...productList, obj1]);
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);
  };

  const handleGeneretBills = () => {
    if (!showGeneratedBill) {
      setShowGeneratedBills(true);
    }
  };

  const ResetBills = () => {
    setProductList([]);
    setcustomerName("");
    setcustomerPhone("+91");
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);
  };

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
      {productList && (
        <div className="allProducts">
          <table>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
            {productList.map((element, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{element.ProductName}</td>
                <td>{element.QTY}</td>
                <td>{element.Total}</td>
              </tr>
            ))}
          </table>
          <button onClick={handleGeneretBills}>Generate Bill</button>
        </div>
      )}
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
          <button onClick={handleAddButton}>Add Item</button>
        </div>
      </div>
      {showGeneratedBill && (
        <div className="generatedBillBox">
          <h1>Generated Bills</h1>
          <div className="customerBox">
            <p>
              <b>Customer Name:</b>
              {customerName} <b>Contact:</b>
              {customerPhone}
            </p>
          </div>
          <div className="allProducts">
            <table>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
              {productList.map((element, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.ProductName}</td>
                  <td>{element.QTY}</td>
                  <td>{element.Total}</td>
                </tr>
              ))}
            </table>
            <button onClick={ResetBills}>Reset</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
