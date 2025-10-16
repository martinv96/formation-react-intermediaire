import { createContext, useState, useCallback } from "react";

// ici on crée un contexte pour stocker les données du personnage
// eslint-disable-next-line react-refresh/only-export-components
export const FuturamaContext = createContext();

export const FuturamaProvider = ({ children }) => {
  // ici on crée un objet qui va contenir les données du personnage
  const [characters, setCharacters] = useState(null);

  // ici on crée un objet qui va contenir les messages d'erreur
  const [errorAPI, setErrorAPI] = useState(undefined);

  // ici on fait la fonction pour récupérer tous les personnages depuis l'API
  const fetchCharacters = useCallback(async () => {
    setErrorAPI(undefined);
    try {
      const response = await fetch(
        "https://api.sampleapis.com/futurama/characters"
      );
      if (!response.ok) {
        throw new Error("La réponse de l'API n'est pas ok");
      }
      const data = await response.json();
      setCharacters(data);
      return true;
    } catch (err) {
      setErrorAPI(`Erreur lors de la récupération des personnages : ${err}.`);
    }
    return false;
  }, []);

  // ici on retourne le provider avec les données partagées
  return (
    <FuturamaContext.Provider
      value={{
        characters,
        errorAPI,
        fetchCharacters,
      }}
    >
      {children}
    </FuturamaContext.Provider>
  );
};
