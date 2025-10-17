# Formation React Intermédiaire

## 📖 Description

Application React moderne développée dans le cadre d'une formation CDA. Ce projet illustre les concepts intermédiaires de React avec une architecture propre et des bonnes pratiques de développement.

## ✨ Fonctionnalités

### 🏠 Pages

- **Accueil** - Page de présentation du projet
- **À propos** - Informations sur l'application
- **Futurama** - Galerie de personnages avec API
- **Inscription** - Formulaire d'authentification avec validation
- **404** - Page d'erreur personnalisée

### 🎨 Fonctionnalités principales

- **Navigation** avec React Router
- **Mode sombre/clair** avec Context API
- **Consommation d'API** (personnages Futurama)
- **Gestion d'état** avec Context et hooks
- **Validation de formulaires** côté client
- **Architecture modulaire** avec composants réutilisables
- **Tests unitaires** avec Jest et Testing Library

## 🛠️ Stack Technique

### Frontend

- **React 19** - Framework JavaScript
- **React Router Dom 7** - Navigation
- **Vite** - Build tool et dev server
- **CSS3** - Styles avec variables CSS et dark mode

### Développement

- **Jest 30** - Framework de test
- **@testing-library/react** - Tests de composants
- **ESLint** - Linter JavaScript
- **pnpm** - Gestionnaire de paquets

## 📂 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Title/          # Titres dynamiques (h1-h6)
│   ├── Article/        # Conteneur d'articles
│   ├── Section/        # Sections avec titres
│   └── Paragraph/      # Paragraphes stylés
├── pages/              # Pages de l'application
│   ├── Home/           # Page d'accueil
│   ├── About/          # Page à propos
│   ├── Futurama/       # Galerie personnages
│   ├── Auth/           # Formulaire inscription
│   └── NotFound/       # Page 404
├── contexts/           # Contextes React
│   ├── ThemeContext/   # Gestion dark/light mode
│   └── FuturamaContext/ # État API Futurama
├── layouts/            # Composants de mise en page
│   ├── Header.jsx      # En-tête avec navigation
│   ├── Footer.jsx      # Pied de page
│   └── Layout.jsx      # Layout principal
├── navigation/         # Navigation
│   └── MainNav.jsx     # Menu principal
└── utils/              # Utilitaires
    └── LocalDatas/     # Gestion données locales
```

## 🚀 Installation et Lancement

### Prérequis

- Node.js 18+
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd formation-react-intermediaire

# Installer les dépendances
pnpm install
```

### Commandes disponibles

```bash
# Développement
pnpm dev              # Lance le serveur de développement

# Production
pnpm build            # Build de production
pnpm preview          # Prévisualisation du build

# Qualité du code
pnpm lint             # Vérification ESLint
pnpm test             # Lance les tests
pnpm test --watch     # Tests en mode watch
```

## 🧪 Tests

Le projet utilise **Jest** et **@testing-library/react** pour les tests unitaires.

### Lancer les tests

```bash
pnpm test                    # Tous les tests
pnpm test --watch           # Mode surveillance
pnpm test --coverage        # Avec couverture de code
```

### Exemple de test

```javascript
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("affiche le titre correctement", () => {
  render(<Title title="Test" levelTitle={1} />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Test");
});
```

## 🎨 Thèmes

L'application supporte le mode sombre et clair avec persistence en localStorage.

```css
/* Variables CSS dynamiques */
.app-layout.light {
  --text-color: #333;
  --bg-color: #fff;
}

.app-layout.dark {
  --text-color: #fff;
  --bg-color: #333;
}
```

## 📚 Apprentissages

Ce projet couvre :

- ✅ **Composants fonctionnels** avec hooks
- ✅ **Context API** pour l'état global
- ✅ **React Router** pour la navigation
- ✅ **Fetch API** et gestion des erreurs
- ✅ **Validation de formulaires**
- ✅ **Tests unitaires** modernes
- ✅ **Architecture modulaire**
- ✅ **CSS moderne** avec variables

## 📋 Guide des Tests

Un guide complet de migration des tests est disponible : [`guide-pour-corriger-tests.md`](./guide-pour-corriger-tests.md)

## 🤝 Contribution

Projet éducatif dans le cadre de la formation CDA.

## 📄 Licence

Projet pédagogique - Formation React Intermédiaire

---

**Développé avec ❤️ dans le cadre de la formation CDA**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
