import "./Home.css";
import { Title, Article, Section, Paragraph } from "../../components";

const Home = () => {
  return (
    <>
      <Section sectionTitle="Mon application React">
        <Article>
          <Title title="Mon premier article" levelTitle={2} />
          <Paragraph>Initialisation à</Paragraph>
        </Article>
      </Section> 
    </>
  );
};

export default Home;
