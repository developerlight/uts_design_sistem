import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import './home.css'

const Page = () => {
    return (
      <Layout>
        <div className={styles.container}>
          <h1 className='nametag'>AR Componen</h1>
        </div>
      </Layout>
  );
}
export default Page;