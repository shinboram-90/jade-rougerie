import '../styles/about.css';

function About() {
  return (
    <>
      <div className="container--about">
        <h2 className="title--about">À propos de l'artiste</h2>
        <header className="header--about">
          <img
            className="img--paintbrush"
            alt="paintbrush"
            src={require('../assets/paint-brush-stroke.png')}
          />
          <div className="container--portrait">
            <img
              className="img--portrait"
              alt="artist Jade Rougerie smiling"
              src={require('../assets/Bio/Jade-2.webp')}
            />
          </div>
        </header>
        <article className="section--about">
          <p>
            Jade B. Rougerie vient au monde dans une région merveilleuse
            vallonnée de plaines de torrents et de fleurs, à St Léonard de
            Noblat dans le Limousin où Poulidor, notre « Poupou National »
            champion cycliste, ami de la famille vivait et côtoyait ses grands
            frères.
          </p>
          <p>
            Puis très très jeunes, ils partent tous pour Nice où elle fait ses
            études voulant être astrophysicienne, mais elle choisira la Marine
            comme sont père Commandant de Tankers qui lui donne alors
            l&apos;envie aussi de découvrir le monde, les océans, et les mers.
          </p>
          <p>
            Après ses études à Nice et Antibes elle sera Mannequin
            Internationale pour promouvoir la Mode Française pendant quelques
            années, puis décidera d&apos;être alors un marin, elle devient
            Officier Radio sur des navires de sauvetage – renflouements
            d&apos;épaves et remorquages, pendant de nombreuses années basée en
            Afrique aux Caraïbes – parcourant les mers et les océans se
            délectant des couchers de soleil, de l&apos;air du temps et des îles
            tropicales.
          </p>
          <p>
            2002 arrivant elle retourne « sur terre » ne connaissant que trop
            peu sa France, mais « riche » de ses années en mer elle découvre par
            hasard qu&apos;elle peut retransmettre sur toiles, sur bois, et sur
            miroirs ses souvenirs, ses émotions, la couleur des vents, les
            sables chauds, la force des océans et surtout les fleurs tropicales
            et les soleils d&apos;hiver par le bout de ses doigts et par ses
            mains… <strong>elle peint !</strong>
          </p>
          <p>
            Et comme - Paul Cézanne - qu&apos;elle admire et qui disait{' '}
            <span>
              « Lorsque la couleur est à sa richesse, la forme est à sa
              plénitude ».
            </span>
            Aujourd&apos;hui connue et reconnue à travers le monde, elle expose
            ses toiles à Paris – au grand Palais, au Louvre, à New York,
            Bruxelles, Londres….. Si vous le souhaitez, affectueuse et généreuse
            elle vous amènera avec elle - « dans sa Lumière ».
          </p>

          <p>
            Jade B. ROUGERIE – Franco Irlandaise par ses cheveux roux/blond
            grande avec sa démarche altière vous subjugue par ses créations et
            ses couleurs. Souhaitons qu&apos;elle continue à nous émouvoir par
            son affection et son savoir.
          </p>
          <figcaption className="quote--signature">Journaliste R.D.</figcaption>
        </article>
      </div>
    </>
  );
}

export default About;
