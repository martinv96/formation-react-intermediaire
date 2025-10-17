import { Title, Article, Section, Paragraph } from "@/components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Section sectionTitle="Mon application React">
        <Article>
          <Title
            title="Bienvenue sur mon projet react intermédiaire"
            levelTitle={2}
          />
          <Paragraph>Initialisation à React</Paragraph>
          <Paragraph>
            Ce projet à pour objectif de me familiariser avec React
          </Paragraph>
        </Article>
      </Section>
    </div>
  );
};

export default Home;
