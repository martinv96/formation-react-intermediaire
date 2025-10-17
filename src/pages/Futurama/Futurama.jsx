import "./Futurama.css";
import { useState, useEffect, useContext } from "react";
import { Article, Title, Paragraph } from "@/components";
import { FuturamaContext } from "@/contexts/FuturamaContext/FuturamaContext";
// ici on importe les fonctions utilitaires sous l'alias LocalDatas
import * as LocalDatas from "@/utils/LocalDatas/LocalDatas";

const Futurama = () => {
  // ici on récupère les données depuis le contexte partagé
  const { characters, errorAPI, fetchCharacters } = useContext(FuturamaContext);
  // ici on stocke le personnage actuellement affiché
  const [character, setCharacter] = useState(null);
  // ici on stocke les données de l'API dans un état local
  const [charactersList, setCharactersList] = useState(null);

  const returnRandomCharacter = (charactersList) => {
    const randomCharacter =
      charactersList[Math.floor(Math.random() * charactersList.length)];
    return randomCharacter;
  };

  // ici on charge tous les personnages au démarrage
  useEffect(() => {
    const futuramaLocalDatas = LocalDatas.getData("futuramaCharactersList");
    if (futuramaLocalDatas) {
      setCharactersList(JSON.parse(futuramaLocalDatas));
    }
    if (!charactersList) {
      fetchCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ici on synchronise les données du contexte avec l'état local
  useEffect(() => {
    if (characters && characters.length > 0) {
      setCharactersList(characters);
    }
  }, [characters]);

  // ici on sélectionne automatiquement un personnage quand les données arrivent
  useEffect(() => {
    if (charactersList && charactersList.length > 0 && !character) {
      setCharacter(returnRandomCharacter(charactersList));
    }
  }, [charactersList, character]);

  return (
    <div className="futurama">
      <h1>Futurama</h1>

      {/* ici on affiche le message de chargement */}
      {!charactersList && !errorAPI && (
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
          <button
            onClick={() =>
              !charactersList
                ? fetchCharacters()
                : setCharacter(returnRandomCharacter(charactersList))
            }
          >
            Nouveau personnage
          </button>

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
