import dbzImg from '@/app/public/projpics/dbz-img.png'
import arsImg from '@/app/public/projpics/arsenal-proj.png'
import { StaticImageData } from 'next/image';

export interface InfoCardType {
    header: string;
    description: string;
}

export const cards: InfoCardType[] = [
    {
        header: "WHAT DO I DO?",
        description: "I’m a Web Developer with a strong passion for front-end web development and proficient in a wide range of industry standard modern tools and technologies in the development sphere. I focus on building modern, responsive, and accessible user interfaces using React and Next.js, with an emphasis on clean code and smooth user experiences. I enjoy turning ideas and designs into high-quality, production-ready applications and continuously improving my craft through hands-on projects and collaboration."
    },
    {
        header: "MY TOOLS & TECHNOLOGIES   ",
        description: "I work primarily with React (Vite) and Next.js, using TypeScript and JavaScript to build scalable, maintainable applications. My front-end stack includes Tailwind, Redux, TanStack Query/Router, and Framer Motion for polished interactions and animations. On the back end, I have experience with FastAPI (Python), MongoDB, Mongoose, and DynamoDB, allowing me to work confidently across the full stack when needed."
    },
    {
        header: "EXPERIENCE",
        description: "I completed an 8-month internship at Waste Creative, where I worked closely with engineers on real company projects. During this time, I gained hands-on experience with Git, React, and TypeScript, contributed to production codebases, and collaborated within a professional development where I participated in code reviews, debugging sessions, integrated RESTful APIs and understood the collaborative responsiblities of a web development team."
    },
]

type ModalCard = {
    imgPath: StaticImageData,
    title: string,
    text: string,
}

export const modals: ModalCard[] = [
    {
        imgPath: dbzImg,
        title: "Dragon Ball Z Wiki",
        text: "— A visually engaging, type-safe web application built with React, TypeScript, and Vite that displays detailed Dragon Ball Z character data sourced from a public API. Styled with Tailwind CSS and brought to life with Framer Motion animations, the project delivers a fast, responsive, and modern user experience. Highlights include clean component architecture, seamless API integration, and a strong focus on performance and UI polish."
    },
    {
        imgPath: arsImg,
        title: "Arsenal Website FC Recreation",
        text: "Arsenal FC Website Recreation — A technically rigorous rebuild of the Arsenal website using Next.js and TypeScript, focused on modern frontend architecture and data integrity. Styled with Tailwind CSS, the application integrates Redux for global state management, TanStack Query for efficient server-state handling, and Zod with React Hook Form for robust, type-safe form validation. Data is sourced from a legacy public Arsenal API, demonstrating the ability to adapt and modernize existing systems while delivering a performant, scalable user experience."
    }
]