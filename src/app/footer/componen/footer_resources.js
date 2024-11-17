import '../style/footer_resources.css';
import { FaLaptopCode, FaChartLine, FaDatabase } from 'react-icons/fa'; // Impor ikon dari react-icons

const FooterResources = () => {
    return (
        <footer className="footer-style-4">
            <div className="container footer-columns">
                <div className="column">
                    <h3>Tentang Kami</h3>
                    <p>Kami adalah perusahaan yang bergerak di bidang teknologi dan layanan digital.</p>
                </div>
                <div className="column">
                    <h3>Layanan</h3>
                    <ul>
                        <li><a href="#"><FaLaptopCode className="icon" /> Pengembangan Web</a></li>
                        <li><a href="#"><FaChartLine className="icon" /> Konsultasi IT</a></li>
                        <li><a href="#"><FaDatabase className="icon" /> Pengelolaan Data</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterResources;
