# KayLive — Site Vitrine PPV

Site marketing et pages légales pour l'application KayLive (Live Streaming Pay-Per-View).

---

## 📁 Structure du projet

```
kaylive_pro/
├── index.html                    ← Landing page principale
├── netlify.toml                  ← Config déploiement Netlify
├── .htaccess                     ← Config Apache / Hostinger
│
├── assets/
│   ├── css/
│   │   ├── tokens.css            ← Design tokens (couleurs, spacing...)
│   │   └── main.css              ← Styles globaux + composants
│   ├── js/
│   │   ├── main.js               ← Nav, animations, FAQ, formulaires
│   │   └── components.js         ← Tailwind config partagée
│   └── icons/
│       ├── favicon.svg           ← Favicon SVG animé
│       └── logo.svg              ← Logo vectoriel
│
├── pages/
│   ├── support.html              ← Centre d'aide + FAQ
│   ├── privacy/
│   │   ├── collecte.html         ← Collecte des données
│   │   ├── utilisation.html      ← Utilisation des infos
│   │   ├── partage.html          ← Partage avec des tiers
│   │   ├── vos-droits.html       ← Vos droits RGPD/CCPA
│   │   ├── securite.html         ← Sécurité
│   │   └── conditions.html       ← Conditions d'utilisation
│   ├── legal/
│   │   └── mentions.html         ← Mentions légales
│   └── blog/
│       ├── streaming.html        ← Article : Le streaming PPV
│       ├── mon-compte.html       ← Article : Gérer son compte
│       ├── paiements.html        ← Article : Les paiements
│       └── securite.html         ← Article : Sécurité
```

---

## 🚀 Déploiement

### Option A — Netlify (recommandé, gratuit)
1. Allez sur [netlify.com](https://netlify.com) → Sign up
2. Glissez-déposez le dossier `kaylive_pro/` sur la page d'accueil
3. ✅ Site en ligne en 30 secondes sur une URL `.netlify.app`
4. Dans **Domain settings** → ajoutez votre domaine custom

### Option B — Hostinger
1. Connectez-vous → **hPanel** → **File Manager**
2. Naviguez dans `public_html/`
3. Uploadez le ZIP → **Extract** → sélectionnez `public_html/`
4. ✅ Site accessible via votre domaine

### Option C — GitHub Pages
```bash
git init
git add .
git commit -m "Initial KayLive site"
git remote add origin https://github.com/VOUS/kaylive-site
git push -u origin main
# Activer Pages dans Settings → Pages → Branch: main
```

---

## ✏️ Personnalisation avant mise en ligne

### `pages/legal/mentions.html`
Remplacer les champs `[à compléter]` :
- Adresse du siège social
- Numéro SIRET
- Numéro RCS
- Numéro TVA
- Nom du dirigeant

### Tous les fichiers — Liens App Store / Play Store
Chercher `href="#"` sur les boutons **App Store** et **Google Play** et remplacer par les vrais liens.

### Emails
- `contact@kaylive.com` → votre email
- `privacy@kaylive.com` → votre DPO
- `support@kaylive.com` → votre support

---

## 🎨 Design System

| Token | Valeur |
|-------|--------|
| Background | `#0A0A0B` |
| Surface | `#131314` |
| Primary | `#ddb7ff` |
| Primary btn | `#A855F7 → #D8B4FE` |
| Font display | Sora |
| Font body | Inter |

Modifiez `assets/css/tokens.css` pour ajuster les couleurs globalement.

---

## 📞 Stack technique

- **HTML5 + CSS3** pur (zéro framework côté build)
- **Tailwind CSS** via CDN (design tokens Stitch)
- **JavaScript** vanilla (aucune dépendance)
- **Google Fonts** : Sora + Inter
- **Material Symbols** : icônes Google
- Compatible tous navigateurs modernes + Safari iOS

---

© 2025 KayLive SAS
