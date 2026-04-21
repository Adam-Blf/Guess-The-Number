[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adambeloucif/) ![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=Adam-Blf.Guess-The-Number)


![Dernier commit](https://img.shields.io/github/last-commit/Adam-Blf/Guess-The-Number?style=flat&logo=git&logoColor=white&color=0080ff&label=Dernier%20commit) ![Langage principal](https://img.shields.io/github/languages/top/Adam-Blf/Guess-The-Number?style=flat&logo=git&logoColor=white&color=0080ff&label=Langage%20principal) ![Nombre de langages](https://img.shields.io/github/languages/count/Adam-Blf/Guess-The-Number?style=flat&logo=git&logoColor=white&color=0080ff&label=Nombre%20de%20langages)

## 📝 Description
Interactive number guessing game with hints, attempt tracking, victory modal, and best score persistence. Test your intuition!

## ⚡ Fonctionnalités
- Smart hint system with penalties
- Attempt counter and history
- Victory modal with performance rating
- Best score persistence
- Range indicator
- Responsive UI
- ---


### Construit avec les outils et technologies : 

![CSS](https://img.shields.io/badge/-CSS-0080ff?style=flat) ![JavaScript](https://img.shields.io/badge/-JavaScript-0080ff?style=flat) ![HTML](https://img.shields.io/badge/-HTML-0080ff?style=flat)

🇫🇷 Français | 🇬🇧 Anglais | 🇪🇸 Espagnol | 🇮🇹 Italien | 🇵🇹 Portugais | 🇷🇺 Russe | 🇩🇪 Allemand | 🇹🇷 Turc

# 🎲 Guess The Number

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![GH Pages](https://img.shields.io/badge/play-GH_Pages-222?logo=github&logoColor=white)

> Jeu interactif "Devine le Nombre" - Devinez un nombre entre 1 et 100 avec des indices !

[🎮 Jouer Maintenant](https://adam-blf.github.io/Guess-The-Number/) | [📖 Documentation](#fonctionnalités)

---

## 📝 Description

**Guess The Number** est un jeu classique développé en JavaScript vanilla pour apprendre les fondamentaux du développement web :

- 🎯 Le jeu génère un nombre aléatoire entre 1 et 100
- 💬 Le joueur reçoit des indices ("plus grand" ou "plus petit")
- 📊 Système de scoring et historique des tentatives
- 🏆 Sauvegarde du meilleur score (LocalStorage)
- 💡 Système d'indices avec pénalité

## ⚡ Fonctionnalités

### 🎮 Gameplay
- ✅ Génération nombre aléatoire 1-100
- ✅ Validation des entrées utilisateur
- ✅ Indices directionnels (plus haut/plus bas)
- ✅ Compteur d'essais en temps réel
- ✅ Plage dynamique (affichage min-max)
- ✅ Historique des 10 dernières tentatives
- ✅ Système de notation (génie, excellent, bien, moyen)

### 💎 Fonctionnalités Avancées
- ✅ **Indice payant** : révèle une plage de ±10 (coûte 2 essais)
- ✅ **Meilleur score** : persistant via LocalStorage
- ✅ **Modal de victoire** : affiche stats complètes (temps, essais, nombre)
- ✅ **Raccourcis clavier** : N (nouvelle partie), H (indice), Enter (deviner)
- ✅ **Animations CSS** : transitions fluides, pulse, fade
- ✅ **Design responsive** : mobile-first, adaptatif

## 🛠️ Technologies

| Tech | Usage |
|------|-------|
| **HTML5** | Structure sémantique |
| **CSS3** | Animations, Grid, Flexbox |
| **JavaScript ES6+** | Logique de jeu, DOM manipulation |
| **LocalStorage** | Persistance meilleur score |

## 🚀 Installation

### Méthode 1 : Cloner et Ouvrir

```bash
# Cloner le repository
git clone https://github.com/Adam-Blf/Guess-The-Number.git
cd Guess-The-Number

# Ouvrir index.html dans le navigateur
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Méthode 2 : Live Server (VSCode)

```bash
# Installer Live Server extension
# Clic droit sur index.html > Open with Live Server
```

### Méthode 3 : GitHub Pages

Visitez directement : [https://adam-blf.github.io/Guess-The-Number/](https://adam-blf.github.io/Guess-The-Number/)

## 🎮 Comment Jouer

1. **Démarrage** : Le jeu génère un nombre secret entre 1 et 100
2. **Deviner** : Entrez un nombre et cliquez sur "Deviner" (ou Enter)
3. **Indices** : Recevez un feedback instantané :
   - 📈 "C'est plus grand !" → Nombre trop bas
   - 📉 "C'est plus petit !" → Nombre trop haut
4. **Victoire** : Trouvez le nombre pour voir vos statistiques !

### 💡 Astuces Pro

- **Stratégie Dichotomique** : Commencez par 50, puis divisez l'intervalle
- **Observez la plage** : La zone min-max se réduit à chaque essai
- **Indice intelligent** : Utilisez-le stratégiquement (coûte 2 essais)
- **Visez <7 essais** : C'est le seuil "Excellent" !

## 📂 Structure du Projet

```
Guess-The-Number/
├── index.html          # Structure HTML5
├── style.css           # Styles CSS3 + animations
├── script.js           # Logique JavaScript
├── README.md           # Documentation
├── LICENSE             # MIT License
└── .gitignore          # Fichiers ignorés
```

## 🎨 Captures d'Écran

### Interface Principale
![Gameplay](https://via.placeholder.com/800x500/667eea/ffffff?text=Guess+The+Number+Gameplay)

### Modal de Victoire
![Victory](https://via.placeholder.com/600x400/10b981/ffffff?text=Victory+Modal)

## 🧠 Concepts Appris

### JavaScript
- ✅ **Manipulation DOM** : querySelector, addEventListener, classList
- ✅ **Événements** : click, keypress, input
- ✅ **Conditions** : if/else, ternaires, switch
- ✅ **Fonctions** : déclarations, expressions, callbacks
- ✅ **Objets** : littéraux, propriétés, méthodes
- ✅ **Tableaux** : push, slice, forEach
- ✅ **LocalStorage** : setItem, getItem
- ✅ **Math** : Math.random(), Math.floor()
- ✅ **Date** : Date.now(), calculs temporels

### CSS
- ✅ **Flexbox & Grid** : layouts modernes
- ✅ **Animations** : @keyframes, transitions
- ✅ **Variables CSS** : :root, var()
- ✅ **Media Queries** : responsive design
- ✅ **Pseudo-classes** : :hover, :focus, :active

### Bonnes Pratiques
- ✅ Code modulaire (fonctions séparées)
- ✅ Noms de variables descriptifs
- ✅ Commentaires structurés
- ✅ Validation des entrées
- ✅ Gestion des erreurs
- ✅ Accessibilité (focus, labels)

## 🎯 Défis Supplémentaires

Envie d'améliorer le jeu ? Essayez ces challenges :

- [ ] **Niveaux de difficulté** : Facile (1-50), Moyen (1-100), Difficile (1-1000)
- [ ] **Mode multijoueur** : 2 joueurs à tour de rôle
- [ ] **Chronomètre** : Limite de temps par essai
- [ ] **Achievements** : Badges débloquables (1er essai, <5 essais, etc.)
- [ ] **Thèmes** : Mode sombre/clair, couleurs personnalisables
- [ ] **Sons** : Effets sonores victoire/échec
- [ ] **Graphiques** : Chart.js pour historique des scores
- [ ] **Backend** : Sauvegarde scores en ligne (Node.js + MongoDB)

## 📊 Statistiques

- **Lignes de code** : ~600 (HTML + CSS + JS)
- **Fonctions JS** : 12
- **Animations CSS** : 6
- **Support navigateurs** : Chrome, Firefox, Safari, Edge (dernières versions)

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Adam Beloucif**
- GitHub: [@Adam-Blf](https://github.com/Adam-Blf)
- Portfolio: [Coming Soon]

## 🌟 Remerciements

- Design inspiré par les tendances modernes de game UI
- Palette de couleurs : Tailwind CSS
- Icônes : Emojis Unicode

---

<div align="center">

**⭐ Star ce projet si tu l'aimes ! ⭐**

Made with ❤️ and JavaScript

</div>

---

<p align="center">
  <sub>Par <a href="https://adam.beloucif.com">Adam Beloucif</a> · Data Engineer & Fullstack Developer · <a href="https://github.com/Adam-Blf">GitHub</a> · <a href="https://www.linkedin.com/in/adambeloucif/">LinkedIn</a></sub>
</p>
