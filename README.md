# Changement de projet.. 

Nous avons changé de projet en cours de route et nous sommes partis sur un jeu de plateforme. Ce sont des aliens à la conquête d'une planète. Arrivés sur place, ils s'affrontent pour savoir à qui va appartenir la terre nouvelle. Ils vont devoir récolter le plus de zone Jaune et de grosses étoiles en évitant les obstacles mallus et en profitant des étoiles bonus. Tout cela dans une certaine limite de temps. 
Sur le menu, on a inséré un bref contexte avant de débuter le jeu, puis on a indiqué les flèches correspondant aux déplacements des joueurs.
La réalisation de la plateforme a été conçu avec des murs permanents et des collisions pour délimiter le périmètre de l'interface du jeu pour les utilisateurs. Aussi, il y a des murets qui disparaissent dès qu'on détecte une collision entre les joueurs et ces murets. Les personnages se déplacent grâce aux quatre touches assignées automatiquement à chaque joueur respectif. Le score est géré grâce à un compteur de collision entre les joueurs et les étoiles. Ces dernières peuvent représenter des mallus, ou des bonus. Voici les propriétés des étoiles en fonction de leur couleur : 
- violet : téléportation 
- clignotante : change de propriété en fonction de la couleur touchée à l'instant présent, on peut donc dire que la répercussion sur le joueur est aléatoire 
- gris : grossit la taille du joueur 
- jaune : rajoute des points
- rouge : fait perdre des points
- rose : réduit la vitesse du personnage
- noir : rétrécit la taille du joueur 
De plus, à chaque collision avec les étoiles, il y a un son qui retentit pour chaque type d'étoile. Et en fonction de la propriété de l'étoile, le score est mis à jour. 


## **A coder :**
- Load des images (Manque de temps avec les partiels de la semaine..)
- Ajouts d'autres options possibles et ajustements de quelques détails (Manque de temps avec les partiels de la semaine..)


## **Fait:**

- Timer
-Murs/Collisions
-Murets qui disparaissent suite à une collision
-Mouvement de la balle personnage
-Design prêt à utilisation 
- Gestion du score
-Les collisions avec le canvas ont été corrigé 
-La fluidité des mouvements du personnages a été corrigé
-Etoile bonus/malus(piques qui lorsqu'ils sont touchés par les personnages, ce dernier change de localisation, perds/gagne des points)
- Perfectionner le Menu
- Mise en place du son
- Menu explicatif des touches
- Hebergement sur le site d'un ami qui a bien voulu nous aider -> http://www.samuelcavaco.fr/JEU/jeu.html

La version du code à consulter :
La version "Jeu" est la plus avancée

Auteurs : Nabil Inès / Mosbah Yasmin / Marias Maxime .
