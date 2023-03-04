# E-commerce Back End

## Description

  This application is an entire back end api. It started with some code I recieved from the University of Minnesota Bootcamp, and that code was certainly not the way I wanted it. Regardless I made this api and database work conviently and effiently with RESTFull and CRUD methods! 

## Video

  -This application had a very comprehensive video tutorial and I strongly recomend watching it if you are looking to learn from this application: [VIDEO](https://drive.google.com/file/d/12tDyHruIH_I1TsqLQR-rZwkF3NT5palg/view?usp=sharing)

## Table of Contents

- [why?](#why)
- [Installation](#installation)
- [Usage](#usage)
- [Tech-Stack](#tech-stack)
- [License](#license)

## WHY

  This project was great for learning lots more about sequelize controllers, In other projects I was really able to create my own controllers, and now I had to understand someone elses. although I had a decent understanding of what the routes were accomplishing, it took some more time to wrap my head around the controllers and how they related to the api, and how that gets returned to a front end, or in this case a user!

## Installation

  -I have made a video tutorial on how to install, use, and work with this back end, which you can find
   [Here](https://drive.google.com/file/d/12tDyHruIH_I1TsqLQR-rZwkF3NT5palg/view?usp=sharing)

  -please clone or download this repository [HERE](https://github.com/MiloCohenElyanow/ORM-E_Commerce).

  -once your file is setup with contents, open this project with a terminal running with node, or that has access to node.

  -then run {npm i}, to install dependencies for this project
  
  -then make a .env file, and add
  DB_NAME={your db name}
  DB_USER={your db username}
  DB_PW={your sql secure password}

  -then in db/ db.js change ecommercedb to your database name, copy and past that into your Sql workbench, run the script. Note the script only drops and creates the database since we are using sequelize to do everything else!

  -now run {npm run seed} , this will seed your database right from your code, no more pesky copy and pasting into the sql workbench ! you will get feedback in your console when the tables are seeded succefully

  -then run {npm run server}, and your back end application is running localy! since this is only a back-end application, you will need to hit the routes with some kind of route hitter, I use insomnia, and that is in the tutorial. Any application like Insomnia or Postman will work just fine! I give lots of good examples on how to test these routes in the video so please refere to the video, or just refer the routes and controllers, and make your own examples.

## Usage

  do whatever you want with this project if you have questions feel free to contact me @ milocohenelyanow@gmail.com

## Tech Stack

    - NODE: Express, Sequelize, mysql2.
    - multi relation database relationships.
    - In depth Advanced file structuring

## License

  MIT License

Copyright (c) [2023] [Milo Cohen-Elyanow]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[CHECKOUTLISCENCEHERE](https://choosealicense.com/licenses/mit/)