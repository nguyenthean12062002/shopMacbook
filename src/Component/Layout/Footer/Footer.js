import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="copy__right">
          Copyright © NTA Inc. 2023 All rights reserved.
        </span>
        <ul className="list__action">
          <li className="action__item">Policy And Privacy</li>
          <li className="action__item">Terms Of Use</li>
          <li className="action__item">sales and refunds</li>
          <li className="action__item">juridical</li>
          <li className="action__item">site map web</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
