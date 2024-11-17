import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Footer_1 from './componen/footer_content';
import Footer_2 from './componen/footer_contact';
import Footer_3 from './componen/footer_link';
import Footer_4 from './componen/footer_resources';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.nametag}>Footer Component</h1>
                <div className={styles.box}>
                <Footer_1 />
                </div>
                <div className={styles.box}>
                <Footer_2 />
                </div>
                <div className={styles.box}>
                <Footer_3 />
                </div>
                <div className={styles.box}>
                <Footer_4 />
                </div>
            </div>
        </Layout>
    );
}
export default Page;