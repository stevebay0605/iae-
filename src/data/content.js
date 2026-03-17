/**
 * Données statiques du site IAE
 * Institut Africain de l'Excellence
 */

// Filières de formation
export const filieres = [
  {
    id: 1,
    nom: "Informatique & Digital",
    topic: "TECHNOLOGIE",
    accroche: "Maîtrisez les technologies de demain",
    description: "Formation complète en développement web, mobile, cybersécurité et intelligence artificielle. Préparez-vous aux métiers les plus demandés du numérique.",
    specs: [
      "Développement Web & Mobile",
      "Cybersécurité & Réseaux",
      "Intelligence Artificielle & Data",
      "Cloud Computing & DevOps",
      "Durée: 3 ans (Licence)",
      "Stage en entreprise dès la 2ème année"
    ],
    imageKeyword: "technology",
    couleur: "#1a6b3c"
  },
  {
    id: 2,
    nom: "Gestion & Management",
    topic: "BUSINESS",
    accroche: "Devenez un leader d'entreprise",
    description: "Acquérez les compétences essentielles en management, stratégie d'entreprise et gestion de projets. Formez-vous aux défis du monde des affaires moderne.",
    specs: [
      "Management & Leadership",
      "Stratégie d'Entreprise",
      "Gestion de Projets",
      "Ressources Humaines",
      "Durée: 3 ans (Licence)",
      "Certifications internationales"
    ],
    imageKeyword: "business",
    couleur: "#c9a82c"
  },
  {
    id: 3,
    nom: "Sciences Juridiques",
    topic: "DROIT",
    accroche: "Exercez la justice avec excellence",
    description: "Formation rigoureuse en droit congolais et international. Préparez votre carrière d'avocat, magistrat ou conseiller juridique avec les meilleurs professeurs.",
    specs: [
      "Droit Constitutionnel & Public",
      "Droit des Affaires",
      "Droit International",
      "Contentieux & Arbitrage",
      "Durée: 4 ans (Licence)",
      "Moot courts & simulations"
    ],
    imageKeyword: "law",
    couleur: "#0f4425"
  },
  {
    id: 4,
    nom: "Comptabilité & Finance",
    topic: "FINANCE",
    accroche: "Maîtrisez les chiffres de l'entreprise",
    description: "Devenez expert en comptabilité, audit et gestion financière. Formation alignée sur les standards internationaux (IFRS, SYSCOHADA).",
    specs: [
      "Comptabilité Générale & Analytique",
      "Audit & Contrôle de Gestion",
      "Finance d'Entreprise",
      "Fiscalité & Droit des Affaires",
      "Durée: 3 ans (Licence)",
      "Préparation aux certifications"
    ],
    imageKeyword: "finance",
    couleur: "#1a6b3c"
  },
  {
    id: 5,
    nom: "Commerce International",
    topic: "COMMERCE",
    accroche: "Ouvrez-vous aux marchés du monde",
    description: "Formation spécialisée en commerce extérieur, logistique internationale et négociation commerciale. Devenez un acteur clé de l'économie globale.",
    specs: [
      "Commerce Extérieur & Douanes",
      "Logistique & Transport",
      "Négociation Commerciale",
      "Marketing International",
      "Durée: 3 ans (Licence)",
      "Partenariats internationaux"
    ],
    imageKeyword: "trade",
    couleur: "#c9a82c"
  },
  {
    id: 6,
    nom: "Santé Publique",
    topic: "SANTÉ",
    accroche: "Engagez-vous pour la santé des communautés",
    description: "Formation en santé publique, épidémiologie et gestion des systèmes de santé. Contribuez à l'amélioration des politiques de santé en Afrique.",
    specs: [
      "Épidémiologie & Biostatistiques",
      "Gestion des Systèmes de Santé",
      "Promotion de la Santé",
      "Santé Environnementale",
      "Durée: 3 ans (Licence)",
      "Stages en ONG et ministères"
    ],
    imageKeyword: "health",
    couleur: "#0f4425"
  }
];

// Actualités
export const actualites = [
  {
    id: 1,
    date: "15 Mars 2025",
    titre: "L'IAE signe un partenariat avec l'Université de Paris-Saclay",
    extrait: "Un accord de coopération scientifique et académique vient d'être signé, permettant aux étudiants de l'IAE de bénéficier d'échanges et de doubles diplômes.",
    categorie: "Partenariat"
  },
  {
    id: 2,
    date: "10 Mars 2025",
    titre: "Journée portes ouvertes 2025 : une réussite",
    extrait: "Plus de 500 visiteurs ont franchi les portes de l'IAE lors de notre journée portes ouvertes annuelle. Découvrez les moments forts de cet événement.",
    categorie: "Événement"
  },
  {
    id: 3,
    date: "5 Mars 2025",
    titre: "Nouveau laboratoire d'intelligence artificielle inauguré",
    extrait: "L'IAE inaugure son tout nouveau laboratoire dédié à l'IA et au machine learning, équipé des dernières technologies NVIDIA.",
    categorie: "Innovation"
  },
  {
    id: 4,
    date: "28 Février 2025",
    titre: "Cérémonie de remise des diplômes promotion 2024",
    extrait: "La promotion 2024 a reçu ses diplômes en présence du Ministre de l'Enseignement Supérieur. Retour en images sur cette cérémonie mémorable.",
    categorie: "Cérémonie"
  },
  {
    id: 5,
    date: "20 Février 2025",
    titre: "Bourses d'excellence 2025-2026 : candidatures ouvertes",
    extrait: "L'IAE met en place 50 bourses d'excellence pour les meilleurs candidats. Postulez avant le 30 avril 2025 pour bénéficier d'une bourse complète.",
    categorie: "Bourse"
  },
  {
    id: 6,
    date: "15 Février 2025",
    titre: "Conférence : L'avenir de l'éducation en Afrique",
    extrait: "Le Professeur Amadou Diallo donnera une conférence exceptionnelle sur les défis et opportunités de l'éducation supérieure africaine.",
    categorie: "Conférence"
  }
];

// Coordonnées de l'institution
export const coordonnees = {
  adresse: "Avenue de l'Indépendance, BP 1234",
  ville: "Brazzaville",
  pays: "République du Congo",
  telephone: "+242 05 123 4567",
  email: "contact@iae-congo.cg",
  horaires: {
    semaine: "Lundi - Vendredi : 8h00 - 17h00",
    samedi: "Samedi : 9h00 - 12h00",
    dimanche: "Dimanche : Fermé"
  },
  reseaux: {
    facebook: "https://facebook.com/iaecongo",
    twitter: "https://twitter.com/iaecongo",
    linkedin: "https://linkedin.com/school/iaecongo",
    instagram: "https://instagram.com/iaecongo"
  }
};

// Étapes de préinscription
export const etapes_preinscription = [
  {
    numero: 1,
    label: "Remplissez le formulaire en ligne",
    description: "Complétez vos informations personnelles et académiques"
  },
  {
    numero: 2,
    label: "Téléchargez vos documents",
    description: "Acte de naissance, attestation du bac et photo d'identité"
  },
  {
    numero: 3,
    label: "Validez votre candidature",
    description: "Vérifiez vos informations et soumettez votre dossier"
  },
  {
    numero: 4,
    label: "Recevez votre convocation",
    description: "Notre équipe vous contactera pour la suite du processus"
  }
];

// Statistiques
export const statistiques = [
  {
    valeur: 500,
    suffixe: "+",
    label: "Étudiants"
  },
  {
    valeur: 15,
    suffixe: "+",
    label: "Filières"
  },
  {
    valeur: 95,
    suffixe: "%",
    label: "Taux d'insertion"
  },
  {
    valeur: 30,
    suffixe: "+",
    label: "Enseignants"
  }
];

// Navigation links
export const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/a-propos", label: "À propos" },
  { path: "/filieres", label: "Filières" },
  { path: "/actualites", label: "Actualités" },
  { path: "/contact", label: "Contact" }
];

// Footer links
export const footerLinks = {
  navigation: [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À propos" },
    { path: "/filieres", label: "Nos filières" },
    { path: "/actualites", label: "Actualités" },
    { path: "/contact", label: "Contact" }
  ],
  candidats: [
    { path: "/preinscription", label: "Se préinscrire" },
    { path: "/filieres", label: "Découvrir les filières" },
    { path: "#", label: "Brochure 2025" },
    { path: "#", label: "Frais de scolarité" },
    { path: "#", label: "Bourses d'excellence" }
  ]
};

// Valeurs de l'institution
export const valeurs = [
  {
    titre: "Rigueur",
    description: "Excellence académique et discipline intellectuelle",
    icon: "Target"
  },
  {
    titre: "Travail",
    description: "Effort constant et détermination dans l'apprentissage",
    icon: "Briefcase"
  },
  {
    titre: "Excellence",
    description: "Recherche permanente du meilleur de soi-même",
    icon: "Award"
  }
];

// Historique
export const historique = [
  {
    annee: "2015",
    titre: "Création de l'IAE",
    description: "Fondation de l'Institut Africain de l'Excellence à Brazzaville avec 3 filières et 50 étudiants."
  },
  {
    annee: "2018",
    titre: "Expansion des programmes",
    description: "Ouverture de 5 nouvelles filières et inauguration du campus moderne."
  },
  {
    annee: "2021",
    titre: "Reconnaissance internationale",
    description: "Premiers partenariats avec des universités européennes et obtention de l'accréditation."
  },
  {
    annee: "2024",
    titre: "500 diplômés",
    description: "Célébration de notre 500ème diplômé et lancement du programme de bourses d'excellence."
  }
];
