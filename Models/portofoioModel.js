const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    wlcomeTxt: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const aboutSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }

});

const experianceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    }
});

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    }
});


module.exports={
    Intro : mongoose.model("intros", introSchema),
    About : mongoose.model("about", aboutSchema),
    Experiance : mongoose.model("experiance", experianceSchema),
    Projects : mongoose.model("projects", projectsSchema),
    Courses : mongoose.model("courses", courseSchema),
    Contact : mongoose.model("contact", contactSchema),
}