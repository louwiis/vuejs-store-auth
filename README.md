# Auth

## Lancer le projet
  
  Pour lancer le projet tu devras premièrement installer les node_modules (première ligne), plus lancer le framework
  ```bash
  npm install
  npm run dev
  ```

## Store

Le but du store est de stocker les données de l'utilisateur et de les rendre disponible partout dans l'application.

## Comment ça marche / l'utiliser

Tu utilises le store depuis le composant représentant la navigation. Dans un cas normal, lors de la validation de ton login, tu appelles une fonction (call vers ton api) et tu récupère ton token. Celui ci sera ajouté dans le localstorage et dans le store pour que le token puisse être disponible partout dans l'application. Tu peux donc utiliser (après avoir reçu la réponse de l'api) authStore.login(token) pour ajouter le token dans le store (et par la même occassion dans le localStorage, tu peux aller voir dans le store pourquoi).

Le store se reset au chargement de la page. C'est pour ça que le but est de ne pas recharger la page et tout faire dynamiquement. Par defaut authStore.token (une variable) est égale à la variable token du localStorage. Si il y a une variable dans le localstorage (donc si tu es connecté), alors tu peux utiliser authStore.token pour récupérer le token.

## PS 

Essaye de t'habituer à cette structure, le store c'est un des meilleurs trucs et tu prendras énormément d'avance avec si tu t'y habitues vite.

Salut :)