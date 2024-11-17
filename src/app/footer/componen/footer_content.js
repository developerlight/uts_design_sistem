import '../style/footer_content.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Ikon tambahan dari react-icons

const FooterContent = () => {
    return (
        <footer className="footer-style-2">
            <div className="container">
                <div className="contact-info">
                    <p><FaPhoneAlt className="icon" /> Hubungi Kami: (021) 123-4567</p>
                    <p><FaEnvelope className="icon" /> Email: info@perusahaan.com</p>
                    <p><FaMapMarkerAlt className="icon" /> Alamat: Jl. Merdeka No. 123, Jakarta</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterContent;
