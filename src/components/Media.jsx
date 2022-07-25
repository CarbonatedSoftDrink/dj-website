import { React, useEffect, useState } from "react";
import { client } from "../client";
import ImageGallery from "react-image-gallery";
import { urlFor } from "../client";

export default function Media() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const imagesQuery = '*[_type == "images"]';

    const fetchImages = async () => {
      try {
        const data = await client.fetch(imagesQuery);
        let imageArray = [];
        console.log(data);

        data.forEach((item) => {
          imageArray.push({
            original: urlFor(item.image.asset),
            thumbnail: urlFor(item.image.asset),
            originalClass: "media-img-component"
          });
        });

        setLoadedImages(imageArray);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImages();
  }, []);
  

  return (
    <section id="media" style={{marginBottom: "5rem"}}>
      <h1 style={{marginTop: "3rem", marginBottom: "3rem"}}>What We Can Do</h1>
      <div className="media-gallery-container">

      {loadedImages ? <ImageGallery items={loadedImages} /> : null}
      </div>
    </section >
  );
}

// https://www.npmjs.com/package/react-media-gallery
