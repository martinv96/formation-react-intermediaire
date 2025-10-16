const Title = ({ title, levelTitle, addStyles }) => {
  // Fonction pour obtenir le bon niveau de titre
  const getLevelTitle = (levelTitle) => {
    switch (levelTitle) {
      case 1:
        return <h1 style={addStyles}>{title}</h1>;
      case 2:
        return <h2 style={addStyles}>{title}</h2>;
      case 3:
        return <h3 style={addStyles}>{title}</h3>;
      case 4:
        return <h4 style={addStyles}>{title}</h4>;
      case 5:
        return <h5 style={addStyles}>{title}</h5>;
      case 6:
        return <h6 style={addStyles}>{title}</h6>;
      default:
        return null;
    }
  };

  return <>{getLevelTitle(levelTitle) ?? <p>Martin Vallée</p>}</>;
};

export default Title;
