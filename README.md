# Contact Form

![contact-form](/screenshots/contact-form.png)

## Live Demo
[https://patrjam.github.io/contact-form/](https://patrjam.github.io/contact-form/)

## Prerequisites
- `node > v14.x.x`
- `npm`

## Setup
- `git clone git@github.com:patrjam/contact-form.git` or equivalent `git clone https://github.com/patrjam/contact-form.git`
- in root folder: `npm install`
- `npm start` (app runs on default port `http://localhost:3000/`)

# Implemented functionality

- create simple web app of contact form
- form contains: `name`, `email`, `phone`, `message`
- mandatory: message, email OR phone
- if email OR phone has invalid format, it is not possible to submit form
- form submit is mocked with javascript function, which calls back after 3s 
- if `email='neexistujici@email.cz'`, mocked function returns error `"Neexistující emailová adresa"`
- web app is rendered fast
- form is created in React, with functional components
- all implementation details and another technologies are up to you