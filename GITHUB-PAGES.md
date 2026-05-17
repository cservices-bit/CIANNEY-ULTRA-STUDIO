# Guide — Publication sur GitHub Pages

## Prérequis

- Un compte GitHub (gratuit sur github.com)
- Le dossier du projet C-Service Studio téléchargé

---

## Étape 1 — Créer un repository GitHub

1. Aller sur **github.com** et se connecter
2. Cliquer sur le bouton **"New"** (ou le "+" en haut à droite)
3. Nommer le repository : `c-service-studio`
4. Choisir **"Public"** (obligatoire pour GitHub Pages gratuit)
5. Cliquer **"Create repository"**

---

## Étape 2 — Uploader les fichiers

### Méthode simple (sans Git)

1. Dans votre nouveau repository, cliquer **"uploading an existing file"**
2. Glisser-déposer TOUS les fichiers du dossier ZIP :
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - Les dossiers `assets/`, `images/`, `videos/`
3. Écrire un message de commit : `"Lancement site C-Service Business"`
4. Cliquer **"Commit changes"**

### Méthode Git (recommandée)

```bash
# Ouvrir le terminal dans le dossier du projet
git init
git add .
git commit -m "Lancement site C-Service Business Ultra Studio"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/c-service-studio.git
git push -u origin main
```

---

## Étape 3 — Activer GitHub Pages

1. Dans votre repository, aller dans **Settings** (onglet en haut)
2. Dans le menu gauche, cliquer **"Pages"**
3. Dans **"Source"**, sélectionner :
   - Branch : **main**
   - Folder : **/ (root)**
4. Cliquer **"Save"**

---

## Étape 4 — Votre site est en ligne !

Après 1 à 3 minutes, votre site sera accessible à :

```
https://VOTRE_USERNAME.github.io/c-service-studio/
```

---

## Étape 5 — Domaine personnalisé (optionnel)

Si vous avez un domaine (ex: cservice.cd) :

1. Dans Settings > Pages > "Custom domain"
2. Entrer votre domaine : `cservice.cd`
3. Cliquer "Save"
4. Chez votre hébergeur DNS, ajouter :
   ```
   CNAME  www   VOTRE_USERNAME.github.io
   A      @     185.199.108.153
   A      @     185.199.109.153
   A      @     185.199.110.153
   A      @     185.199.111.153
   ```

---

## Mettre à jour le site

Pour modifier le site après publication :

1. Modifier les fichiers (`index.html`, `style.css`, `script.js`)
2. Les uploader à nouveau sur GitHub (ou faire `git push`)
3. GitHub Pages se met à jour automatiquement en 1-2 minutes

---

## Problèmes fréquents

| Problème | Solution |
|---|---|
| Page blanche | Vérifier que `index.html` est à la racine |
| CSS non chargé | Vérifier le chemin dans `<link href="style.css">` |
| JS non exécuté | Vérifier `<script src="script.js">` |
| Site pas mis à jour | Vider le cache du navigateur (Ctrl+Shift+R) |

---

© 2025 C-Service Business — Ultra Studio
