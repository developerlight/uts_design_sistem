import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import CardNavbar from '../componen/navbar';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Welcome to My Website</h1>
                <p>This is the main content area. You can place your content here.</p>
                <CardNavbar /> {/* Menampilkan CardNavbar di halaman */}
            </div>
        </Layout>
    );
}
export default Page;