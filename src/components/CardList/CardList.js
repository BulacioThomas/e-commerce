import React, { useState, useEffect } from "react";

import CardAlbumComponent from "../CardAlbumComponent/CardAlbumComponent";
import { Link } from "react-router-dom";

import "./CardList.css";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setAlbumsData(docs);
    };
    getAlbums();
  }, []);

  return (
    <div className="CardListContainer">
      {albumsData.map((data) => {
        return (
          <Link
            to={`details/${data.id}`}
            style={{ textDecoration: "none" }}
            key={data.id}
          >
            <CardAlbumComponent albumsData={data} />
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
