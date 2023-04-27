import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardAlbumComponent from "../../components/CardAlbumComponent/CardAlbumComponent";

import "./ProductDetail.css";

const ProductDetail = () => {
  const [albumData, setAlbumData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setAlbumData(docs);
    };
    getAlbums();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>products details</h1>
      {albumData.map((data) => {
        return <CardAlbumComponent albumsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default ProductDetail;
