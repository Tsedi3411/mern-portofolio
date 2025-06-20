import React from 'react'
import SectionTitle from '../../component/SectionTitle'


function About() {
    const skills=[
        "Javasript",
        "React",
        "tailwindcss",
        "Node",
        "Express",
        "Mongodb",
        "Postgresql"
       
    ]
    return (
        <div>
            <SectionTitle title="About Me" />
            <div className="flex w-full items-center justify-center sm:flex-col">
            <div
                className="h-[250px] w-[250px] m-2 sm:w-full flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
                <img className="h-[250px] w-[250px] object-cover rounded-full m-4" src="./images/ts.jpg" alt="my Picture" />
            </div>
            <div
                className='flex flex-col gap-5 w-1/2 sm:w-full animate-fade-in-left'
                style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
                <p className='text-white'>
                my name is Tsedenya Alebel , i was born in December 08 , 1998 in european calender ,
                i get my degree from wachemo university in 2021 after graduation i got a job there as 
                an assistant lecturer after one year of teaching different cources i came to Addis Ababa
                to learn Msc in software engineering.
                </p>
                <p className="text-white items-center justify-center">
                I was teaching Html, css, javascript , java for 1 year though i have lot interest in web 
                development and i want that to be my carrier and that is why i am practicing every day to 
                fullfill my interest, 
                </p>
            </div>
            </div>
            <div
            className="flex flex-col items-center justify-center mt-8 animate-fade-in-right"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
            >
            <h1 className="text-tertiary text-xl text-center">These are a few Technologies I have been practicing recently</h1>
            <div className="flex flex-wrap mt-5 gap-10 justify-center">
                {skills.map((skill, index) => (
                <div className="border border-tertiary py-3 px-5" key={index}>
                    <h1 className="text-tertiary">{skill}</h1>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default About