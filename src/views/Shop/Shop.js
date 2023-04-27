import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./Shop.css";

import TextField from "@mui/material/TextField";

import PurchaseSessage from "../../components/PurchaseSessage/PurchaseSessage";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  productName: "",
  category: "",
  contact: "",
};

const Shop = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Product name"
          style={{ margin: 10, width: 400 }}
          name="productName"
          value={values.productName}
          onChange={onChange}
        />
        <TextField
          placeholder="Category"
          style={{ margin: 10, width: 400 }}
          name="category"
          value={values.category}
          onChange={onChange}
        />
        <TextField
          placeholder="Contact"
          style={{ margin: 10, width: 400 }}
          name="contact"
          value={values.contact}
          onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
          Send
        </button>
      </form>
      {purchaseID.length ? <PurchaseSessage purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Shop;
