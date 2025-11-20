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
        },{id: "nav-repositories",
          title: "repositories",
          description: "Kyle Mogan&#39;s GitHub repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
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
          section: "News",},{id: "projects-wordflurry",
          title: 'WordFlurry',
          description: "A Fast Paced Word Finding Game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6D%6F%67%61%6E%31%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
