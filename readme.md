# Déscription

* Le module comprend trois dossiers (css, js et data), un fichier index.html et moi même ;)
* Le module fonctionne sur un serveur local aussi bien que sur un hébergement distant
* il suffit juste de changer le fichier json pour parcourir plus de données
* le fichier json se trouve sous le dossier 'data' et doit avoir le nom 'datas.json'
* si vous voulez changer le nom du fichier json, allez sous js/main.js et changer le nom du fichier à la ligne 6
* lancez le module et tappez la requete que vous voulez
* vous pouvez récuperer les données suivants un ou plusieurs filtres comme le montre les exemples ci dessous
* les noms des paramètres dans la requete sont les entrées dans le fichier json

## Exemple de requêtes

* récuperer les utilisateurs dont la couleur des yeux est verte
http://127.0.0.1:5500/index.html?eyeColor=green

* même requête que la précedente avec l'age est compris entre 25 et 40
http://127.0.0.1:5500/index.html?eyeColor=green&age=25-40

* même requête que la précedente avec le fruit préféré est la fraise
http://127.0.0.1:5500/index.html?eyeColor=green&age=25-40&favoriteFruit=strawberry

* même requête que la précedente avec le status actif est égal à 'true'
http://127.0.0.1:5500/index.html?eyeColor=green&age=25-40&favoriteFruit=strawberry&isActive=1

* récuperer l'utilisateur dont l'email est : 'alissa.ferrell@pearlesex.biz'
http://127.0.0.1:5500/index.html?email=alissa.ferrell@pearlesex.biz

etc...
