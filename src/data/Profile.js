// import eliteVibes from "./images/eliteVibes/elitevibes.in.png";
// import eliteVibesReact from "./images/eliteVibesReact/elite-vibes-react.png";
import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import jsx from "../assets/logo/react-js.svg";
import javascript from "../assets/logo/javascript-programming-language.svg";
import express from "../assets/logo/express-original-wordmark.svg";
import node from "../assets/logo/node-js.svg";
import mongoDB from "../assets/logo/mongodb-original-wordmark.svg";
import mysql from "../assets/logo/mysql-original-wordmark.svg";
import git from "../assets/logo/git.svg";
import gitHUB from "../assets/logo/github-original-wordmark.svg";
import tailwindcss from "../assets/logo/tailwind-css.svg";



export const Profile = {
  socials: {
    linkdin: "https://www.linkedin.com/in/varun-rana-236171191/",
    twitter: "https://twitter.com/Varun_Ranaa",
    gitHub: "https://github.com/varunrana123",
    instagram: "https://www.instagram.com/varun8048/",
  },
};

export const skills = [
  {
    name: "html",
    option: [
      {
        image: html,
        value: "html5",
      },
      {
        image: jsx,
        value: "jsx",
      },
    ],
  },
  {
    name: "css",
    option: [
      {
        image: css,
        value: "css3",
      },
      {
        image: tailwindcss,
        value: "tailwind-css",
      },
    ],
  },
  {
    name: "javascript",
    option: [
      {
        image: javascript,
        value: "javascript",
      },
      {
        image: jsx,
        value: "react",
      },
      {
        image: jsx,
        value: "react-native",
      },
      {
        image: node,
        value: "node.js",
      },
      {
        image: express,
        value: "express",
      },
    ],
  },
  {
    name: "backend",
    option: [
      {
        image: node,
        value: "node.js",
      },
      {
        image: express,
        value: "express",
      },
    ],
  },
  {
    name: "databases",
    option: [
      {
        image: mongoDB,
        value: "mongoDB",
      },
      {
        image: mysql,
        value: "mySql",
      },
    ],
  },
  {
    name: "other",
    option: [
      {
        image: git,
        value: "git",
      },
      {
        image: gitHUB,
        value: "gitHUB",
      },
    ],
  },
];
