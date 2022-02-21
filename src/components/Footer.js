import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <ul>
        <li className="social--media">
          <a href="https://www.facebook.com/jade.rougerie.9">Facebook</a>
        </li>

        <li className="social--media">
          {' '}
          <a href="/">Instagram</a>
        </li>

        <li className="social--media">
          {' '}
          <a href="/">Twitter</a>
        </li>
      </ul>
      <p className="copyright">
        <small>&copy; {new Date().getFullYear()} Jade Rougerie</small>
      </p>
    </footer>
  );
}

export default Footer;
