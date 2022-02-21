import { useNavigate } from 'react-router-dom';
import '../styles/activity.css';

function Activity() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header--container">
        <div className="title--container">
          <h1>
            <span className="title-artist">Artiste </span>
            <span className="title-painter">
              Peintre <span className="line-through"></span>{' '}
            </span>
            {/* <span className="title-minus"></span> */}
            <span className="title-impressionist">Impressionniste</span>
          </h1>
        </div>
        <div className="bg--image">
          <span className="paint--font">S</span>

          <figure className="quote">
            <blockquote>
              <p>
                <strong>L'ART</strong> est comme une prière, une main tendue
                dans l'obscurité qui veut saisir une part de grâce afin de se
                muer en une main... qui donne !
              </p>
              <span className="quote--ending">À bientôt,</span>
              <figcaption className="quote--signature">
                Jade B. Rougerie
              </figcaption>
            </blockquote>
          </figure>
        </div>
        <span className="paint--font-bigscreen">W</span>
      </header>
      <div className="btn--container">
        <button
          className="header--button btn-5"
          onClick={() => navigate('/paintings')}
        >
          Gallerie
        </button>
      </div>
      <section className="section--video">
        <video controls autoPlay loop muted>
          <source
            src={
              'https://res.cloudinary.com/dblhjhkq0/video/upload/v1645013371/vid%C3%A9o_J._cuvgxd.mov'
            }
            type="video/mp4"
          ></source>
        </video>
      </section>
    </>
  );
}

export default Activity;
