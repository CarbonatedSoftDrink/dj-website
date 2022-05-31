import React from "react";
import ImageGallery from 'react-image-gallery';
// https://www.npmjs.com/package/react-image-gallery

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images}/>;
  }
}

export default function Media(){
    return (
        <section id="Media">
            <p>
                Media Page
            </p>
            <MyGallery/>
        </section>
    )
}

// https://www.npmjs.com/package/react-media-gallery
