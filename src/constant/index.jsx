import css from "../assets/css-3.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import reactjs from "../assets/reactjs.png";
import web from "../assets/web-development.png";
import mongo from "../assets/mongo.png";
import mern from "../assets/mern.png";
import vscode from "../assets/visual-studio-code-icon.png";
import tail from "../assets/TailwindCSS.png";
import vercel from "../assets/vercel.png";
import html from "../assets/html.png";
import express from "../assets/express.png"
import todolist from "../assets/Project/todolist.jpg";
import coinwave from "../assets/Project/coinwave.jpg";
import opportuNest from '../assets/Project/OpportuNest.jpg'
import netlify from "../assets/netlify.png";
import postman from "../assets/postman.png"
import nextjs from '../assets/nextjs-icon.png'
import threejs from '../assets/three-js-icon.png'
import chattext from "../assets/Project/cahtext.jpg"
import track from "../assets/Project/track.png"
import shutter from "../assets/Project/shutter.png"
import threeDlandingPages from '../assets/Project/3D_landingPage.png'
import zentry from '../assets/Project/zentry.jpg'
// for services 
const services = [
    {
        title: "Web Designer",
        icons: web
    },
    {
        title: "React Developer",
        icons: reactjs
    },
    {
        title: "MERN Developer",
        icons: mern
    },
]
//  for tools and technology
const tech = [
    {
        name: "HTML",
        icons: html
    },
    {
        name: "CSS",
        icons: css
    },
    {
        name: "JavaScript",
        icons: js
    },
    {
        name: "Nodejs",
        icons: nodejs
    },
    {
        name: "Expressjs",
        icons: express
    },
    {
        name: "React js",
        icons: react
    },
    {
        name: "Sass",
        icons: sass
    },
    {
        name: "Tailwind CSS",
        icons: tail
    },
    {
        name: "Mongo DB",
        icons: mongo
    },
    {
        name: "NextJs",
        icons: nextjs
    },
    {
        name: "ThreeJs",
        icons: threejs
    },
    {
        name: "Github",
        icons: github
    },
    {
        name: "Git",
        icons: git
    },
    {
        name: "Vs Code",
        icons: vscode
    },
    {
        name: "Postman",
        icons: postman,
    },
    {
        name: "Vercel",
        icons: vercel,
    },
    {
        name: "Netlify",
        icons: netlify
    },

]

const projects = [
    {
        name: "3D Landing Page",
        description: "Three.js Landing Page",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient"
            },
            {
                name: "Three.js",
                color: "blue-text-gradient"
            },
            {
                name: "CSS",
                color: "blue-text-gradient"
            },
        ],
        img: threeDlandingPages,
        source_code_link: "https://github.com/soumya-rayast/ThreeJS_work/tree/main/3D_LandingPage",
        source_deploy_link: "https://three-js-work-phi.vercel.app/"
    },
    {
        name: "Zentry-Metagame",
        description: "Created a landing page using GSAP Library ,React.js and Tailwind css",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient"
            },
            {
                name: "Three.js",
                color: "blue-text-gradient"
            },
            {
                name: "CSS",
                color: "blue-text-gradient"
            },
        ],
        img: zentry,
        source_code_link: "https://github.com/soumya-rayast/Zentry_LandingPage",
        source_deploy_link: "https://zentry-landing-page.vercel.app"
    },
    // {
    //     name: "3D Animation Car",
    //     description: "Three.js Animation Car",
    //     tags: [
    //         {
    //             name: "JavaScript",
    //             color: "blue-text-gradient"
    //         },
    //         {
    //             name: "Three.js",
    //             color: "blue-text-gradient"
    //         },
    //         {
    //             name: "CSS",
    //             color: "blue-text-gradient"
    //         },
    //     ],
    //     img: threeDlandingPages,
    //     source_code_link:"https://github.com/soumya-rayast/ThreeJS_work/tree/main/3D_Animation_Car",
    //     source_deploy_link:"https://three-js-work-tqfk.vercel.app/"
    // },


    {
        name: "ShutterShare",
        description: "Shutter Share is a platform where photographers can sell their photos to a global audience.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Socket.io",
                color: "blue-text-gradient"
            },
            {
                name: "Nodejs",
                color: "blue-text-gradient"
            },
        ],
        img: shutter,
        source_code_link: "https://github.com/soumya-rayast/ShutterShare",
        source_deploy_link: "https://shuttershare-frontend.onrender.com/"
    },
    {
        name: "To-Do List",
        description: "Implemented dynamic task addition, completion tracking with checkboxes, and task removal functionality. Utilized CSS media queries to adapt the layout for various screen sizes, enhancing accessibility. ",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
        ],
        img: todolist,
        source_code_link: "https://github.com/soumya-rayast/To-Do-List",
        source_deploy_link: "https://melodic-sprite-bed2f2.netlify.app/"
    },
    {
        name: "CoinWave-Crypto",
        description: "Developed a Responsive Crypto Information Website: Utilized React.js to create a user-friendly and dynamic interface that displays up-to-date cryptocurrency information, integrating with external APIs for real-time data.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
        ],
        img: coinwave,
        source_code_link: "https://github.com/soumya-rayast/CoinWave",
        source_deploy_link: "https://coinwavecrypto.netlify.app/"
    },
    {
        name: "OpportuNest",
        description: "Opprtunest is a job search platform connecting users to relevant opportunities with personalized recommendations and a streamlined application process for efficient career growth and recruitment.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Cloudinary",
                color: "blue-text-gradient"
            },
            {
                name: "Nodejs",
                color: "blue-text-gradient"
            },
        ],
        img: opportuNest,
        source_code_link: "https://github.com/soumya-rayast/OpportuNest",
        source_deploy_link: "https://opportunest-1-s7oc.onrender.com/"
    },
    {
        name: "ChatText",
        description: "A real-time chat application built using React.js, Socket.io, and Node.js.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Socket.io",
                color: "blue-text-gradient"
            },
            {
                name: "Nodejs",
                color: "blue-text-gradient"
            },
        ],
        img: chattext,
        source_code_link: "https://github.com/soumya-rayast/ChatText?tab=readme-ov-file#a-real-time-chat-application-built-using-reactjs-socketio-and-nodejs",
        source_deploy_link: "https://chat-text.vercel.app/"
    },
    {
        name: "TrackMyBuy",
        description: "Expense Tracking Web Application.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient"
            },
            {
                name: "Socket.io",
                color: "blue-text-gradient"
            },
            {
                name: "Nodejs",
                color: "blue-text-gradient"
            },
        ],
        img: track,
        source_code_link: "https://github.com/soumya-rayast/TrackMyBuy",
        // source_deploy_link:"https://chat-text.vercel.app/"
    },
    // {
    //     name: "Task Management Application",
    //     description: "Developed a task management web app using the MERN stack, featuring full CRUD functionality. Enabled users to create, read, update, and delete tasks seamlessly.",
    //     tags: [
    //         {
    //             name: "Reactjs",
    //             color: "blue-text-gradient"
    //         },
    //         {
    //             name: "Reactjs",
    //             color: "blue-text-gradient"
    //         },
    //         {
    //             name: "Reactjs",
    //             color: "blue-text-gradient"
    //         },
    //     ],
    //     img: as,
    //     // source_code_link:"dasfadf",
    //     // source_deploy_link:"deqw"
    // },

]

export { services, tech, projects };