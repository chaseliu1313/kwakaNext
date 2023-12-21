import { transLabel, Translation } from "./translation.interface";

export const fr: Translation = {
  home: "Accueil",
  blog: "Blog",
  menu: "Menu",
  projects: "Projets",
  landing: "Des pixels avec un but précis et des produits avec un impact réel.",
  landingName: "Kwaka",
  landing2: "Votre partenaire en conception web/mobile.",
  contact: "Contact",
  about: "À propos",
  trans_label: transLabel.fr,
  dark_mode: "Sombre",
  light_mode: "Lumière",
  better: "Meilleure",
  buildExperience: ["expérience", "produits", "branding", "soutien technique"],
  makeWebsite: "Nous concevons et construisons des sites web",
  makeWebsite1: " centrés sur l'utilisateur,",
  makeWebsite2: " accessibles",
  makeWebsite3: " et réactifs",
  makeWebsite4: "",
  weloveMobile:
    "Nous avons aussi beaucoup d'amour pour la création d'applications mobiles.",
  backToTop: "Retour au sommet",
  howHelp: "Comment pouvons-nous vous aider?",
  contactUs: "Contactez-nous",
  name: "Nom",
  email: "E-mail",
  number: "Numéro",
  message: "Message",
  send: "Envoyer",
  ourClients: "Nos Clients",
  designForU: "Conçu pour vous",
  everyone: "Pas d'obstacle！",
  asGood: "Fonctionne aussi bien sur votre telephone portable :)",
  designBuild: "désign·créer",
  notFound: "Hmm, nous n'avons rien trouvé ici.",
  goBack: "Revenir",
  ourService: "Nos Services：",

  services: [
    "Conception et recherche UI/UX",
    "Développement de logiciels sur mesure",
    "Assurance qualité",
    "Optimisation pour les moteurs de recherche",
    "Modernisation des logiciels",
    "Intégration et maintenance de logiciels",
  ],
  servicesDetails: [
    "Create seamless and engaging user experiences that elevate your digital presence.",
    "Scalable, flexible, and adaptable solutions that streamline processes, enhance efficiency, and provide a competitive edge by addressing specific challenges unique to the organization. ",
    "By adhering to industry best practices and utilizing cutting-edge testing methodologies, our QA services play a pivotal role in delivering reliable, secure, and high-performance software products.",
  ],
  datav: ["Transformer ", "la complexité ", "en ", "succès"],
  datavDetails:
    "Nous proposons le développement d'outils de visualisation de données sur mesure. Optimisez votre concentration sur les solutions en automatisant le processus de reporting. Transformez vos données en graphiques et diagrammes dynamiques, exportables dans le format de votre choix.",
  a11y: {},
  mobile: ["Nous aidons les entreprises à devenir ", "mobiles."],
  mobileDetails:
    "Avoir une application mobile n'est pas simplement un avantage, elle maintient vos clients engagés avec une expérience utilisateur améliorée.",
  mobileExtra: "Renforcez votre vision, mobilisez votre potentiel.",
  crossP: ["La magie ", "du multiplateforme"],
  crossPDetails:
    "Atteignez à la fois les utilisateurs d'iOS et d'Android sans vous ruiner ! Notre développement multiplateforme garantit une expérience utilisateur cohérente et agréable sur tous les appareils.",
  tech: "Technologies",
  ourtechs: [],
  control: {
    back: "retourner",
    continue: "continuer",
    magic: "magie",
    backToTop: "retour au sommet",
    nowReading: "Lecture en cours",
    success: "Succès",
    error: "Erreur",
  },
  prompt: {
    messageError:
      "Pas de problème. Désolé, il y a eu une erreur lors de l'envoi du message.",
    messageSent: "Message reçu, nous vous contacterons bientôt !",
  },
  caseStudy: {
    background: "Contexte",
    challenge: "Défi",
    solution: "Solution",
    result: "Résultat",
  },
  trucklog: {
    title: "Étude de cas : Tableau de bord de gestion Truck-log",
    background: [
      "Notre client est une entreprise de construction qui propose une gamme étendue de services, notamment l'excavation de sites, le transport de matériaux et la gestion. Afin de se conformer aux normes réglementaires et d'améliorer l'efficacité opérationnelle, le client a cherché à développer un tableau de bord basé sur le web. Ce système vise à enregistrer méticuleusement et gérer leurs opérations quotidiennes, offrant ainsi une solution rationalisée pour répondre aux exigences réglementaires.",
    ],
    challenge: [
      {
        title: "Urgent.",
        content:
          "L'application doit être opérationnelle dans quelques mois pour répondre à la demande réglementaire.",
      },
      {
        title: "Complexité des exigences.",
        content:
          "La nature complexe des services de notre client et la diversité des matériaux qu'ils suivent représentent un défi considérable pour la précision de l'évaluation initiale. De plus, la nature dynamique de leurs opérations quotidiennes exige une adaptabilité aux changements dans les exigences.",
      },
      {
        title: "Synchronisation avec l'application client.",
        content:
          "Le portail administratif est conçu non seulement pour assurer la synchronisation opportune de toutes les données, mais aussi pour faciliter la communication rapide avec les utilisateurs finaux. Cela garantit que les activités opérationnelles menées sur le portail administratif sont rapidement communiquées et reflétées dans les applications mobiles du client, favorisant ainsi un système cohérent et réactif.",
      },
    ],
    solution: [
      {
        title: "Tableau de bord :",
        content:
          "Permettre aux utilisateurs de visualiser l'avancement actuel des travaux, de créer un nouveau travail ou de mettre à jour les détails d'un travail existant.",
      },
      {
        title: "Gestion des actifs :",
        content:
          "Utilisateur et gestion de toutes les informations concernant leurs actifs : camions, chauffeurs, sites de travail et chargements de camions. L'utilisateur peut ajouter des types personnalisés, des notes ou des exigences spéciales à tous les actifs.",
      },
      {
        title: "Visualisation des données :",
        content:
          "L'application propose une variété de graphiques et de diagrammes. Les tableaux sont interactifs et faciles à filtrer et à trier.",
      },
      {
        title: "Gestion des rôles utilisateur :",
        content:
          "L'application gère cinq types d'utilisateurs différents, chacun ayant des permissions et un accès distinctifs.",
      },
      {
        title: "Exportation de données :",
        content:
          "Toutes les tables peuvent être exportées vers des fichiers CSV ou des fichiers PDF, permettant ainsi aux utilisateurs de tirer parti de cette fonctionnalité pour des rapports ultérieurs.",
      },
      {
        title: "Moniteur d'activité :",
        content:
          "Pour les utilisateurs ayant un accès approprié, l'application peut aider à surveiller toutes les activités des utilisateurs et à effectuer des actions de gestion des utilisateurs (créer, désactiver, mettre à jour) lorsque nécessaire.",
      },
    ],
    result: [
      "L'équipe de Kwaka Tech a réussi à livrer avec succès une application basée sur React, intégrant des composants d'interface utilisateur sur mesure et réutilisables dans un délai serré. Pour accélérer le processus de développement, l'application tire parti de fonctions cloud pour les algorithmes, le traitement côté serveur et la gestion des autorisations utilisateur. Des solutions NoSQL robustes sont utilisées pour le stockage et la gestion des données.",
      "De manière notable, l'application a parfaitement répondu à toutes les exigences initialement spécifiées et a intégré de manière transparente toutes les modifications survenues au cours du processus de développement. Cette solution complète donne à notre client une perspective globale sur leurs opérations quotidiennes, aboutissant à une amélioration substantielle de l'efficacité globale.",
    ],
  },
  compass: {
    title: "Étude de cas : Outil d'enquête intégré Compass",
    background: [
      "Notre client se spécialise dans la fourniture de services d'enquêtes sur l'engagement des employés, traitant des volumes élevés de données d'enquêtes minutieusement personnalisées qui nécessitent un traitement, une analyse et une visualisation efficaces. En raison de la nature unique de cette application, il existe une demande substantielle de traitement côté client, ce qui représente un défi significatif dans la mise en œuvre d'une interface utilisateur répondant aux exigences exigeantes des utilisateurs.",
    ],
    challenge: [
      {
        title: "Structure frontend sophistiquée.",
        content:
          "Le frontend de l'application se compose de deux parties majeures, dont l'une a été importée d'un autre projet React. Le défi résidait dans le maintien de la cohérence de l'expérience utilisateur et de la gestion d'état tout en intégrant deux applications côté client importantes. Naviguer dans cette complexité nécessitait une manipulation habile de la présentation de l'expérience utilisateur, des structures de données et du développement de l'API afin d'assurer une intégration harmonieuse et cohésive des composants disparates.",
      },
      {
        title: "Graphiques et diagrammes complexes.",
        content:
          "Pour maximiser l'avantage clé de l'application, une gamme complète de graphiques et de diagrammes englobant pratiquement tous les types possibles a été intégrée.",
      },
      {
        title:
          "Exigence de haute performance pour le chargement de grands ensembles de données.",
        content:
          "En plus d'exiger une variété diversifiée de graphiques et de diagrammes, l'application nécessite également une attention méticuleuse à la performance en raison du traitement de grands ensembles de données au cours de leur mise en œuvre.",
      },
      {
        title: "Complexité des exigences.",
        content:
          "Les enquêtes au sein de cette application sont hautement personnalisables et peuvent impliquer une complexité considérable. De plus, les utilisateurs finaux issus de diverses industries ajoutent une couche supplémentaire de complexité. Par conséquent, la conception de l'application doit trouver un équilibre, en étant suffisamment générique pour répondre à divers besoins tout en restant intrinsèquement extensible pour traiter des exigences spécifiques.",
      },
      {
        title: "Exportation intelligente des données.",
        content:
          "L'application donne aux utilisateurs finaux la capacité d'exporter des données dans différents formats, y compris CSV, DOCX, PDF, et même des diapositives PowerPoint, garantissant une préparation sans accroc pour les présentations.",
      },
    ],
    solution: [],
    result: [
      "La mise en œuvre réussie de l'application présentait une grille de données sophistiquée, intégrant des éléments tels que des cartes thermiques, des diagrammes, des graphiques et des vues de listes imbriquées. La transition de l'application héritée vers un composant moderne a offert aux utilisateurs des capacités améliorées, permettant non seulement la visualisation, mais également l'exécution d'actions pour une gestion efficace des données. Notamment, l'application affiche d'excellentes performances, gérant sans effort l'importation et l'exportation de volumes importants de données.",
    ],
  },
  camh: {
    title:
      "Étude de cas : Outil en ligne de CAMH pour la dépression chez les jeunes",
    background: [
      "Dans le paysage complexe des soins de santé mentale, notre client, une organisation de santé mentale financée publiquement, a fait face au redoutable défi de développer une application Web adaptée aux médecins et aux travailleurs sociaux. Cette entreprise ambitieuse visait à rationaliser la tâche complexe du suivi des parcours de traitement, offrant un soutien crucial dans le diagnostic et la gestion de la dépression chez les jeunes. Notamment, l'application avait pour objectif d'être un phare de conception inclusive et d'accessibilité.",
      "Undertaking this challenging mission, the Kwaka team engaged closely with a diverse multi-disciplinary team of specialists and doctors. The collaborative effort was marked by the relentless pursuit of high quality and pinpoint accuracy, navigating the intricate intersections of technology and mental health to deliver a robust tool for healthcare professionals dedicated to the well-being of youth.",
    ],
    challenge: [
      {
        title: "Conception inclusive.",
        content:
          "C'est un défi de créer des produits accessibles et utilisables par un éventail diversifié d'individus, y compris ceux ayant des capacités, des incapacités et des besoins différents.",
      },
      {
        title: "La gestion d'une équipe multidisciplinaire.",
        content:
          "Assurer une coordination sans faille entre les membres de l'équipe ayant des expertises différentes peut être difficile, mais c'est essentiel pour un produit final cohérent.",
      },
      {
        title: "Précision méticuleuse.",
        content:
          "L'exactitude du contenu est d'une importance capitale. Un système de test bien établi était nécessaire.",
      },
    ],
    solution: [],
    result: [
      "Kwaka Tech a réussi à concevoir et mettre en œuvre avec succès un outil Web basé sur React dans le délai prévu. Le projet a efficacement intégré les contributions de plus de 20 psychologues et concepteurs pédagogiques. Déployé sur le serveur d'entreprise du client, cet outil en ligne est largement utilisé par les médecins et les travailleurs sociaux dans plusieurs provinces du Canada. Depuis son lancement initial en 2020, l'équipe de Kwaka Tech entretient et soutient diligemment l'outil, facilitant les mises à jour de contenu et les changements de conception. Notamment, une version mobile optimisée a été introduite en 2022, améliorant l'accessibilité et l'expérience utilisateur.",
    ],
  },
  cr: {
    logo: "Tous les logos et marques déposées sont la propriété de leurs propriétaires respectifs.",
    disclaim: "Droits d'auteur © 2023. Kwaka Tech Inc.",
    caseStudy:
      "Toutes les images, logos et marques déposées dans cette étude de cas sont la propriété de leurs propriétaires respectifs.",
  },
};
