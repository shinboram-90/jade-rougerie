import { Outlet, useParams } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../styles/painting.css';

function PaintingDisplay() {
  const { id } = useParams();
  const photos = paintingData[id - 1].photo;
  photos.map((photo) => console.log(photo));

  console.log(photos);
  return (
    <section className="paintingDisplay background">
      <h2>{paintingData[id - 1].name}</h2>{' '}
      <p>Description : {paintingData[id - 1].description}</p>{' '}
      <div className="carousel-wrapper">
        <Carousel>
          {photos.map((photo) => {
            return (
              <div key={photo} className="image-wrapper">
                <img
                  className="painting--one-img"
                  alt={photo}
                  src={require(`../assets/big/${photo}`)}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <p>Prix : {paintingData[id - 1].price} €</p>
      <p>Date : {paintingData[id - 1].date}</p>
      <p>Cadre : {paintingData[id - 1].frame ? 'Oui' : 'Non'}</p>
      <p>Dimensions: {paintingData[id - 1].dimension}</p>
    </section>
  );
}

export default PaintingDisplay;
