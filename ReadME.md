# Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Description

The objective of this project was to interact with SQL databases using server routes in conjunction with Heroku. We had to create all the neceesary routes to create, update, delete, and get the information from the SQL database. Doing so for multiple routes helped re-affirm my understanding and get valuable practice. I did a couple of things to help with troubleshooting along the way. One thing I did was to make my coding errors unique. I did so by making product-routes 400s, tag-routes 500s, and category-routes 600s with the line that the code is on being referenced as well. This helped me locate any error and quickly look into my code to see where I made a mistake. I also did a lot of console.log but removed them prior to commits after making sure everything was working properly. 

With this knowledge we will be able to find ways to quickly interact with SQL databases through heroku which is very streamlined. You are able to set up folders with associated routes for quick access to the Database along with the ability to quickly edit any necessary information within the tables. I really enjoyed this project because I could see the flow of information from the schema, seeds, models, and then to the routes. With each part being broken up I was able to tackle each section before moving on to another one. When I am faced with other challenges where we need to make the code from stratch it can feel rather overwhelming where to start. 

## Installation

This requires a lot of installation.

After downloading the code for testing, please run npm i. This will install all the necessary plugin data. Afterwards please create a .env file to assist with logging you into your mysql databases by providing the following: 
DB_NAME='ecommerce_db'
DB_USER='your username'
DB_PW='your SQL password'

At which point you will want to manually log into your SQL server and run source db/schema.sql; This will create the table. Then in your terminal type: npm run seed. This will populate the information from the seeds into the tables created by the schema. Once all of this is complete you may type: npm start   into your terminal which will create the server. Now that the server is operational you may now access it via heroku by typing in the URL http://localhost:3001/api/(products, tags, or category depending on which table you would like access to)

## Usage

[Feel free to click on this link for a walkthrough video](https://drive.google.com/file/d/1LgUwUC9ZYs88Y3jdgjGMj2QZU1pDt-s-/view)

## Credits

To my Teacher who went over some of the basics and provided one example to build off of to have a starting point. Also to one of my fellow students Crystal, we both ran into the same error while testing updating etc. She found the code: onUpdate: 'CASCADE' which I am also using in my code to get over that

## License

None