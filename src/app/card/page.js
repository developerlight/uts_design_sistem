import Layout from "../componen/layout";
import styles from "../componen/stylemodule/container.module.css";
import Button from "../componen/button";
import Card1 from "./component/card1";
import Card2 from "./component/card2";
import '../card/style/page.css';

const Page = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to My Website</h1>
        <p>This is the main content area. You can place your content here.</p>
        Card
        <div className="box">
          <Card1
            title="Card 1"
            content="This is the content of card 1."
            url={"https://images4.alphacoders.com/115/thumb-1920-115716.jpg"}
          />

          <Card2
            title={"Card 2"}
            imageSrc={
              "https://images4.alphacoders.com/115/thumb-1920-115716.jpg"
            }
          />
        </div>
      </div>
    </Layout>
  );
};
export default Page;
