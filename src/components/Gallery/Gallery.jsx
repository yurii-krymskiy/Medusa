import React, { useState } from 'react'
import './Gallery.scss'
import gallery1 from '../../assets/icon/gallery1.png'
import gallery2 from '../../assets/icon/gallery2.png'
import gallery3 from '../../assets/icon/gallery3.png'

const photoPaths = [
  require('../../assets/gallery/img1.jpeg'),
  require('../../assets/gallery/img2.jpeg'),
  require('../../assets/gallery/img3.jpeg'),
  require('../../assets/gallery/img4.jpeg'),
  require('../../assets/gallery/img5.jpeg'),
  require('../../assets/gallery/img6.jpeg'),
  require('../../assets/gallery/img7.jpeg'),
  require('../../assets/gallery/img8.jpeg'),
  require('../../assets/gallery/img9.jpeg'),
  require('../../assets/gallery/img10.jpeg'),
  require('../../assets/gallery/img11.jpeg'),
  require('../../assets/gallery/img12.jpeg'),
  require('../../assets/gallery/img13.jpeg'),
  require('../../assets/gallery/img14.jpeg'),
  require('../../assets/gallery/img15.jpeg'),
  require('../../assets/gallery/img16.jpeg'),
  require('../../assets/gallery/img17.jpeg'),
  require('../../assets/gallery/img18.jpeg'),
  require('../../assets/gallery/img19.jpeg'),
  require('../../assets/gallery/img20.jpeg'),
  require('../../assets/gallery/img21.jpeg'),
  require('../../assets/gallery/img22.jpeg'),
  require('../../assets/gallery/img23.jpeg'),
  require('../../assets/gallery/img24.jpeg'),
  require('../../assets/gallery/img25.jpeg'),
  require('../../assets/gallery/img26.jpeg'),
  require('../../assets/gallery/img27.jpeg'),
  require('../../assets/gallery/img28.jpeg'),
];


const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className='gallery'>
      <div className='gallery-section-1'>
        <div className='gallery-section-1-content'>
          <p className='gallery-section-1-title'>GALLERY</p>
        </div>
      </div>
      <div className='gallery-section-2'>
        <div className='gallery-section-2-block-1'>
          <p className='gallery-section-2-title'>Hello.<br />Our restaurant is the pearl of Tenerife. All guests are always satisfied.</p>
        </div>
        <div className='gallery-section-2-block gallery-section-2-block-2'>
          <p className='gallery-section-2-heading'>Restaurant</p>
          <p className='gallery-section-2-desc'>LUNCH | DINNER</p>
        </div>
        <div className='gallery-section-2-block gallery-section-2-block-3'>
          <p className='gallery-section-2-heading'>Bar</p>
          <p className='gallery-section-2-desc'>WIFI AREA</p>
        </div>
      </div>
      <div className='gallery-section-3'>
        <div className="gallery-section-3-grid-container">
          {photoPaths.map((photo, index) => (
            <div key={index} className="gallery-section-3-grid-item" onClick={() => openPhoto(photo)}>
              <img src={photo} alt={`Photo ${index + 1}`} className='gallery-section-3-grid-img' />
            </div>
          ))}
        </div>
        {selectedPhoto && (
          <div className="overlay" onClick={closePhoto}>
            <img src={selectedPhoto} alt="Selected" className="selected-photo" />
          </div>
        )}

        <div className='gallery-section-3-bottom'>
          <div className='gallery-section-3-bottom-block'>
            <img src={gallery1} alt="gallery-icon" className='gallery-section-3-icon' />
            <div className='gallery-section-3-info'>
              <h3 className='gallery-section-3-heading'>Wi-Fi</h3>
              <p className='gallery-section-3-paragraph'>Good internet throughout the restaurant</p>
            </div>
          </div>
          <div className='gallery-section-3-bottom-block'>
            <img src={gallery2} alt="gallery-icon" className='gallery-section-3-icon' />
            <div className='gallery-section-3-info'>
              <h3 className='gallery-section-3-heading'>Parking</h3>
              <p className='gallery-section-3-paragraph'>Parking near the restaurant itself</p>
            </div>
          </div>
          <div className='gallery-section-3-bottom-block'>
            <img src={gallery3} alt="gallery-icon" className='gallery-section-3-icon' />
            <div className='gallery-section-3-info'>
              <h3 className='gallery-section-3-heading'>Cocktail</h3>
              <p className='gallery-section-3-paragraph'>Exquisite cocktails in our bar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
