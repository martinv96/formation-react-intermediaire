import { Section, Article, Title, Paragraph } from "@/components";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Section sectionTitle="A propos de l'application">
        <Article>
          <Title title="Article 1" levelTitle={2} />
          <Paragraph>Ceci est l'article 1 de la page A propos.</Paragraph>
        </Article>

        <Article>
          <Title title="Article 2" levelTitle={2} />
          <Paragraph>Ceci est l'article 2 de la page A propos.</Paragraph>
        </Article>
      </Section>
    </div>
  );
};

export default About;
