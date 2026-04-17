/* ============================================================
   ONG VAPES — i18n v2 : traduction intégrale FR/EN par text-walking
   Traduit automatiquement TOUS les textes visibles du site
   ============================================================ */
(function () {
  'use strict';

  /* =========================================================
     DICTIONNAIRE FR → EN (exhaustif, + de 350 entrées)
     Clé = texte français normalisé ; valeur = traduction EN
  ========================================================= */
  const DICT = {
    /* --- Navigation --- */
    "Accueil": "Home",
    "Qui sommes-nous": "About us",
    "Programmes": "Programs",
    "Impact": "Impact",
    "Gouvernance": "Governance",
    "Transparence": "Transparency",
    "Contact": "Contact",
    "Nous rejoindre": "Join us",
    "❤ Faire un don": "❤ Donate",
    "Faire un don": "Donate",
    "Faire un don maintenant": "Donate now",
    "Nous contacter": "Contact us",
    "Menu": "Menu",
    "Aller au contenu": "Skip to content",
    "Défiler": "Scroll",

    /* --- Brand / tagline --- */
    "ONG VAPES": "VAPES NGO",
    "Perception · Réalité · Réussite": "Perception · Reality · Success",
    "Perception — Réalité — Réussite": "Perception — Reality — Success",

    /* --- Hero --- */
    "ONG guinéenne · Depuis 2019": "Guinean NGO · Since 2019",
    "Agir aujourd'hui pour préserver": "Act today to preserve",
    "l'environnement de demain": "tomorrow's environment",
    "L'ONG VAPES mobilise les communautés de Guinée pour protéger les écosystèmes, éduquer la jeunesse et promouvoir l'égalité des genres. Rejoignez un mouvement qui transforme déjà cinq régions du pays.":
      "VAPES NGO mobilizes Guinean communities to protect ecosystems, educate youth, and promote gender equality. Join a movement already transforming five regions of the country.",
    "Découvrir notre action": "Discover our work",
    "Action de terrain VAPES": "VAPES field action",

    /* --- Impact strip --- */
    "Antennes régionales": "Regional branches",
    "Programmes actifs": "Active programs",
    "Membres fondateurs": "Founding members",
    "Année de création": "Founded in",

    /* --- Mission --- */
    "Notre mission": "Our mission",
    "Défendre les écosystèmes et émanciper les communautés.": "Defending ecosystems and empowering communities.",
    "Née en 2019 d'une volonté citoyenne, VAPES est une ONG apolitique, à but non lucratif, qui place les femmes, les jeunes et les communautés rurales au cœur de son action.":
      "Born in 2019 from citizen will, VAPES is a non-political, non-profit NGO that puts women, youth, and rural communities at the heart of its action.",
    "Nous renforçons la sensibilisation des communautés locales et agissons concrètement pour la protection de l'environnement, la préservation de la biodiversité, le développement durable et l'amélioration des conditions de vie des populations.":
      "We strengthen awareness among local communities and act concretely for environmental protection, biodiversity preservation, sustainable development, and improved living conditions.",
    "Lire notre histoire": "Read our story",
    "Équipe VAPES sur le terrain": "VAPES team in the field",
    "Équipe VAPES en mission": "VAPES team on mission",

    /* --- Programs --- */
    "Six chantiers prioritaires": "Six priority areas",
    "Nos programmes d'action": "Our action programs",
    "Nos programmes": "Our programs",
    "Nos actions clés": "Our key actions",
    "Nos actions": "Our actions",
    "Nos domaines d'intervention": "Our areas of intervention",
    "Chaque programme répond à un défi identifié avec les communautés. Des actions concrètes, mesurables, ancrées dans la réalité guinéenne.":
      "Each program addresses a challenge identified with communities. Concrete, measurable actions rooted in Guinean reality.",
    "Chaque programme articule action de terrain, sensibilisation et formation pour maximiser l'impact durable sur les communautés.":
      "Each program combines field action, awareness, and training to maximize lasting impact on communities.",
    "Reboisement & forêts": "Reforestation & forests",
    "Reboisement et lutte contre la déforestation": "Reforestation and fight against deforestation",
    "Reboisement & lutte contre la déforestation": "Reforestation & fight against deforestation",
    "Reboisement & restauration": "Reforestation & restoration",
    "Plantation d'arbres, restauration des écosystèmes forestiers et lutte contre la déforestation.":
      "Tree planting, restoration of forest ecosystems, and fight against deforestation.",
    "Changement climatique": "Climate change",
    "Sensibilisation, adaptation des communautés et plaidoyer pour une transition bas-carbone.":
      "Awareness, community adaptation, and advocacy for a low-carbon transition.",
    "Érosion côtière": "Coastal erosion",
    "Lutte contre l'érosion côtière": "Fight against coastal erosion",
    "Protection du littoral guinéen, plantations de mangroves et éducation des populations.":
      "Protection of the Guinean coastline, mangrove planting, and public education.",
    "Gestion des déchets": "Waste management",
    "Gestion et valorisation des déchets": "Waste management and recovery",
    "Collectes communautaires, tri, recyclage et campagnes de propreté urbaine.":
      "Community collections, sorting, recycling, and urban cleanliness campaigns.",
    "Collecte, tri, valorisation et propreté urbaine.": "Collection, sorting, recovery, and urban cleanliness.",
    "Éducation & formation": "Education & training",
    "Éducation environnementale & formation": "Environmental education & training",
    "Éducation environnementale et formation": "Environmental education and training",
    "Ateliers scolaires, formations en gouvernance environnementale, leadership des jeunes.":
      "School workshops, environmental governance training, youth leadership.",
    "Formation, ateliers et leadership transformationnel.": "Training, workshops, and transformational leadership.",
    "Genre, femmes & jeunes": "Gender, women & youth",
    "Promotion du genre, femmes & jeunes": "Gender promotion, women & youth",
    "Promotion du genre, des femmes et des jeunes": "Gender, women, and youth promotion",
    "Autonomisation économique des femmes, éducation des filles, jeunes éco-ambassadeurs.":
      "Women's economic empowerment, girls' education, young eco-ambassadors.",
    "Autonomisation des femmes et des jeunes.": "Empowerment of women and youth.",
    "Explorer tous nos programmes": "Explore all our programs",
    "Nos 6 domaines": "Our 6 areas",
    "En savoir plus": "Learn more",

    /* --- Story Faranah --- */
    "Récit — Faranah, février 2024": "Story — Faranah, February 2024",
    "Quand une communauté décide de planter son avenir.": "When a community decides to plant its future.",
    "En février 2024, notre antenne de Faranah a conduit une campagne de reboisement inédite. Pendant deux semaines, femmes, jeunes et leaders communautaires se sont mobilisés pour restaurer des parcelles dégradées, former de nouveaux animateurs et poser les bases d'une gouvernance environnementale locale.":
      "In February 2024, our Faranah branch led an unprecedented reforestation campaign. For two weeks, women, youth, and community leaders mobilized to restore degraded plots, train new facilitators, and lay the foundations for local environmental governance.",
    "Chez VAPES, notre mission repose sur trois piliers essentiels : la Protection de l'Environnement, l'Éducation et la Promotion du Genre. Nous sommes déterminés à créer un avenir durable et inclusif pour les générations futures.":
      "At VAPES, our mission rests on three essential pillars: Environmental Protection, Education, and Gender Promotion. We are determined to build a sustainable and inclusive future for coming generations.",
    "— Aly Leno, Coordinateur National": "— Aly Leno, National Coordinator",
    "Voir toutes nos actions": "See all our actions",

    /* --- Map --- */
    "Présence nationale": "National presence",
    "Cinq antennes, un siège, une Guinée.": "Five branches, one headquarters, one Guinea.",
    "Ancrée à Coyah, VAPES rayonne dans les quatre régions naturelles du pays.":
      "Rooted in Coyah, VAPES operates across all four natural regions of the country.",
    "Coyah — Siège": "Coyah — Headquarters",
    "Sanoyah, Km 36 · Région de Kindia": "Sanoyah, Km 36 · Kindia Region",
    "Conakry": "Conakry",
    "Capitale · Basse-Guinée": "Capital · Lower Guinea",
    "Labé": "Labé",
    "Fouta-Djalon · Moyenne-Guinée": "Fouta-Djallon · Middle Guinea",
    "Faranah": "Faranah",
    "Haute-Guinée · zone prioritaire": "Upper Guinea · priority zone",
    "Kankan": "Kankan",
    "Haute-Guinée · plus grande ville": "Upper Guinea · largest city",
    "N'Zérékoré": "N'Zérékoré",
    "Guinée forestière": "Forested Guinea",
    "Carte de la Guinée": "Map of Guinea",

    /* --- Timeline --- */
    "Notre parcours": "Our journey",
    "Sept ans d'engagement pour la Guinée.": "Seven years of commitment to Guinea.",
    "Naissance de VAPES": "Birth of VAPES",
    "Le 7 mars, 17 membres fondateurs adoptent les statuts à Coyah. Obtention de l'agrément officiel.":
      "On March 7, 17 founding members adopt the statutes in Coyah. Official recognition obtained.",
    "Structuration nationale": "National structuring",
    "Élection du premier Conseil d'Administration et mise en place des cinq antennes régionales.":
      "Election of the first Board of Directors and setup of the five regional branches.",
    "Premières campagnes": "First campaigns",
    "Lancement des programmes de sensibilisation environnementale et des premières formations.":
      "Launch of environmental awareness programs and the first training sessions.",
    "Campagne Faranah": "Faranah campaign",
    "Grande campagne de reboisement à Faranah : sensibilisation et formation des leaders locaux.":
      "Major reforestation campaign in Faranah: awareness and training of local leaders.",
    "Dépliant & visibilité": "Brochure & visibility",
    "Publication du dépliant institutionnel et renforcement de la communication digitale.":
      "Publication of the institutional brochure and reinforcement of digital communication.",
    "Site web officiel": "Official website",
    "Lancement de vapes.org et ouverture de la plateforme de dons en ligne.":
      "Launch of vapes.org and opening of the online donation platform.",

    /* --- Donation section --- */
    "Votre engagement change tout": "Your commitment changes everything",
    "Chaque don devient une action sur le terrain.": "Every donation becomes action on the ground.",
    "Parce que VAPES est une organisation à but non lucratif, 100 % de votre soutien finance nos programmes.":
      "Because VAPES is a non-profit organization, 100% of your support funds our programs.",
    "Parce que VAPES est une organisation à but non lucratif, 100 % de votre soutien finance nos programmes : plants d'arbres, formations, campagnes, forages, sensibilisation.":
      "Because VAPES is a non-profit organization, 100% of your support funds our programs: tree saplings, training, campaigns, wells, awareness.",
    "Votre don, votre impact": "Your donation, your impact",
    "Choisissez votre don": "Choose your donation",
    "Don unique": "One-time donation",
    "Unique": "One-time",
    "Mensuel": "Monthly",
    "Montant libre": "Custom amount",
    "GNF": "GNF",
    "Continuer": "Continue",
    "Continuer — Paiement": "Continue — Payment",
    "Continuer — Sécurisé": "Continue — Secure",
    "🔒 Sécurisé": "🔒 Secure",
    "1 forage d'eau potable pour une communauté de 200 personnes": "1 drinking water well for a community of 200 people",
    "1 forage d'eau potable pour 200 personnes": "1 drinking water well for 200 people",
    "1 journée de sensibilisation dans une école villageoise": "1 awareness day in a village school",
    "20 plants d'arbres plantés et entretenus pendant un an": "20 tree saplings planted and maintained for one year",
    "1 campagne complète de reboisement sur 1 hectare": "1 full reforestation campaign on 1 hectare",
    "Transparence totale": "Full transparency",
    "Double signature": "Dual signature",
    "Audit externe annuel": "Annual external audit",
    "Consulter notre page transparence": "See our transparency page",
    "Consulter notre transparence": "See our transparency page",

    /* --- Quote banner --- */
    "Nous plaçons les communautés, les femmes et les jeunes au cœur de nos interventions pour répondre aux défis environnementaux et sociaux de la République de Guinée.":
      "We put communities, women, and youth at the heart of our interventions to address the environmental and social challenges of the Republic of Guinea.",
    "— Extrait du dépliant institutionnel VAPES": "— From the VAPES institutional brochure",

    /* --- Partners --- */
    "Avec le soutien de nos partenaires": "With the support of our partners",
    "Ils nous accompagnent": "They support us",
    "Institutions publiques, associations partenaires et mécènes individuels.":
      "Public institutions, partner associations, and individual donors.",
    "Ministère de l'Environnement": "Ministry of Environment",
    "Préfecture de Coyah": "Coyah Prefecture",
    "Leaders communautaires": "Community leaders",
    "Comité de gestion": "Management committee",
    "Partenaires à venir": "Upcoming partners",
    "Devenir partenaire": "Become a partner",

    /* --- CTA banner --- */
    "Rejoignez le mouvement": "Join the movement",
    "Trois minutes pour soutenir la Guinée de demain.": "Three minutes to support tomorrow's Guinea.",
    "Faire un don, devenir bénévole, adhérer comme membre ou proposer un partenariat.":
      "Donate, volunteer, become a member, or propose a partnership.",
    "Toutes les façons de nous soutenir": "All ways to support us",

    /* --- Footer --- */
    "Découvrir": "Discover",
    "Agir": "Take action",
    "Newsletter": "Newsletter",
    "Actualités trimestrielles, récits de terrain et appels à bénévoles.":
      "Quarterly news, field stories, and calls for volunteers.",
    "© 2026 ONG VAPES · Tous droits réservés": "© 2026 VAPES NGO · All rights reserved",
    "Statuts": "Statutes",
    "Mentions légales": "Legal notice",
    "Confidentialité": "Privacy",
    "Notre impact": "Our impact",
    "Devenir bénévole": "Become a volunteer",
    "Partenariat": "Partnership",
    "Adhérer à VAPES": "Join VAPES",
    "Logo VAPES": "VAPES logo",
    "Logo ONG VAPES": "VAPES NGO logo",
    "Sanoyah Km 36, Coyah": "Sanoyah Km 36, Coyah",

    /* --- About page --- */
    "Une ONG guinéenne engagée pour un environnement sain et des communautés résilientes depuis 2019.":
      "A Guinean NGO committed to a healthy environment and resilient communities since 2019.",
    "Notre identité": "Our identity",
    "Née d'une volonté citoyenne, ancrée dans la Guinée.": "Born from citizen will, rooted in Guinea.",
    "L'ONG est née le": "The NGO was born on",
    "7 mars 2019": "March 7, 2019",
    "Depuis sa création, VAPES s'est structurée autour d'un Conseil d'Administration de 7 membres et a déployé des antennes dans les cinq grandes régions du pays :":
      "Since its creation, VAPES has been structured around a 7-member Board and has deployed branches in the country's five major regions:",
    "Conakry, Labé, Faranah, Kankan et N'Zérékoré": "Conakry, Labé, Faranah, Kankan, and N'Zérékoré",
    "Ce qui nous guide": "What guides us",
    "Mission, vision, valeurs": "Mission, vision, values",
    "Mission": "Mission",
    "Renforcer la sensibilisation des communautés locales et agir concrètement pour la protection de l'environnement, la préservation de la biodiversité, le développement durable et l'amélioration des conditions de vie des populations.":
      "Strengthen awareness among local communities and act concretely to protect the environment, preserve biodiversity, promote sustainable development, and improve living conditions.",
    "Vision": "Vision",
    "Une Guinée où les communautés, les femmes et les jeunes sont pleinement acteurs de la protection de leur environnement, et où chaque région naturelle bénéficie d'une gouvernance écologique locale, forte et inclusive.":
      "A Guinea where communities, women, and youth are fully engaged in protecting their environment, and where each natural region benefits from strong, inclusive local ecological governance.",
    "Valeurs": "Values",
    "Apolitisme, non-lucrativité, non-discrimination d'ethnie, de sexe et de religion. Transparence, redevabilité, participation communautaire et primauté de l'intérêt général sur les intérêts individuels.":
      "Non-political, non-profit, non-discrimination by ethnicity, gender, or religion. Transparency, accountability, community participation, and primacy of the general interest over individual interests.",
    "Assemblée constitutive": "Constitutive assembly",
    "7 mars 2019 — Dix-sept membres fondateurs adoptent les statuts à Coyah. Perception, Réalité, Réussite devient notre devise.":
      "March 7, 2019 — Seventeen founding members adopt the statutes in Coyah. Perception, Reality, Success becomes our motto.",
    "AG extraordinaire": "Extraordinary General Meeting",
    "18 août 2019 — Élection du bureau, confirmation d'Aly Leno comme Président et Coordinateur National, ouverture du compte bancaire.":
      "August 18, 2019 — Election of the board, confirmation of Aly Leno as President and National Coordinator, opening of the bank account.",
    "Déploiement territorial": "Territorial deployment",
    "Ouverture progressive des cinq antennes régionales à Conakry, Labé, Faranah, Kankan et N'Zérékoré.":
      "Progressive opening of the five regional branches in Conakry, Labé, Faranah, Kankan, and N'Zérékoré.",
    "Premiers partenariats": "First partnerships",
    "Rencontres avec les autorités administratives de Kindia et Faranah pour consolider les partenariats institutionnels.":
      "Meetings with the administrative authorities of Kindia and Faranah to consolidate institutional partnerships.",
    "Février — Deux semaines de reboisement, sensibilisation et formation dans la région de Faranah et en Basse-Guinée.":
      "February — Two weeks of reforestation, awareness, and training in the Faranah region and Lower Guinea.",
    "Communication institutionnelle": "Institutional communication",
    "Publication du dépliant officiel et lancement de la présence digitale sur Facebook.":
      "Publication of the official brochure and launch of digital presence on Facebook.",
    "Lancement de vapes.org, activation de la plateforme de dons et ouverture à de nouveaux partenaires internationaux.":
      "Launch of vapes.org, activation of the donation platform, and opening to new international partners.",
    "Comment nous travaillons": "How we work",
    "Une approche intégrée.": "An integrated approach.",
    "Trois leviers complémentaires structurent notre action sur le terrain.": "Three complementary levers structure our field action.",
    "1. Action de terrain": "1. Field action",
    "Interventions concrètes dans les communautés : plantations d'arbres, assainissement, construction d'infrastructures socio-éducatives, forages d'eau potable.":
      "Concrete interventions in communities: tree planting, sanitation, construction of socio-educational infrastructure, drinking water wells.",
    "2. Sensibilisation": "2. Awareness",
    "Campagnes de communication, plaidoyer institutionnel et éducation des populations aux enjeux environnementaux et au changement climatique.":
      "Communication campaigns, institutional advocacy, and public education on environmental issues and climate change.",
    "3. Formation": "3. Training",
    "Renforcement des capacités des jeunes leaders, animateurs communautaires, femmes entrepreneures et élus locaux en gouvernance environnementale.":
      "Capacity building for young leaders, community facilitators, female entrepreneurs, and local elected officials in environmental governance.",
    "Rejoignez-nous": "Join us",
    "Ensemble, transformons la réalité.": "Together, let's transform reality.",

    /* --- Programmes detail --- */
    "Vue d'ensemble": "Overview",
    "Six chantiers, une vision commune.": "Six projects, one shared vision.",
    "1 · Reboisement": "1 · Reforestation",
    "2 · Climat": "2 · Climate",
    "3 · Érosion côtière": "3 · Coastal erosion",
    "4 · Déchets": "4 · Waste",
    "5 · Éducation": "5 · Education",
    "6 · Genre & jeunes": "6 · Gender & youth",
    "Plantation, restauration et lutte contre la déforestation.": "Planting, restoration, and fight against deforestation.",
    "Sensibilisation, adaptation et plaidoyer climatique.": "Awareness, adaptation, and climate advocacy.",
    "Protection du littoral et mangroves.": "Coastline and mangrove protection.",
