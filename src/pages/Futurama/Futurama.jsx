import "./Futurama.css";
import { useState, useEffect, useContext, useCallback } from "react";
import { Article, Title, Paragraph } from "@/components";
import { FuturamaContext } from "@/contexts/FuturamaContext/FuturamaContext";

const Futurama = () => {
  // ici on récupère les données depuis le contexte partagé
  const { characters, errorAPI, fetchCharacters } = useContext(FuturamaContext);
  // ici on stocke le personnage actuellement affiché
  const [character, setCharacter] = useState(null);

  const returnRandomCharacter = (charactersList) => {
    return charactersList[Math.floor(Math.random() * charactersList.length)];
  };

  // ici on fait la fonction pour choisir un personnage au hasard
  const selectRandomCharacter = useCallback(() => {
    if (characters && characters.length > 0) {
      const randomCharacter = returnRandomCharacter(characters);
      setCharacter(randomCharacter);
    }
  }, [characters]);

  // ici on charge tous les personnages au démarrage
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // ici on sélectionne automatiquement un personnage quand les données arrivent
  useEffect(() => {
    if (characters && characters.length > 0 && !character) {
      selectRandomCharacter();
    }
  }, [characters, character, selectRandomCharacter]);

  return (
    <div className="futurama">
      <h1>Futurama</h1>

      {/* ici on affiche le message de chargement */}
      {!characters && !errorAPI && (
        <Article>
          <Title title="Chargement..." levelTitle={2} />
          <Paragraph>Les données sont en cours de chargement...</Paragraph>
        </Article>
      )}

      {/* ici on affiche les erreurs s'il y en a */}
      {errorAPI && (
        <Article>
          <Title title="Erreur" levelTitle={2} />
          <Paragraph>
            Une erreur a été rencontrée lors de la récupération des données.
          </Paragraph>
          <Paragraph>Détails : {errorAPI}</Paragraph>
        </Article>
      )}

      {/* ici on affiche les infos du personnage sélectionné */}
      {character && character.name && (
        <Article>
          <button onClick={selectRandomCharacter}>Nouveau personnage</button>

          <Title
            title={`${character.name.first} ${character.name.middle} ${character.name.last}`}
            levelTitle={2}
          />

          <img src={character.images.main} alt={character.name.first} />

          <Paragraph>
            <strong>Âge</strong> :{" "}
            {character.age.toLowerCase() !== "unknown"
              ? character.age
              : "Inconnu"}
          </Paragraph>
          <Paragraph>
            <strong>Genre</strong> : {character.gender}
          </Paragraph>
          <Paragraph>
            <strong>Espèce</strong> : {character.species}
          </Paragraph>

          {character.homePlanet && (
            <Paragraph>
              <strong>Planète</strong> : {character.homePlanet}
            </Paragraph>
          )}

          <Paragraph>
            <strong>Occupation</strong> : {character.occupation}
          </Paragraph>

          {/* ici on affiche une citation aléatoire */}
          <Paragraph>
            <strong>Expression</strong> :{" "}
            {
              character.sayings[
                Math.floor(Math.random() * character.sayings.length)
              ]
            }
          </Paragraph>

          {/* ici on liste toutes les citations du personnage */}
          <ul>
            {character.sayings.map((saying, index) => (
              <li key={index}>{saying}</li>
            ))}
          </ul>
        </Article>
      )}
    </div>
  );
};

export default Futurama;
