import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardAlbumComponent from "../../components/CardAlbumComponent/CardAlbumComponent";

// COMPONENTS

const MusicGenre = () => {
  const [albumData, setAlbumData] = useState([]);

  let { category } = useParams();

  // console.log(category);

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
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
  }, [category]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Albums by Music Genre</h1>
      {albumData.map((data) => {
        return <CardAlbumComponent albumsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default MusicGenre;
