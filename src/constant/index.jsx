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
import tail from  "../assets/TailwindCSS.png";
import vercel from "../assets/vercel.png";
import html from "../assets/html.png";
import express from "../assets/express.png"
import todolist from "../assets/Project/todolist.jpg";
import coinwave from "../assets/Project/coinwave.jpg";
import gemini from "../assets/Project/gemini.jpg";
import netlify from "../assets/netlify.png";
import postman from "../assets/postman.png"
import as from "../assets/as.png";
// for services 
const services = [
    {
        title: "Web Developer",
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
        name:"HTML",
        icons:html
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
        name:"Expressjs",
        icons:express
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
        name: "Github",
        icons: github
    },
    {
        name: "Git",
        icons: git
    },
    {
        name:"Vs Code",
        icons:vscode
    },
    {
        name:"Postman",
        icons: postman,
    },
    {
        name:"Vercel",
        icons:vercel,
    },
    {
        name:"Netlify",
        icons:netlify
    }
]

const projects = [
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
        source_code_link:"https://github.com/soumya-rayast/To-Do-List",
        source_deploy_link:"https://melodic-sprite-bed2f2.netlify.app/"
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
        source_code_link:"https://github.com/soumya-rayast/CoinWave",
        source_deploy_link:"https://coinwavecrypto.netlify.app/"
    },
    {
        name: "Google Gemini Clone",
        description: "Created a responsive Google Clone using React.js, CSS, and the Gemini API, enabling new chats and data storage. Implemented real-time search results and persistent chat history for seamless cross-device functionality.",
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
        img: gemini,
        source_code_link:"https://github.com/soumya-rayast/Gemini-Clone",
        source_deploy_link:"https://main--geminicloned.netlify.app/"
    },
    {
        name: "Photo Stream ",
        description: "Developed PhotoStream with React and Firebase v10, featuring real-time CRUD operations, Firebase Authentication, and Firebase Storage for secure and efficient photo management.",
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
        img: as,
        source_code_link:"https://github.com/soumya-rayast/React-Firebase-WebApp",
        source_deploy_link:"https://react-firebase-web-app.vercel.app/"
    },
    {
        name: "Task Management Application",
        description: "Developed a task management web app using the MERN stack, featuring full CRUD functionality. Enabled users to create, read, update, and delete tasks seamlessly.",
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
        img: as,
        source_code_link:"dasfadf",
        source_deploy_link:"deqw"
    },
    {
        name: "BlogNest",
        description: "Developed a MERN stack blog website with full CRUD functionality, a comment section, login/sign-up components, and secure user authentication.",
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
        img: as,
        source_code_link:"dasfadf",
        source_deploy_link:"deqw"
    },
]

export {services,tech,projects};