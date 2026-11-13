import type { Localized } from "./types";

type UiText = {
  common: {
    present: string;
    languageSwitcherLabel: string;
  };
  home: {
    typedLines: string[];
    badges: { student: string; passion: string; city: string };
    intro: string;
    actions: { contact: string; projects: string; about: string };
    stats: {
      yearNumber: string;
      yearSuffix: string;
      yearLabel: string;
      peerValue: string;
      peerLabel: string;
      algorithmsLabel: string;
      motivationLabel: string;
    };
  };
  about: {
    tagLine: string;
    title: string;
    comment: string;
    focusTitle: string;
    educationTitle: string;
  };
  projects: {
    comment: string;
    title: string;
    quote: string;
    snippetComment: string;
    snippetBody: string;
    featuredTitle: string;
    otherTitle: string;
    caseStudyLink: string;
  };
  caseStudy: {
    back: string;
    contextTitle: string;
    workTitle: string;
    architectureTitle: string;
    choicesTitle: string;
    outcomeTitle: string;
    stackTitle: string;
    repositoryLink: string;
  };
  skills: {
    comment: string;
    title: string;
    quoteKey: string;
    authorKey: string;
    quote: string;
  };
  experience: {
    comment: string;
    title: string;
  };
  contact: {
    comment: string;
    title: string;
    role: string;
    availability: string;
    findMe: string;
    facts: { location: string; school: string; languages: string; year: string };
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      success: string;
      error: string;
      rateLimited: string;
      send: string;
      sending: string;
    };
  };
};

export const UI_TEXT: Localized<UiText> = {
  en: {
    common: {
      present: "present",
      languageSwitcherLabel: "Language",
    },
    home: {
      typedLines: [
        "// hello and welcome to my portfolio",
        "// I am passionate about software development",
        "// always learning",
        "// currently studying at epitech",
        "// feel free to explore and contact me !",
      ],
      badges: { student: "freelance developer", passion: "software passionate", city: "toulouse" },
      intro:
        "Second year student at **Epitech Toulouse** and **freelance developer**. After a three month internship building **AWS serverless** applications at Sigterm, I build backends, web apps and automations for businesses.",
      actions: { contact: "Contact", projects: "Projects", about: "About Me" },
      stats: {
        yearNumber: "2",
        yearSuffix: "nd",
        yearLabel: "year",
        peerValue: "Peer",
        peerLabel: "learning",
        algorithmsLabel: "algorithms",
        motivationLabel: "motivation",
      },
    },
    about: {
      tagLine: "I am Louis, 21 years old",
      title: "About Me",
      comment: "// You will learn about me but to know more, please ask copilot -_-",
      focusTitle: "CURRENTLY FOCUSING ON:",
      educationTitle: "EDUCATION:",
    },
    projects: {
      comment: "/* Come back often: my projects are constantly evolving. */",
      title: "Projects",
      quote: "// You don’t learn to walk by following rules. You learn by doing, and by falling over. (Richard Branson)",
      snippetComment: "// Fetch and display my projects",
      snippetBody: "// You will find all my projects below",
      featuredTitle: "FEATURED",
      otherTitle: "OTHER PROJECTS",
      caseStudyLink: "Case study",
    },
    caseStudy: {
      back: "All projects",
      contextTitle: "Context",
      workTitle: "What I built",
      architectureTitle: "Architecture",
      choicesTitle: "Technical choices",
      outcomeTitle: "Outcome",
      stackTitle: "Stack",
      repositoryLink: "View the code on GitHub",
    },
    skills: {
      comment: "// I am constantly improving my skills ;",
      title: "Skills",
      quoteKey: "Quote",
      authorKey: "Author",
      quote: "Learn as if you were to live forever.",
    },
    experience: {
      comment: "// You will find all my experiences below",
      title: "Experience",
    },
    contact: {
      comment: "// Contact me if you have any questions or would like to collaborate!",
      title: "Contact",
      role: "Freelance developer · Epitech student",
      availability: "Available for freelance projects",
      findMe: "FIND ME",
      facts: { location: "Location", school: "School", languages: "Languages", year: "Year" },
      form: {
        title: "SEND ME A MESSAGE",
        nameLabel: "YOUR NAME",
        namePlaceholder: "Jane Doe",
        emailLabel: "YOUR EMAIL",
        emailPlaceholder: "jane@company.com",
        subjectLabel: "SUBJECT",
        subjectPlaceholder: "Project collaboration / Internship / ...",
        messageLabel: "MESSAGE",
        messagePlaceholder: "Hello Louis, I'd like to...",
        success: "// Message sent successfully! I'll get back to you soon.",
        error: "// Something went wrong. Please try again or contact me directly by email.",
        rateLimited: "// Too many requests. Please wait before sending another message.",
        send: "Send message",
        sending: "Sending...",
      },
    },
  },
  fr: {
    common: {
      present: "aujourd'hui",
      languageSwitcherLabel: "Langue",
    },
    home: {
      typedLines: [
        "// bonjour et bienvenue sur mon portfolio",
        "// passionné de développement logiciel",
        "// toujours en apprentissage",
        "// actuellement étudiant à epitech",
        "// n'hésitez pas à explorer et à me contacter !",
      ],
      badges: { student: "développeur freelance", passion: "passionné de logiciel", city: "toulouse" },
      intro:
        "Étudiant en 2e année à **Epitech Toulouse** et **développeur freelance**. Après un stage de trois mois à construire des applications **AWS serverless** chez Sigterm, je développe des backends, des applications web et des automatisations pour les entreprises.",
      actions: { contact: "Contact", projects: "Projets", about: "À propos" },
      stats: {
        yearNumber: "2",
        yearSuffix: "e",
        yearLabel: "année",
        peerValue: "Peer",
        peerLabel: "learning",
        algorithmsLabel: "algorithmes",
        motivationLabel: "motivation",
      },
    },
    about: {
      tagLine: "Je suis Louis, j'ai 21 ans",
      title: "À propos",
      comment: "// Vous allez découvrir qui je suis, et pour en savoir plus, demandez à copilot -_-",
      focusTitle: "EN CE MOMENT :",
      educationTitle: "FORMATION :",
    },
    projects: {
      comment: "/* Revenez souvent : mes projets évoluent sans cesse. */",
      title: "Projets",
      quote: "// On n'apprend pas à marcher en suivant des règles. On apprend en essayant, et en tombant. (Richard Branson)",
      snippetComment: "// Récupère et affiche mes projets",
      snippetBody: "// Vous trouverez tous mes projets ci-dessous",
      featuredTitle: "À LA UNE",
      otherTitle: "AUTRES PROJETS",
      caseStudyLink: "Étude de cas",
    },
    caseStudy: {
      back: "Tous les projets",
      contextTitle: "Contexte",
      workTitle: "Ce que j'ai réalisé",
      architectureTitle: "Architecture",
      choicesTitle: "Choix techniques",
      outcomeTitle: "Résultat",
      stackTitle: "Stack",
      repositoryLink: "Voir le code sur GitHub",
    },
    skills: {
      comment: "// J'améliore sans cesse mes compétences ;",
      title: "Compétences",
      quoteKey: "Citation",
      authorKey: "Auteur",
      quote: "Apprends comme si tu devais vivre toujours.",
    },
    experience: {
      comment: "// Vous trouverez toutes mes expériences ci-dessous",
      title: "Expérience",
    },
    contact: {
      comment: "// Contactez-moi pour toute question ou pour collaborer !",
      title: "Contact",
      role: "Développeur freelance · Étudiant à Epitech",
      availability: "Disponible pour des missions freelance",
      findMe: "ME TROUVER",
      facts: { location: "Localisation", school: "École", languages: "Langues", year: "Année" },
      form: {
        title: "ENVOYEZ-MOI UN MESSAGE",
        nameLabel: "VOTRE NOM",
        namePlaceholder: "Marie Dupont",
        emailLabel: "VOTRE E-MAIL",
        emailPlaceholder: "marie@entreprise.fr",
        subjectLabel: "OBJET",
        subjectPlaceholder: "Collaboration / Stage / ...",
        messageLabel: "MESSAGE",
        messagePlaceholder: "Bonjour Louis, je souhaiterais...",
        success: "// Message envoyé ! Je vous réponds très vite.",
        error: "// Une erreur est survenue. Réessayez ou écrivez-moi directement par e-mail.",
        rateLimited: "// Trop de messages envoyés. Patientez avant d'en envoyer un autre.",
        send: "Envoyer",
        sending: "Envoi...",
      },
    },
  },
};
