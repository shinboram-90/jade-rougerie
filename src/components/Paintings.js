import { useNavigate } from 'react-router-dom';
import { paintingData } from '../data/paintingData';
import Masonry from 'react-masonry-component';
import '../styles/paintings.css';

function Painting() {
  const navigate = useNavigate();

  return (
    <>
      <section className="section--list background">
        <h2 className="title--gallery">Gallerie</h2>
        <span className="special"></span>
        {/* <div className="background"></div> */}

        <Masonry className="paintings--list" elementType={'ul'}>
          {paintingData.map((painting) => {
            return (
              <li
                className="container--img"
                key={painting.id}
                onClick={() => {
                  navigate(`${painting.id}`);
                }}
              >
                {/* <div>{painting.description}</div> */}
                <img
                  className="painting--list-img"
                  alt={painting.name}
                  src={require(`../assets/mini/${painting.cover}`)}
                />

                <h3>{painting.name}</h3>
              </li>
            );
          })}
        </Masonry>
      </section>
    </>
  );
}

export default Painting;
