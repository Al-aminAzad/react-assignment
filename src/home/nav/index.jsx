const Nav = () => {
  return (
    <nav className="col-md-6 col-12 tm-nav">
      <ul className="tm-nav-ul">
        <li className="tm-nav-li">
          <a href="index.html" className="tm-nav-link active">
            Home
          </a>
        </li>
        <li className="tm-nav-li">
          <a href="about.html" className="tm-nav-link">
            About
          </a>
        </li>
        <li className="tm-nav-li">
          <a href="contact.html" className="tm-nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
