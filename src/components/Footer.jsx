
import { footerData } from "../data/footerData";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container">

        {/* Main Footer Columns */}
        <div className="footer-grid">

          {/* Company Information */}
          <div className="footer-column footer-company">

            <h3 className="footer-heading">
              {footerData.companyName}
            </h3>

            <p className="footer-description">
              {footerData.description}
            </p>

          </div>

          {/* Website Navigation */}
          <nav
            className="footer-column"
            aria-label="Footer navigation"
          >
            <h3 className="footer-heading">
              Explore
            </h3>

            <ul className="footer-links">
              {footerData.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </nav>

          {/* Contact Information */}
          <div
            className="footer-column"
            id="footer-contact"
          >
            <h3 className="footer-heading">
              Lorem Ipsum
            </h3>

            <ul className="footer-contact-list">
              {footerData.contact.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © {currentYear} {footerData.companyName}.
            All rights reserved.
          </p>

          <p className="footer-tagline">
            {footerData.tagline}
          </p>

          <p className="footer-disclaimer">
            {footerData.disclaimer}
          </p>

        </div>

      </div>

    </footer>
  );
}
