# Formation React Intermédiaire

## 📖 Description

Application React moderne développée dans le cadre d'une formation CDA. Ce projet illustre les concepts intermédiaires de React avec une architecture propre, des bonnes pratiques de développement, et un système d'authentification complet.

## ✨ Fonctionnalités

### 🏠 Pages

- **Accueil** - Page de présentation du projet
- **À propos** - Informations sur l'application
- **Futurama** - Galerie de personnages avec API et traduction française
- **Inscription/Connexion** - Système d'authentification complet avec validation
- **Compte** - Gestion du profil utilisateur et administration
- **404** - Page d'erreur personnalisée

### 🔐 Système d'Authentification

- **Inscription** sécurisée avec validation des données
- **Connexion** avec vérification des credentials
- **Gestion de session** avec sessionStorage crypté
- **Hashage des mots de passe** pour la sécurité
- **Page compte** avec gestion du profil et déconnexion
- **Protection des routes** et redirection automatique

### 🌐 Fonctionnalités API

- **Consommation API Futurama** avec gestion d'erreurs
- **Traduction française** complète des données (personnages, espèces, métiers)
- **Système de traduction** modulaire et extensible
- **Cache local** des traductions pour les performances

### 🎨 Fonctionnalités principales

- **Navigation** avec React Router Dom 7
- **Mode sombre/clair** avec Context API et persistence
- **Responsive design** optimisé mobile-first
- **Gestion d'état** avancée avec Context et hooks
- **Validation de formulaires** côté client
- **Architecture modulaire** avec composants réutilisables
- **Tests unitaires** complets avec Jest et Testing Library
- **Cryptage des données** pour la sécurité

## 🛠️ Stack Technique

### Frontend

- **React 19** - Framework JavaScript moderne
- **React Router Dom 7** - Navigation et routage SPA
- **Vite 7** - Build tool ultra-rapide et dev server
- **CSS3** - Styles avec variables CSS et dark mode responsive

### Sécurité & Données

- **sessionStorage** - Stockage temporaire sécurisé
- **Cryptage personnalisé** - Protection des données sensibles
- **Hashage des mots de passe** - Sécurité des credentials
- **Validation côté client** - Contrôles de saisie

### Développement & Qualité

- **Jest 30** - Framework de test moderne
- **@testing-library/react 16** - Tests de composants
- **ESLint** - Linter JavaScript avec règles strictes
- **pnpm** - Gestionnaire de paquets performant
- **Vercel** - Déploiement et hosting

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
│   ├── Futurama/       # Galerie personnages avec traduction
│   ├── Auth/           # Système d'authentification complet
│   ├── Compte/         # Gestion profil utilisateur
│   └── NotFound/       # Page 404
├── contexts/           # Contextes React
│   ├── ThemeContext/   # Gestion dark/light mode
│   ├── FuturamaContext/ # État API Futurama
│   └── TranslationContext/ # Système de traduction
├── layouts/            # Composants de mise en page
│   ├── Header.jsx      # En-tête avec navigation
│   ├── Footer.jsx      # Pied de page
│   └── Layout.jsx      # Layout principal responsive
├── navigation/         # Navigation
│   └── MainNav.jsx     # Menu principal avec auth
├── utils/              # Utilitaires
│   ├── LocalDatas/     # Gestion données locales
│   ├── CryptoUtils.js  # Fonctions de cryptage
│   └── FuturamaTranslations.js # Traductions FR
├── assets/             # Ressources statiques
└── public/             # Fichiers publics et images
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

## 🔐 Sécurité

### Authentification

L'application utilise un système d'authentification sécurisé :

```javascript
// Hashage des mots de passe
const hashedPassword = hashPassword(userPassword);

// Cryptage des données en sessionStorage
secureSetItem("users", userData);

// Session sans données sensibles
const userSession = { email, id, loginTime };
```

### Protection des données

- **Mots de passe jamais stockés en clair**
- **Cryptage sessionStorage** avec clé secrète
- **Validation côté client** stricte
- **Session minimale** sans informations sensibles

## 🌍 Traduction

Le système de traduction française inclut :

- **280+ expressions** Futurama traduites
- **Genres, espèces, métiers** traduits
- **Architecture modulaire** facilement extensible
- **Fallback automatique** vers l'anglais

```javascript
// Exemple d'utilisation
const translatedSpecies = translateSpecies(character.species);
const translatedOccupation = translateOccupation(character.occupation);
```

## 📚 Apprentissages

Ce projet couvre les concepts avancés de React :

### 🔧 Développement React

- ✅ **Composants fonctionnels** avec hooks avancés
- ✅ **Context API** pour l'état global complexe
- ✅ **React Router 7** pour la navigation SPA
- ✅ **Custom hooks** pour la logique réutilisable
- ✅ **useNavigate** pour le routage programmatique

### 🔐 Sécurité & Authentification

- ✅ **Système d'auth complet** (inscription/connexion/déconnexion)
- ✅ **Hashage des mots de passe** avec fonctions personnalisées
- ✅ **Cryptage des données** sessionStorage
- ✅ **Validation de formulaires** robuste
- ✅ **Protection des routes** et gestion de session

### 🌐 Intégration API & Données

- ✅ **Fetch API** avec gestion d'erreurs complète
- ✅ **Système de traduction** modulaire
- ✅ **Cache local** et optimisation des performances
- ✅ **Transformation de données** API

### 🎨 UI/UX & Responsive

- ✅ **CSS moderne** avec variables et themes
- ✅ **Responsive design** mobile-first
- ✅ **Dark/Light mode** avec persistence
- ✅ **Architecture CSS** modulaire

### 🧪 Tests & Qualité

- ✅ **Tests unitaires** modernes avec Testing Library
- ✅ **Migration Jest** vers les dernières versions
- ✅ **Snapshots tests** pour les composants
- ✅ **Architecture modulaire** et maintenable

### 🚀 Déploiement & Configuration

- ✅ **Configuration Vercel** pour SPA
- ✅ **Gestion des routes** côté client
- ✅ **Optimisation build** et performance

## 🎨 Thèmes & Responsive

### Mode Sombre/Clair

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

### Design Responsive

- **Mobile-first** avec breakpoints optimisés
- **Navigation adaptative** selon la taille d'écran
- **Images responsives** avec optimisation mobile
- **Formulaires tactiles** avec tailles appropriées

## 🚀 Déploiement

### Configuration Vercel

Le projet inclut un fichier `vercel.json` pour le déploiement SPA :

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Cette configuration permet au routage React de fonctionner correctement en production.

## 📋 Guide des Tests

Un guide complet de migration des tests est disponible : [`guide-pour-corriger-tests.md`](./guide-pour-corriger-tests.md)

## 🤝 Contribution

Projet éducatif dans le cadre de la formation CDA.

## 📄 Licence

Projet pédagogique - Formation React Intermédiaire

---

**Développé avec ❤️ dans le cadre de la formation CDA**

_Application React complète avec authentification sécurisée, traduction française, et design responsive moderne._
