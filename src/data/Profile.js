import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import jsx from "../assets/logo/react-js.svg";
import javascript from "../assets/logo/javascript-programming-language.svg";
import express from "../assets/logo/express-original-wordmark.svg";
import node from "../assets/logo/node-js.svg";
import mongoDB from "../assets/logo/mongodb-original-wordmark.svg";
import git from "../assets/logo/git.svg";
import gitHUB from "../assets/logo/github-original-wordmark.svg";
import tailwindcss from "../assets/logo/tailwind-css.svg";

import colorsFinder from "../assets/images/projects-img/findcolors.info_.png";
import githubUserFinder from "../assets/images/projects-img/find-github-profile.png";
import eliteVibes from "../assets/images/projects-img/elite-vibes.png";
import pomodroTimer from "../assets/images/projects-img/pomodrotimer.png";
import portfolio from "../assets/images/projects-img/portfolio_project.png";
import portfolioOne from "../assets/images/projects-img/portfolio.png";
import onboardingSteps from "../assets/images/projects-img/onBoarding.png";

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

export const projects = [
	{
		name: "Colors Finder",
		url: "http://findcolors.info",
		projectImg: colorsFinder,
		skills: [
			"ReactJs",
			"TailwindCss",
			"NodeJs",
			"mongoDB",
			"Git",
			"GitHub",
			"RestAPIs",
		],
		desc:
			"you liked colors on a website but, it's time consuming and cumbersome to fiddle around with source code, inspecting elements just to get colors. Here we come into picture, jsut enter website URL and we go and grab all colors using by that website.",
		sourceCode: "https://github.com/varun-raana/whichColorOnSite",
	},
	{
		name: "gitHub user finder",
		url: "https://find-github-profile.netlify.app",
		projectImg: githubUserFinder,
		skills: ["ReactJs", "React-spinners", "TailwindCss", "Git", "GitHub"],
		desc:
			"A Simple, Effective and Easier way to find any gitHub user Repository. just enter user login name and see their repo name, when they joined github and more.",
		sourceCode: "https://github.com/varun-raana/GitHub-User-Finder",
	},
	{
		name: "Elite Vibes Management Company",
		url: "https://elite-vibes.herokuapp.com",
		projectImg: eliteVibes,
		skills: [
			"ReactJs",
			"React-spinners",
			"TailwindCss",
			"NodeJs",
			"react-router",
			"firebase",
			"mongoDB",
			"Express.js",
			"TailwindCss",
			"Git",
			"GitHub",
		],
		desc:
			"EliteVibes Is One Of The Most Premier Entertainment Company In Pune That Covers All Aspects Of Entertainment Such As Gaming, Live Concerts, Networking Events, Private Parties And Holistic Festival Management. Get In Touch With Us For More Details.",
		sourceCode: "https://github.com/varun-raana/Ellite-Vibes-React",
	},
	{
		name: "pomodro timer app",
		url: "https://pomodrotimer.netlify.app",
		projectImg: pomodroTimer,
		skills: [
			"ReactJs",
			"React-spinners",
			"firebase",
			"react-router",
			"TailwindCss",
			"Git",
			"GitHub",
		],
		desc:
			"timer app with 25 minutes work schedule with a 5 minute break to get relaxed.",
		sourceCode: "https://github.com/varun-raana/pomodro-timer-app",
	},
	{
		name: "portfolio One",
		url: "https://varun-rana.netlify.app",
		projectImg: portfolioOne,
		skills: ["ReactJs", "TailwindCss", "react-router", "Git", "GitHub"],
		desc:
			"A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varun-raana/PortFolio-Website",
	},
	{
		name: " portfolio two",
		url: "https://varun-rana-portfolio.netlify.app",
		projectImg: portfolio,
		skills: ["ReactJs", "TailwindCss", "Git", "GitHub"],
		desc:
			"A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varun-raana/my_portfolio",
	},
	{
		name: "onBoarding steps form",
		url: "https://onboarding-steps-form.netlify.app/",
		projectImg: onboardingSteps,
		skills: ["ReactJs", "TailwindCss", "Git", "GitHub"],
		desc: "Build workspace with this cool multi steps form with some animations.",
		sourceCode: "https://github.com/varun-raana/OnBoarding_Steps_Form",
	},
];
