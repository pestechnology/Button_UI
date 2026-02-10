Button UI  is a basic Node.js + Express application that serves a simple UI page to test and understand different button properties and functionalities.

## Project Features

Runs on Node.js with Express server

Serves static frontend files from the public/ folder

Includes 3 different buttons to test UI behavior

Allows testing of button events and properties using JavaScript

## Tech Stack

Node.js

Express.js

HTML

CSS

JavaScript

## Folder Structure

button_ui/
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore

## Setup Instructions
1. Install Node.js

Make sure Node.js is installed on your system.

Check version:

node -v
npm -v

2. Install dependencies

Open terminal inside the project folder and run:

npm install

3. Run the application

Start the server using:

node server.js

4. Open in browser

After running, open:

http://localhost:3000

## How the Application Works

The Express server starts using server.js

It serves the frontend files from the public/ folder

The UI loads from public/index.html

Styling is applied from public/style.css

Button functionality and event handling is controlled by public/script.js
