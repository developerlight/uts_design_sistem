import '../style/footer_link.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Impor ikon dari react-icons

const FooterLinks = () => {
    return (
        <footer className="footer-style-3">
            <div className="container">
                <p>Ikuti Kami:</p>
                <div className="social-links">
                    <a href="#" className="social-link"><FaFacebook /> Facebook</a>
                    <a href="#" className="social-link"><FaTwitter /> Twitter</a>
                    <a href="#" className="social-link"><FaLinkedin /> LinkedIn</a>
                    <a href="#" className="social-link"><FaInstagram /> Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterLinks;
