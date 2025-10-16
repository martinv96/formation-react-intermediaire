import { Title, Article, Section, Paragraph } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Section sectionTitle="Mon application React">
        <Article>
          <Title title="Mon premier article" levelTitle={2} />
          <Paragraph>Initialisation à React</Paragraph>
        </Article>
      </Section>
    </div>
  );
};

export default Home;
