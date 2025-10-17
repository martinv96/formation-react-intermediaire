# Tests React - Guide Express 🚀

## ❌ Le Problème

Votre cours utilise `react-test-renderer` qui ne marche plus avec React 19.

```javascript
// ❌ CASSÉ
const tree = renderer.create(<Title />).toJSON();
expect(tree.type).toBe("h1"); // tree = null !
```

## ✅ La Solution

Utiliser `@testing-library/react` à la place.

```javascript
// ✅ FONCTIONNE
render(<Title />);
expect(screen.getByRole("heading")).toBeInTheDocument();
```

---

## 🔧 Installation Express

```bash
# Installer les outils modernes
pnpm i -D @babel/preset-env @babel/preset-react babel-jest
pnpm i -D jest-environment-jsdom
pnpm i -D @testing-library/react @testing-library/jest-dom

# Supprimer l'ancien
pnpm uninstall react-test-renderer
```

**Créer `jest.config.js` :**

```javascript
export default {
  testEnvironment: "jsdom",
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/*.(test|spec).(js|jsx)"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
};
```

**Créer `babel.config.json` :**

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

---

## 🔄 Transformer Vos Tests

### Avant (cassé)

```javascript
import renderer from "react-test-renderer";

it("test titre", () => {
  const tree = renderer.create(<Title title="Test" levelTitle={1} />).toJSON();
  expect(tree.type).toBe("h1");
  expect(tree.children[0]).toBe("Test");
});
```

### Après (qui marche)

```javascript
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("test titre", () => {
  render(<Title title="Test" levelTitle={1} />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Test");
});
```

---

## � Erreurs Courantes

| Erreur                    | Solution                                                        |
| ------------------------- | --------------------------------------------------------------- |
| `Unexpected token <`      | Créer `babel.config.json`                                       |
| `jsdom cannot be found`   | `pnpm i -D jest-environment-jsdom`                              |
| `describe is not defined` | Ajouter `import { describe, it, expect } from "@jest/globals";` |

---

## 💡 Commandes Utiles

```bash
pnpm run test           # Lancer les tests
pnpm run test --watch   # Mode automatique
```

**Et voilà ! Vos tests marchent maintenant ! 🎉**
