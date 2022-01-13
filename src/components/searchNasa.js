import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchNasa(pageNum) {

  const [canvases, setCanvases] = useState([]);

  useEffect(() => {
    setCanvases([]);
  });

  useEffect(() => {

    axios
      .get(`https://openlibrary.org/search.json?q=${""}&page=${""}`, {
      })
      .then((res) => {
        setCanvases((prev) => {
          return [...new Set([...prev, ...res.data.docs.map((d) => d.title)])];
        });

      })
      .catch((err) => {
      });

  });

  return {canvases };
}

export default SearchNasa;
