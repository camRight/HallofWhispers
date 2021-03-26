# HallofWhispers

Hall of Whispers is a collaborative React project designed to allow users to connect with others and create Dungeons and Dragons style adventures. RESTful server requests and responses enable CRUD functionality saved in a Mongo Database. A persistent connection with websockets (in the form of websocket.io) allows users to communicate with one another through direct messages enabled via handshaking.


## Table of Contents

* [Installation](#installation)
* [Technologies](#technologies)
* [Standards](#standards)
* [Images](#images)
* [Contributors](#contributors)
* [License](#license)
* [Live Deployment & Repo Links](#links)
* [Contact](#contact)

## Installation

### How to launch on Local Host:

1. Clone from this repo.

2. Next: Installing root dependencies and seed.
  - From the root directory of this project run `npm i` to install dependencies.
  - Then `npm run seed` for all seed data from MongoDB.

3. Navigate to `/client` directory in another terminal. This is one of the first subdirectories.
  - run `npm i` in terminal for all client dependencies.

4.  In root directory run `npm run dev` for backend server.

5.  In `/client` directory run `npm run start` to launch the local host application and display.

## Technologies

- [React](https://reactjs.org/docs/create-a-new-react-app.html) `create-react-app` executable in node.

- [Node.js](https://nodejs.org/en/docs/) 
- [NPM/NPX](https://docs.npmjs.com/)
- ["axios": "^0.21.1"](https://www.npmjs.com/package/axios)
- ["bcryptjs": "^2.4.3"](https://www.npmjs.com/package/bcryptjs)
- ["concurrently": "^6.0.0"](https://www.npmjs.com/package/concurrently)
- ["cors": "^2.8.5"](https://www.npmjs.com/package/cors)
- ["dotenv": "^8.2.0"](https://www.npmjs.com/package/dotenv)
- ["express": "^4.17.1"](https://expressjs.com/en/guide/routing.html)
- ["jsonwebtoken": "^8.5.1"](https://www.npmjs.com/package/jsonwebtoken)
- ["mongoose": "^5.12.0"](https://www.npmjs.com/package/mongoose)
- ["socket.io": "^4.0.0"](https://socket.io/)

## Standards

- Meets MVC Folder Structure Paradigm Standards

## Contributors
This project would not have been possible without the help of everyone on this team. In no particular order:

### [![](https://github.com/alzcheng.png?size=50)](https://github.com/alzcheng)             Albert Z Cheng

### [![](https://github.com/VictorMoscone.png?size=50)](https://github.com/VictorMoscone)             Victor Moscone

### [![](https://github.com/vgines73.png?size=50)](https://github.com/vgines73)             Vincent Gines

### [![](https://github.com/MikeFogz.png?size=50)](https://github.com/MikeFogz)             Mike Fogarty

### [![](https://github.com/camRight.png?size=50)](https://github.com/camRight)             Cameron Wright



## License

GNU General Public License v3.0

## Links

Heroku: https://hallofwhispers.herokuapp.com/login

Repo: https://github.com/camRight/HallofWhispers/
