import React from "react";
import ImageGallery from 'react-image-gallery';
// https://www.npmjs.com/package/react-image-gallery

const images = [
  {
    original: 'https://libreshot.com/wp-content/uploads/2017/03/dancing-people-on-the-party-1536x1101.jpg',
    thumbnail: 'https://libreshot.com/wp-content/uploads/2017/03/dancing-people-on-the-party-1536x1101.jpg',
  },
  {
    original: 'http://www.publicdomainpictures.net/pictures/110000/velka/platterspieler-turntable.jpg',
    thumbnail: 'http://www.publicdomainpictures.net/pictures/110000/velka/platterspieler-turntable.jpg',
  },
  {
    original: 'https://images.pexels.com/photos/302879/pexels-photo-302879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    thumbnail: 'https://images.pexels.com/photos/302879/pexels-photo-302879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images}/>;
  }
}

export default function Media(){
    return (
        <section id="media">
            <h1>
                What We Can Do
            </h1>
            <MyGallery/>
        </section>
    )
}

// https://www.npmjs.com/package/react-media-gallery
