# AUDIT – NewsHub

| # | Où (dans App.tsx) | Principe WCAG (POUR) | Pourquoi c'est bloquant |
|---|---|---|---|
| 1 | `<img src="/hero.jpg" />` sans attribut `alt` | Perceptible | Un lecteur d'écran ne peut pas décrire l'image : l'information est invisible pour une personne aveugle. |
| 2 | Le `h1` est suivi directement d'un `h3` (pas de `h2`) | Robuste | La hiérarchie de titres sert à naviguer rapidement dans la page avec une technologie d'assistance ; un saut de niveau casse cette navigation. |
| 3 | `<div className="see-more" onClick>` au lieu d'un `<button>` | Utilisable | Inatteignable au clavier (pas de `tabIndex`, pas de gestion d'Entrée/Espace) et annoncé comme du texte brut, pas comme un contrôle. |
| 4 | Bandeau newsletter `.carousel` sans moyen de le fermer ou de le mettre en pause | Utilisable | WCAG 2.2.2 : un contenu en mouvement ou qui apparaît doit pouvoir être mis en pause, arrêté ou masqué par l'utilisateur. |
| 5 | Trois liens avec le même texte « cliquez ici » | Compréhensible | Le texte d'un lien doit avoir un sens hors contexte : un lecteur d'écran qui liste les liens de la page n'indique pas où ils mènent. |
| 6 | Statut « annulé » / « publié » porté uniquement par la couleur du point (`dot-red` / `dot-green`) | Perceptible | L'information ne doit pas reposer uniquement sur la couleur : un daltonien ou un écran noir et blanc ne voit pas la différence. |