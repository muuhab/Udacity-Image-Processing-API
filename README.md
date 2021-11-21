# Image Processing Api
## Features

- Resizing your image by applying height and width

## Tech


- [node.js] 
- [Express]


## Installation

Clone the repository

    git clone https://github.com/muuhab/Udacity-Image-Processing-API

Switch to the repo folder

    cd Udacity-Image-Processing-Api

Install all the dependencies using composer

    npm install

Start the local development server

    npm run start
You can now access the server at http://localhost:3000

Running Prettier and Lint

    npm run prettier && npm run lint
# Testing 

Run the testing with Jasmine

    npm run test

# building
    npm run build

## Routes
### Paramters
-   filename
-   width
-   height
### URL

-   **GET:** [http://127.0.0.1:3000/api/images?filename=fjord/](http://127.0.0.1:8000/api/images?filename=fjord/) (Display Image as it's original size)
-   **GET:** [http://127.0.0.1:3000/api/images?filename=fjord&width=100/](http://127.0.0.1:8000/api/images?filename=fjord&width=100/) (Modify image size)
-   **GET:** [http://127.0.0.1:3000/api/images?filename=fjord&width=100&height=100/](http://127.0.0.1:8000/api/images?filename=fjord&width=100&height=100/) (Modify image width and height)



## License

MIT



   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>



