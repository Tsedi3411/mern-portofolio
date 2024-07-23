
const express = require('express');
const router=require(express).Router();

const { Intro, About, Project, Contact, Experiance, Courses} = require('../models/portofoioModel');


router.get('/get-portfolio-data', async(req, res)=>{

    try{
        const intros= await Intro.find();
        const abouts= await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const Experiance = await Experiance.find();
        const courses = await Courses.find();

        res.status(200).status({
            intro: intros[0],
            about:abouts[0],
            projects: projects,  
            contacts: contacts[0],
            experiances: Experiance,
            courses: courses,
        })

    }catch(error){
       res.status(500).send(error);
    }
})


module.exports= router;