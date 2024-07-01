import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Nicolas",
  DESCRIPTION: "Bienvenue sur mon portfolio.",
  AUTHOR: "Nicolas",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Accueil",
    HREF: "/",
  },
  {
    TEXT: "Projets",
    HREF: "#projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "nicolasbilic.dev@nicolasbilic.com",
    ICON: "email",
    TEXT: "nicolasbilic.dev@nicolasbilic.com",
    HREF: "mailto:nicolasbilic.dev@nicolasbilic.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "dev-nicolas",
    HREF: "https://github.com/nicolasbilic"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "dev-nicolas",
    HREF: "https://www.linkedin.com/in/nicolas-bilic/",
  },
]

