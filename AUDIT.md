# AUDIT – Quête 5 : contrastes

## Résultats des outils

| Outil | Résultat | Problèmes détectés |
|---|---|---|
| Lighthouse | Score : ... / 100 | Contraste insuffisant sur ... éléments |
| axe DevTools | ... violations (niveau : serious) | Contraste insuffisant |
| WAVE | ... erreurs de contraste | Texte gris clair, bouton bleu clair |

## Les 4 éléments repérés

| Élément | Problème | Correction |
|---|---|---|
| `.subtitle` | Gris clair sur fond blanc, ratio sous 4.5:1 | `color: #5c5c5c` |
| `.label` | Gris clair sur fond blanc, ratio sous 4.5:1 | `color: #595959` |
| `.hint` | Gris clair sur fond blanc, ratio sous 4.5:1 | `color: #595959` |
| `.btn-primary` | Texte blanc sur bleu trop clair, ratio sous 4.5:1 | `background: #1a5fa8` |

## Vérification

Après correction, Lighthouse, axe et WAVE ne signalent plus d'erreur de contraste.