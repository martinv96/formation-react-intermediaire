import { useState, createContext } from "react";
import * as LocalDatas from "@/utils/LocalDatas/LocalDatas";

// eslint-disable-next-line react-refresh/only-export-components
export const FuturamaContext = createContext();

export const FuturamaProvider = ({ children }) => {
  const [characters, setCharacters] = useState(null);

  const [errorAPI, setErrorAPI] = useState(undefined);

  const fetchCharacters = async () => {
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
      LocalDatas.setData("futuramaCharactersList", JSON.stringify(data));
      return true;
    } catch (err) {
      setErrorAPI(`Erreur lors de la récupération des personnages : ${err}.`);
      return false;
    }
  };

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
