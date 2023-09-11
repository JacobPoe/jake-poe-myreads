# Jake Poe's MyReads Project

This is my submission for Udacity's React nanodegree course's first project. Students were tasked with taking a skeleton project and "React-ifying" it. The starter project was meant to represent how the final result should look, but was completely hard-coded and all code was contained in App.js. The task was to break out that starter code into different functional components that consumed the BooksAPI supplied by Udacity for testing this project.

The project itself is creating a collection of virtual bookshelves. The homepage contains a list of 3 bookshelves, "Want to Read", "Currently Reading", and "Read". Each book contains a form element that allows the user to move the book to a different shelf or remove it from its current shelf. The project also contains a search page, located at `http://localhost:3000/search`. In the search bar you can type in predefined search terms to search different books. Any books returned from the query can be added to any shelf, and if any book is already on a shelf then that shelf value will be selected when opening the form.

This project leverages the React Router to navigate between the home page and the search page. All components are created as functional components and avoid following a class-based project structure.

## Building the Project

To build and run the project, first install all packages. You can do this by running `npm install` in a terminal located at the root of the repo (in the same folder as the `package.json` file). Once your install has completed, in the same terminal run the command `npm start`. This will automatically open a browser window at `http://localhost:3000` where you can see your app running.

> Note: this project was built using Node v16.20.2 and NPM v8.19.4. If you have difficulty building and running the project, you may try using [Node Version Manager](https://github.com/nvm-sh/nvm) to change your active version of Node.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Submission Context

This project was created as part of my coursework with [Udacity's React nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

To see the original codebase that served as a template for this project, check out Udacity's [MyReads repo](https://github.com/udacity/nd0191-c1-myreads/).
