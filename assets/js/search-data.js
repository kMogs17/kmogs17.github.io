// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Kyle Mogan&#39;s Professional and Personal Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is the curriculum vitae for Kyle Mogan.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-first-announcement-wordflurry-a-fast-paced-word-find-game-is-currently-being-developed-and-is-scheduled-for-release-in-2026-sparkles-smile",
          title: 'First Announcement! WordFlurry - a fast-paced word find game is currently being developed...',
          description: "",
          section: "News",},{id: "projects-legacy-healthcare-system",
          title: 'Legacy Healthcare System',
          description: "A legacy healthcare system for consumer accounts and processing liability transactions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_legacy_system.html";
            },},{id: "projects-microservice-framework-for-healthcare",
          title: 'Microservice Framework for Healthcare',
          description: "A microservice framework for the healthcare.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_microservice_framework.html";
            },},{id: "projects-modern-healthcare-platform",
          title: 'Modern Healthcare Platform',
          description: "A modern web based healthcare platform using MVC patterns, utilizing Java, MySQL, Javascript, CSS, and HTML.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_modern_healthcare.html";
            },},{id: "projects-wordflurry",
          title: 'WordFlurry',
          description: "A Fast Paced Word Finding Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_wordflurry.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6D%6F%67%61%6E%31%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kyle-mogan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
