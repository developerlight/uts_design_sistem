import '../style/footer_contact.css';
import { FaInfoCircle, FaCogs, FaEnvelope, FaLock } from 'react-icons/fa'; // Ikon tambahan dari react-icons

const FooterContact = () => {
    return (
        <footer className="footer-style-1">
            <div className="container">
                <p>&copy; 2024 Perusahaan Anda. Semua hak dilindungi.</p>
                <nav className="footer-nav">
                    <a href="#" className="footer-link"><FaInfoCircle /> Tentang Kami</a>
                    <a href="#" className="footer-link"><FaCogs /> Layanan</a>
                    <a href="#" className="footer-link"><FaEnvelope /> Kontak</a>
                    <a href="#" className="footer-link"><FaLock /> Privasi</a>
                </nav>
            </div>
        </footer>
    );
};

export default FooterContact;
