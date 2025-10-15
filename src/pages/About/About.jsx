import "./About.css";
import { Section, Article, Title, Paragraph } from "@/components";

const About = () => {
  return (
    <Section sectionTitle="a propos de l'application">
      <Article>
        <Title title="Article 1" levelTitle={2} />
        <Paragraph>
          Ceci est l'article 1 de la page A propos.
        </Paragraph>
      </Article>

      <Article>
        <Title title="Article 2" levelTitle={2} />
        <Paragraph>
          Ceci est l'article 2 de la page A propos.
        </Paragraph>
      </Article>
    </Section>
  );
};

export default About;
