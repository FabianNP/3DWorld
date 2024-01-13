import platzi from "../assets/images/platzi.webp"
import bedu from "../assets/images/bedu.jpeg"
import web from "../assets/images/web.png"

import list from "../assets/icons/list.png" 
import movies from "../assets/icons/movies.png" 
import chat from "../assets/icons/chat.png" 
import chaleco from "../assets/icons/chaleco.png" 
import seguro from "../assets/icons/seguro.png" 
import cocteles from "../assets/icons/cocteles.png" 
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Bedu",
        type: "Bootcamp",
        icon: bedu,
        iconBottom: "#F55D26",
        iconBg: "#07080A",
        date: "March 2020 - April 2021",
        points: [
            "My first contact with progamming.",
            "Collaborating with others students and teachers and realized that each one has something to teach.",
            "Created diferents apps allong the way and practiced what it's like to work professionally with technologies like \"git\" and SCRUM metodolgys used to work.",
            "The reality is that it feels like hell in the first steps to understand how programming works, but thanks to that I have a good foundation and I realized that no matter how difficult it is, if you persist you can.",
        ],
    },
    {
        title: "Platzi",
        type: "School Online",
        icon: platzi,
        iconBottom: "#99c84a",
        iconBg: "#2C2F33",
        date: "Jan 2021 - Feb 2022",
        points: [
            "When I met Platzi I started with courses on design since I like art and I needed help to pass some exams in high school.",
            "I continued with basic routes to reinforce what I learned in the bootcamp all focused on javascript.",
            "With greater knowledge, continue learning React and other technologies that help web development.",
            "I realized that I had practiced a lot of frontend and continued with courses on backend to be able to create apps that require it.",
            "I went to different conferences held by the company here in Mexico, meeting great people who share a taste for technology."
        ],
    },
    {
        title: "Web",
        type: "Internet",
        icon: web,
        iconBg: "#0B7CDE",
        iconBottom: "#0B7CDE",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Not satisfied with what you learned on the platforms and in the bootcamp, look for other ways to learn.",
            "Take courses on other platforms such as freeCodeCamp.",
            "I carried out projects that caught my attention knowing how they worked from YouTube.",
            "And you should never underestimate the power of documentation, spend hours reading within the web pages pertaining to the technology in question.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: movies,
        theme: 'btn-back-red',
        name: 'Movie Search Engine',
        description: 'Movie display app, through an api it shows a preview of movies of the moment, you can search by category and by name. You can like the movies so can have a favorite list movies. Maked a reload of the movies in search to display more only scrolling down (pagination).',
        link: 'https://movix-kappa-nine.vercel.app/',
    },
    {
        iconUrl: chaleco,
        theme: 'btn-back-blue',
        name: 'Lifevest Kraken Page',
        description: 'Company page for life jacket manufacturers, designed specifically for them',
        link: 'https://github.com/FabianNP/Kraken',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Chat App',
        description: 'Chat App where you can register your account and talk with others people in real time. Using socket.io to send the mmessages in real time and then storage them in mongoDB if you want to open the conversation antoher day.',
        link: 'https://empyritz.github.io/portafolio/#/project/7',
    },
    {
        iconUrl: list,
        theme: 'btn-back-pink',
        name: 'Todo List',
        description: 'App of Todo-List where you can add, edit, check, remove your items and save it in local storage and observe the changes maked to advise to other window to relaod',
        link: 'https://empyritz.github.io/portafolio/#/project/10',
    },
    {
        iconUrl: cocteles,
        theme: 'btn-back-black',
        name: 'Drinks Menu',
        description: 'Drinks app that display a lot of drinks using an API. You can search by name and then calls the api inmediatelly. When you click one it display antoher page with details of that drink',
        link: 'https://empyritz.github.io/portafolio/#/project/8',
    },
    {
        iconUrl: seguro,
        theme: 'btn-back-yellow',
        name: 'Firebase Authentication',
        description: 'React App created with firebase to manage the authentication of the page. Using react-router to display the differents paths and helping with securtiy with protected routes and dynamics routes for the customization of user page',
        link: 'https://empyritz.github.io/portafolio/#/project/1',
    }
];