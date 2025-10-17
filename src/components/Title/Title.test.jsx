import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Title from "./Title";

// describe() permet de regrouper un ensemble de tests logiques
describe("composent Title (Jest Renderer)", () => {
  // ! test 1 : verification d'un titre de niveau h1
  it("devrait rendre un titre de niveau h1", () => {
    const testTitle = "Mon titre principal";

    // 1) action [Act - Agir] : Rendre le composant
    render(<Title title={testTitle} levelTitle={1} />);

    // 2) assert (Affirmer) : Vérifier la structure de l'objet rendu
    // vérifie la cohérence du rendu avec une balise "h1"
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    // vérifie le contenu du texte. sur l'html sont équivent est affichés les balises "h1" et le texte "Mon titre principal"
    expect(heading).toHaveTextContent(testTitle);

    // assertion de snapshot : s'assurer que le rendu n'a pas changé inopinément
    // snapshot c'est un equivalent à une photo du rendu HTML pour détecter les changments non voulus
    expect(heading).toMatchSnapshot();
  });

  // ! test 2 : verification du comportement par défaut
  it("devrait rendre le titre par défaut (Martin Vallée) dans un h1 si le levelTitle est invalide", () => {
    const testParDéfaut = "Martin Vallée";

    // on exagere le levelTitle, au niveau 999, pour le rendre invalide
    render(<Title title="Test invalide" levelTitle={999} />);

    // on vérifie que le titre par défaut est bien rendu
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    // on vérifie le texte par défaut
    expect(heading).toHaveTextContent(testParDéfaut);
  });
});
