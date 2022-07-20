import { React, useEffect, useState } from "react";
import { client } from "../client";
import ImageGallery from "react-image-gallery";
import { urlFor } from "../client";
// https://www.npmjs.com/package/react-image-gallery

// const images = [
//   {
//     athing:
//       "https://libreshot.com/wp-content/uploads/2017/03/dancing-people-on-the-party-1536x1101.jpg",
//     thumbnail:
//       "https://libreshot.com/wp-content/uploads/2017/03/dancing-people-on-the-party-1536x1101.jpg",
//   },
//   {
//     original:
//       "http://www.publicdomainpictures.net/pictures/110000/velka/platterspieler-turntable.jpg",
//     thumbnail:
//       "http://www.publicdomainpictures.net/pictures/110000/velka/platterspieler-turntable.jpg",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/302879/pexels-photo-302879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     thumbnail:
//       "https://images.pexels.com/photos/302879/pexels-photo-302879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   },
// ];

// let images = [];

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
            // originalWidth: "500px",
            // originalHeight: "300px"
            // originalWidth: "100%",
            // originalHeight: "100%"
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
    <section id="media">
      <h1>What We Can Do</h1>
      <div className="media-gallery-container">

      {loadedImages ? <ImageGallery items={loadedImages} /> : null}
      </div>
    </section>
  );
}

// https://www.npmjs.com/package/react-media-gallery
