import Title from "../Title/Title";

const Section = ({ sectionTitle, addStyles, children }) => {
  return (
    <section style={addStyles}>
      {sectionTitle !== "" && <Title title={sectionTitle} levelTitle={2} />}
      {children}
    </section>
  );
};

export default Section;
