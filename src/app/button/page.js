import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Button from '../componen/button';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Welcome to My Website</h1>
                <p>This is the main content area. You can place your content here.</p>
                <Button state="success">Success</Button>
                <Button state="info">Info</Button>
                <Button state="danger">Danger</Button>
                <Button state="default">Default</Button>
                <Button state="warning">Warning</Button>
            </div>
        </Layout>
    );
}
export default Page;