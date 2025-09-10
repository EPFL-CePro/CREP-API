# CREP-API
This API is used by the [CREP] project to create a link between [CePro-ExamsMGT]'s database and CREP.

## Routes
At this time, there is only one route available on this API :
- GET `/exams`
    - Used to retreive all the exams available in ExamsMGT's database.

## How to run
### First things first
1. Rename the `.env.example` file in `.env`, and update the variables with your own data. Variables are described in the [Variables](#variables) part.
2. It doesn't matter if you are using the [Node.js way](#node.js-way) or the [Docker way](#docker-way), you will need to have a MySQL database server up and running for the API to work properly.
If you decide to use the [Node.js way](#node.js-way), you will have to set up your MySQL by your own.
But if you use the [Docker way](#docker-way), a MySQL container will be created directly, alongside the container for the API.
3. But for both ways, you will have to make sure that your data structure is right, and that you have atleast a table named `exam` present in your database.
### Node.js way
1. Make sure to have [Node.js] and [NPM] installed
2. Install all dependencies using `npm install`
3. Start the program using `npm run start`
4. For live-reload, use `npm run dev` (needs [Nodemon])
5. API is now available on port 3000

### Docker way
1. Make sure to have [Docker] and [Docker compose] installed
2. Run `docker compose up`, and wait for the `crep-api-db` and `crep-api` containers to be up and running
3. API is now available on port 3000

### Variables
`MYSQL_HOST` → The hostname of your MySQL, if using the [Docker way](#docker-way) it should be the MySQL container name (default is `crep-api-db`)
`MYSQL_USER` → The username of your MySQL user to connect to the database
`MYSQL_PASSWORD` → The password of your MySQL user
`MYSQL_DATABASE` → The name of your MySQL database

 [CePro-ExamsMGT]: https://github.com/EPFL-CePro/CePro-ExamsMGT
 [CREP]: https://github.com/EPFL-CePro/CREP
 [Docker]: https://docker.com
 [Docker compose]: https://docs.docker.com/compose
 [Node.js]: https://nodejs.org
 [Nodemon]: https://npmjs.com/package/nodemon
 [NPM]: https://npmjs.org