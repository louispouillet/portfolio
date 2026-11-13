import type { IconType } from "react-icons";
import { FaGamepad, FaRocket, FaUserSecret, FaXRay } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdLockPerson, MdNewspaper, MdQrCode2, MdReceiptLong, MdVideoLibrary } from "react-icons/md";
import { TbCherryFilled } from "react-icons/tb";
import type { LocalizableText, Localized } from "../i18n/types";

export type ProjectAccent = "pink" | "teal";

export type ProjectTier = "featured" | "secondary";

export type ProjectContext = {
  organization: string;
  year: number;
  role: Localized;
};

export type ProjectMedia = {
  mp4: string;
  webm: string;
  poster: string;
  alt: Localized;
};

export type ArchitectureStep = {
  name: string;
  detail: Localized;
};

export type CaseStudy = {
  context: Localized;
  work: Localized;
  architecture: ArchitectureStep[];
  choices: Localized[];
  outcome: Localized;
};

export type Project = {
  id: string;
  title: LocalizableText;
  icon: IconType;
  accent: ProjectAccent;
  tier: ProjectTier;
  context: ProjectContext;
  category: Localized;
  description: Localized;
  stack: string[];
  repositoryUrl?: string;
  media?: ProjectMedia;
  caseStudy?: CaseStudy;
};

const SIGTERM_INTERNSHIP_ROLE: Localized = { en: "Cloud developer (internship)", fr: "Développeur cloud (stage)" };
const TEAM_OF_TWO_ROLE: Localized = { en: "Team of 2", fr: "Équipe de 2" };
const TEAM_OF_FOUR_ROLE: Localized = { en: "Team of 4", fr: "Équipe de 4" };
const SOLO_ROLE: Localized = { en: "Solo project", fr: "Projet solo" };

export const PROJECTS: Project[] = [
  {
    id: "yopay",
    title: "Yopay",
    icon: MdQrCode2,
    accent: "pink",
    tier: "featured",
    context: { organization: "Yopay", year: 2026, role: { en: "Backend and cloud developer", fr: "Développeur backend et cloud" } },
    category: {
      en: "QR ORDERING · AWS SERVERLESS · POINT OF SALE",
      fr: "COMMANDE PAR QR CODE · AWS SERVERLESS · CAISSE",
    },
    description: {
      en: "Restaurant ordering by **QR code**: customers order from their table, staff follow orders live, and the menu stays in sync with the restaurant's **point of sale**. Built with Lilian Davezac.",
      fr: "Commande au restaurant par **QR code** : le client commande depuis sa table, l'équipe suit les commandes en direct et le menu reste synchronisé avec la **caisse** du restaurant. Réalisé avec Lilian Davezac.",
    },
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge", "Cognito", "Terraform", "AWS SAM", "Python", "React", "TypeScript", "GitHub Actions"],
    caseStudy: {
      context: {
        en: "Each table of the restaurant gets a QR code that opens the ordering app. Restaurants already keep their menu in their **point of sale** (Zelty), so the app had to reuse that data instead of asking the staff to type the menu twice.",
        fr: "Chaque table du restaurant a un QR code qui ouvre l'application de commande. Les restaurants gèrent déjà leur menu dans leur **logiciel de caisse** (Zelty) : l'application devait réutiliser ces données plutôt que demander à l'équipe de saisir le menu une seconde fois.",
      },
      work: {
        en: "With Lilian Davezac, I built the **serverless backend** and the infrastructure: restaurants, catalog, table sessions, orders and staff accounts, plus the **Zelty integration**. Connecting a restaurant registers **signed webhooks** on Zelty, and every later menu change reaches the app through an asynchronous synchronization.",
        fr: "Avec Lilian Davezac, j'ai construit le **backend serverless** et l'infrastructure : restaurants, catalogue, sessions de table, commandes et comptes du personnel, ainsi que l'**intégration Zelty**. Connecter un restaurant enregistre des **webhooks signés** chez Zelty, puis chaque changement de menu arrive dans l'application par une synchronisation asynchrone.",
      },
      architecture: [
        { name: "Zelty", detail: { en: "Menu and restaurant updates", fr: "Mises à jour du menu et du restaurant" } },
        { name: "API Gateway", detail: { en: "HMAC signed webhooks", fr: "Webhooks signés HMAC" } },
        { name: "EventBridge", detail: { en: "Asynchronous catalog sync", fr: "Synchronisation asynchrone du catalogue" } },
        { name: "Lambda", detail: { en: "One function per domain", fr: "Une fonction par domaine" } },
        { name: "DynamoDB", detail: { en: "Single table, one partition per restaurant", fr: "Table unique, une partition par restaurant" } },
      ],
      choices: [
        {
          en: "**Hexagonal architecture**: each external system (Zelty, Cognito) sits behind a port, so supporting another point of sale means writing a new adapter, not rewriting the app.",
          fr: "**Architecture hexagonale** : chaque système externe (Zelty, Cognito) est derrière un port. Ajouter une autre caisse revient à écrire un nouvel adaptateur, sans réécrire l'application.",
        },
        {
          en: "**DynamoDB single table design** with the restaurant as partition key, so every query stays inside one restaurant.",
          fr: "**Table DynamoDB unique** avec le restaurant comme clé de partition : chaque requête reste dans un seul restaurant.",
        },
        {
          en: "**Webhook security**: HMAC SHA-256 verified on the raw body, with a secret generated on our side, because Zelty masks it in every response.",
          fr: "**Sécurité des webhooks** : signature HMAC SHA-256 vérifiée sur le corps brut, avec un secret généré de notre côté, car Zelty le masque dans toutes ses réponses.",
        },
        {
          en: "**Infrastructure as code**: SAM for the application, Terraform for Cognito, the custom API domain and the CI roles, each in its own state.",
          fr: "**Infrastructure as code** : SAM pour l'application, Terraform pour Cognito, le domaine de l'API et les rôles de CI, chacun avec son propre état.",
        },
        {
          en: "**CI/CD with GitHub Actions and OIDC**: no long lived AWS key, automatic deployment to the sandbox, manual trigger for production.",
          fr: "**CI/CD avec GitHub Actions et OIDC** : aucune clé AWS permanente, déploiement automatique sur l'environnement de test, déclenchement manuel pour la production.",
        },
      ],
      outcome: {
        en: "A backend running on AWS, connected to a real Zelty sandbox account, with a React frontend deployed on **AWS Amplify** and CloudWatch alarms that notify the team through SNS.",
        fr: "Un backend qui tourne sur AWS, connecté à un vrai compte de test Zelty, avec un frontend React déployé sur **AWS Amplify** et des alarmes CloudWatch qui préviennent l'équipe via SNS.",
      },
    },
  },
  {
    id: "moggo",
    title: "Moggo",
    icon: MdVideoLibrary,
    accent: "teal",
    tier: "featured",
    context: { organization: "Sigterm · Moggo", year: 2026, role: SIGTERM_INTERNSHIP_ROLE },
    category: {
      en: "AI PIPELINE · VIDEO · AWS STEP FUNCTIONS",
      fr: "PIPELINE IA · VIDÉO · AWS STEP FUNCTIONS",
    },
    description: {
      en: "Automatic **tagging of influencer videos** for Moggo: each video dropped on S3 is transcribed, analyzed by **Claude on Amazon Bedrock**, and its tags are sent to Moggo's API, with no manual step.",
      fr: "**Tags automatiques de vidéos d'influenceurs** pour Moggo : chaque vidéo déposée sur S3 est transcrite, analysée par **Claude sur Amazon Bedrock**, puis ses tags sont envoyés à l'API de Moggo, sans aucune étape manuelle.",
    },
    stack: ["AWS Step Functions", "AWS Lambda", "Amazon Bedrock", "Amazon Transcribe", "S3", "DynamoDB", "Python", "AWS SAM"],
    caseStudy: {
      context: {
        en: "Moggo works with influencer videos and needs to know what each one talks about to make use of it. Tagging them by hand does not scale with the volume.",
        fr: "Moggo travaille avec des vidéos d'influenceurs et doit savoir de quoi parle chacune pour l'exploiter. Les taguer à la main ne suit pas le volume.",
      },
      work: {
        en: "During my internship at Sigterm, I built the whole pipeline: an **AWS Step Functions** state machine that chains one Lambda per step, from the upload of the video to the call to Moggo's API.",
        fr: "Pendant mon stage chez Sigterm, j'ai construit tout le pipeline : une machine à états **AWS Step Functions** qui enchaîne une Lambda par étape, du dépôt de la vidéo jusqu'à l'appel à l'API de Moggo.",
      },
      architecture: [
        { name: "S3", detail: { en: "Video upload", fr: "Dépôt de la vidéo" } },
        { name: "Step Functions", detail: { en: "Orchestrates every step", fr: "Orchestre chaque étape" } },
        { name: "Transcribe", detail: { en: "Speech to text", fr: "Transcription de la parole" } },
        { name: "Bedrock · Claude", detail: { en: "Extracts the tags", fr: "Extrait les tags" } },
        { name: "Moggo API", detail: { en: "Receives the tags", fr: "Reçoit les tags" } },
      ],
      choices: [
        {
          en: "**Waiting without polling**: transcription is asynchronous, so the state machine pauses on a **task token** stored in DynamoDB and resumes when Transcribe finishes.",
          fr: "**Attendre sans interroger en boucle** : la transcription est asynchrone, la machine à états se met donc en pause sur un **task token** stocké dans DynamoDB et reprend quand Transcribe a fini.",
        },
        {
          en: "**One Lambda per step**, each one a member of a uv workspace, so every function ships only the dependencies it needs.",
          fr: "**Une Lambda par étape**, chacune membre d'un workspace uv : chaque fonction n'embarque que les dépendances dont elle a besoin.",
        },
        {
          en: "**Ports and adapters**: a shared package holds the interfaces and their AWS implementations, reused by every Lambda and replaced by fakes in tests.",
          fr: "**Ports et adaptateurs** : un paquet partagé contient les interfaces et leurs implémentations AWS, réutilisées par chaque Lambda et remplacées par des doublures dans les tests.",
        },
      ],
      outcome: {
        en: "Videos go from upload to tags in Moggo's API without any human step, in a typed and tested Python codebase deployed with **AWS SAM**.",
        fr: "Les vidéos passent du dépôt aux tags dans l'API de Moggo sans intervention humaine, avec un code Python typé et testé, déployé avec **AWS SAM**.",
      },
    },
  },
  {
    id: "reimbursement",
    title: { en: "Expense reimbursement", fr: "Remboursement de frais" },
    icon: MdReceiptLong,
    accent: "pink",
    tier: "featured",
    context: { organization: "Sigterm", year: 2026, role: SIGTERM_INTERNSHIP_ROLE },
    category: {
      en: "INTERNAL TOOL · AI OCR · GOOGLE WORKSPACE",
      fr: "OUTIL INTERNE · OCR PAR IA · GOOGLE WORKSPACE",
    },
    description: {
      en: "Internal app to **claim expenses**: employees sign in with Google and upload their receipts, **Amazon Bedrock reads the amounts**, and the app produces a **PDF summary** and the reimbursement email.",
      fr: "Application interne de **notes de frais** : l'employé se connecte avec Google et envoie ses justificatifs, **Amazon Bedrock lit les montants**, et l'application produit un **récapitulatif PDF** et l'e-mail de remboursement.",
    },
    stack: ["React", "TypeScript", "Python", "AWS Lambda", "API Gateway", "DynamoDB", "Amazon Bedrock", "Google Drive API", "Gmail API", "AWS SAM"],
    caseStudy: {
      context: {
        en: "At Sigterm, claiming expenses meant gathering receipts, adding up amounts by hand and writing an email with a summary. Slow, and easy to get wrong.",
        fr: "Chez Sigterm, se faire rembourser voulait dire rassembler les justificatifs, additionner les montants à la main et écrire un e-mail récapitulatif. Long, et source d'erreurs.",
      },
      work: {
        en: "I built the app end to end during my internship: a React frontend and a serverless Python backend. Receipts are stored in the employee's own **Google Drive**, amounts are extracted by **Bedrock**, and the PDF summary is generated and sent through **Gmail**.",
        fr: "J'ai construit l'application de bout en bout pendant mon stage : un frontend React et un backend Python serverless. Les justificatifs sont stockés dans le **Google Drive** de l'employé, les montants sont extraits par **Bedrock**, et le récapitulatif PDF est généré puis envoyé via **Gmail**.",
      },
      architecture: [
        { name: "React", detail: { en: "Requests and receipts", fr: "Demandes et justificatifs" } },
        { name: "API Gateway · Lambda", detail: { en: "Google sign in, one function per domain", fr: "Connexion Google, une fonction par domaine" } },
        { name: "Bedrock", detail: { en: "Reads the amounts", fr: "Lit les montants" } },
        { name: "DynamoDB", detail: { en: "Requests and receipts", fr: "Demandes et justificatifs" } },
        { name: "Drive · Gmail", detail: { en: "Storage and PDF email", fr: "Stockage et e-mail avec PDF" } },
      ],
      choices: [
        {
          en: "**Google OAuth** for sign in, and receipts kept in the user's own **Drive**: no file storage to secure on our side.",
          fr: "**Google OAuth** pour la connexion, et justificatifs gardés dans le **Drive** de l'utilisateur : aucun stockage de fichiers à sécuriser de notre côté.",
        },
        {
          en: "**DynamoDB single table** with separate key prefixes for requests and receipts, so each page of results is always full.",
          fr: "**Table DynamoDB unique** avec des préfixes de clé distincts pour les demandes et les justificatifs : chaque page de résultats est toujours complète.",
        },
        {
          en: "**Cursor pagination** and **accent insensitive search**, both done with a Query on the user's partition, never a full table scan.",
          fr: "**Pagination par curseur** et **recherche insensible aux accents**, toutes deux faites par une requête sur la partition de l'utilisateur, jamais par un parcours complet de la table.",
        },
        {
          en: "PDF generated with **ReportLab** in a dedicated Lambda.",
          fr: "PDF généré avec **ReportLab** dans une Lambda dédiée.",
        },
      ],
      outcome: {
        en: "A complete internal tool, from sign in to the email ready to send, that removes the manual typing of amounts. Deployed with **AWS SAM** and covered by tests.",
        fr: "Un outil interne complet, de la connexion à l'e-mail prêt à partir, qui supprime la saisie manuelle des montants. Déployé avec **AWS SAM** et couvert par des tests.",
      },
    },
  },
  {
    id: "kayzen-sso",
    title: "Kayzen SSO",
    icon: MdLockPerson,
    accent: "teal",
    tier: "featured",
    context: { organization: "Sigterm · Gladius", year: 2026, role: SIGTERM_INTERNSHIP_ROLE },
    category: {
      en: "SINGLE SIGN ON · AMAZON COGNITO · OAUTH",
      fr: "AUTHENTIFICATION UNIQUE · AMAZON COGNITO · OAUTH",
    },
    description: {
      en: "Proof of concept of a **single sign on portal** for Gladius: one account and one login for every business application, with **permissions per application and per user**, on **Amazon Cognito**.",
      fr: "Preuve de concept d'un **portail d'authentification unique** pour Gladius : un seul compte et une seule connexion pour toutes les applications métier, avec des **droits par application et par utilisateur**, sur **Amazon Cognito**.",
    },
    stack: ["Amazon Cognito", "OAuth 2.0", "Terraform", "AWS SAM", "API Gateway", "TypeScript", "React", "Laravel"],
    caseStudy: {
      context: {
        en: "Gladius runs several business applications: some are single page apps, others run on a Laravel backend. Each one had its own login. The goal was one account, one login, and fine grained rights.",
        fr: "Gladius utilise plusieurs applications métier : certaines sont des applications web monopages, d'autres tournent sur un backend Laravel. Chacune avait sa propre connexion. L'objectif : un compte, une connexion, et des droits précis.",
      },
      work: {
        en: "I designed and built the proof of concept: the Cognito identity layer in **Terraform**, a portal that lists the apps each user may open, a Laravel app and a single page app as two real examples, and an API protected by a JWT authorizer. I then extracted the login logic into a **shared TypeScript library** and the identity layer into a **shared Terraform module** of Gladius' infrastructure.",
        fr: "J'ai conçu et construit la preuve de concept : la couche d'identité Cognito en **Terraform**, un portail qui liste les applications accessibles à chaque utilisateur, une application Laravel et une application monopage comme exemples réels, et une API protégée par un authorizer JWT. J'ai ensuite extrait la logique de connexion dans une **bibliothèque TypeScript partagée** et la couche d'identité dans un **module Terraform partagé** de l'infrastructure de Gladius.",
      },
      architecture: [
        { name: "Managed Login", detail: { en: "One session cookie for every app", fr: "Un cookie de session pour toutes les applications" } },
        { name: "Portal", detail: { en: "PKCE, lists the allowed apps", fr: "PKCE, liste les applications autorisées" } },
        { name: "Business apps", detail: { en: "Laravel and single page app", fr: "Laravel et application monopage" } },
        { name: "API Gateway", detail: { en: "JWT authorizer and OAuth scopes", fr: "Authorizer JWT et scopes OAuth" } },
        { name: "Service", detail: { en: "Rights per Cognito group", fr: "Droits par groupe Cognito" } },
      ],
      choices: [
        {
          en: "**Authorization Code flow everywhere**: PKCE for browser apps, a client secret for server apps, no implicit flow and no refresh token stored in the browser.",
          fr: "**Flux Authorization Code partout** : PKCE pour les applications navigateur, secret client pour les applications serveur, aucun flux implicite et aucun refresh token stocké dans le navigateur.",
        },
        {
          en: "**Two levels of authorization**: OAuth scopes decide which application may call an API, Cognito groups decide what each user may do.",
          fr: "**Deux niveaux d'autorisation** : les scopes OAuth décident quelle application peut appeler une API, les groupes Cognito décident ce que chaque utilisateur peut faire.",
        },
        {
          en: "**Terraform for identity, SAM for the APIs**, so the identity layer and the applications evolve separately.",
          fr: "**Terraform pour l'identité, SAM pour les API** : la couche d'identité et les applications évoluent séparément.",
        },
      ],
      outcome: {
        en: "A working proof of concept that covers both kinds of applications, turned into a reusable login library and a shared Cognito module for Gladius' next applications.",
        fr: "Une preuve de concept fonctionnelle qui couvre les deux types d'applications, transformée en bibliothèque de connexion réutilisable et en module Cognito partagé pour les prochaines applications de Gladius.",
      },
    },
  },
  {
    id: "persona",
    title: "Persona",
    icon: MdNewspaper,
    accent: "pink",
    tier: "featured",
    context: { organization: "Epitech", year: 2026, role: { en: "News and newsletter workflows (team of 2)", fr: "Workflows news et newsletter (équipe de 2)" } },
    category: {
      en: "AI AUTOMATION · N8N · NEWSLETTER",
      fr: "AUTOMATISATION IA · N8N · NEWSLETTER",
    },
    description: {
      en: "AI news aggregator driven by a **chatbot**, built entirely in **n8n**: it fetches news, filters them by each user's interests, writes **summaries** and sends a personalized **HTML newsletter** on schedule.",
      fr: "Agrégateur de news par IA piloté par un **chatbot**, construit entièrement avec **n8n** : il récupère les actualités, les filtre selon les centres d'intérêt de chacun, rédige des **résumés** et envoie une **newsletter HTML** personnalisée selon un planning.",
    },
    stack: ["n8n", "LLM", "JavaScript", "Docker"],
    repositoryUrl: "https://github.com/louispouillet/persona",
  },
  {
    id: "2dgame",
    title: "2DGame",
    icon: FaGamepad,
    accent: "teal",
    tier: "featured",
    context: { organization: "Epitech", year: 2026, role: { en: "Maps, lobby and networking (team of 2)", fr: "Cartes, lobby et réseau (équipe de 2)" } },
    category: {
      en: "MULTIPLAYER GAME · JAVA · NETWORKING",
      fr: "JEU MULTIJOUEUR · JAVA · RÉSEAU",
    },
    description: {
      en: "Online **arena shooter** inspired by Brawl Stars, for **2 to 6 players** in teams: a lobby to pick team, brawler and map, **Knockout** rounds, walls, water and bushes, rendered in **3D** with libGDX.",
      fr: "**Jeu de combat en arène** en ligne inspiré de Brawl Stars, pour **2 à 6 joueurs** en équipes : un lobby pour choisir équipe, personnage et carte, des manches **Knockout**, des murs, de l'eau et des buissons, rendus en **3D** avec libGDX.",
    },
    stack: ["Java", "libGDX", "TCP/UDP", "JUnit", "Gradle"],
    repositoryUrl: "https://github.com/louispouillet/2dgame",
  },
  {
    id: "starttrek",
    title: "Start Trek",
    icon: FaRocket,
    accent: "pink",
    tier: "secondary",
    context: { organization: "Epitech", year: 2026, role: TEAM_OF_TWO_ROLE },
    category: {
      en: "REINFORCEMENT LEARNING · DQN · PPO",
      fr: "APPRENTISSAGE PAR RENFORCEMENT · DQN · PPO",
    },
    description: {
      en: "Two agents, **DQN** and **PPO**, learn to land Gymnasium's lunar module by trial and error. PPO solves it with a mean score of **262 over 100 episodes** (threshold 200), above 200 on all 3 seeds.",
      fr: "Deux agents, **DQN** et **PPO**, apprennent à poser le module lunaire de Gymnasium par essais et erreurs. PPO le résout avec un score moyen de **262 sur 100 épisodes** (seuil 200), au‑dessus de 200 sur les 3 graines.",
    },
    stack: ["Python", "PyTorch", "Gymnasium"],
    repositoryUrl: "https://github.com/louispouillet/starttrek",
  },
  {
    id: "codename",
    title: "Codename",
    icon: FaUserSecret,
    accent: "teal",
    tier: "secondary",
    context: { organization: "Epitech", year: 2026, role: SOLO_ROLE },
    category: {
      en: "LLM SECURITY · PROMPT INJECTION",
      fr: "SÉCURITÉ DES LLM · INJECTION DE PROMPT",
    },
    description: {
      en: "A small LLM agent (**granite 3B on Ollama**) that keeps a codeword secret behind a password, and a toolkit of **5 prompt injection attacks** whose success rates were measured against several agents.",
      fr: "Un petit agent LLM (**granite 3B sur Ollama**) qui garde un mot de code secret derrière un mot de passe, et une boîte à outils de **5 attaques par injection de prompt** dont le taux de réussite a été mesuré sur plusieurs agents.",
    },
    stack: ["Ollama", "LLM", "Prompt engineering"],
    repositoryUrl: "https://github.com/louispouillet/codename",
  },
  {
    id: "cvrie",
    title: "CVRIE",
    icon: FaXRay,
    accent: "pink",
    tier: "secondary",
    context: { organization: "Epitech", year: 2026, role: TEAM_OF_TWO_ROLE },
    category: {
      en: "MEDICAL ML · COMPUTER VISION · CLUSTERING",
      fr: "ML MÉDICAL · VISION · CLUSTERING",
    },
    description: {
      en: "Two medical machine learning tasks: **pneumonia detection on chest X-rays** (0.93 ROC AUC on the untouched test set) and **clustering of 1,000 patient testimonies** by symptoms, checked against a hand labeled sample.",
      fr: "Deux tâches de machine learning médical : **détection de pneumonie sur radios pulmonaires** (ROC AUC de 0,93 sur le jeu de test jamais vu) et **regroupement de 1 000 témoignages de patients** par symptômes, vérifié sur un échantillon étiqueté à la main.",
    },
    stack: ["Python", "scikit-learn", "pandas", "NumPy"],
    repositoryUrl: "https://github.com/louispouillet/cvrie",
  },
  {
    id: "cherry",
    title: "Cherry",
    icon: TbCherryFilled,
    accent: "teal",
    tier: "secondary",
    context: { organization: "Epitech", year: 2026, role: TEAM_OF_FOUR_ROLE },
    category: {
      en: "SOCIAL APP · SWIPE · EVENTS",
      fr: "APPLICATION SOCIALE · SWIPE · ÉVÉNEMENTS",
    },
    description: {
      en: "Social event platform against isolation: users discover, create and join **real life events** in their city by **swiping**, with recommendations based on their interests.",
      fr: "Plateforme d'événements contre l'isolement : les utilisateurs découvrent, créent et rejoignent des **sorties réelles** dans leur ville en **swipant**, avec des recommandations selon leurs centres d'intérêt.",
    },
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    repositoryUrl: "https://github.com/louispouillet/cherry",
  },
  {
    id: "etardis",
    title: "Etardis",
    icon: FaTrainSubway,
    accent: "teal",
    tier: "secondary",
    context: { organization: "Epitech", year: 2026, role: TEAM_OF_FOUR_ROLE },
    category: {
      en: "MACHINE LEARNING · PREDICTION · DATA",
      fr: "MACHINE LEARNING · PRÉDICTION · DONNÉES",
    },
    description: {
      en: "**Train delay prediction** from historical **SNCF data**: data cleaning, **feature engineering**, scikit-learn models and a Streamlit dashboard.",
      fr: "**Prédiction des retards de train** à partir des **données historiques SNCF** : nettoyage des données, **feature engineering**, modèles scikit-learn et tableau de bord Streamlit.",
    },
    stack: ["Python", "scikit-learn", "pandas", "Streamlit"],
    repositoryUrl: "https://github.com/louispouillet/Etardis",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.tier === "featured");

export const SECONDARY_PROJECTS = PROJECTS.filter((project) => project.tier === "secondary");

export const findCaseStudyProject = (slug: string): (Project & { caseStudy: CaseStudy }) | undefined => {
  const project = PROJECTS.find((candidate) => candidate.id === slug);
  return project?.caseStudy === undefined ? undefined : { ...project, caseStudy: project.caseStudy };
};
