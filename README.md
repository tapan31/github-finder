# GitHub Finder

GitHub Finder is a web application built with React.js and Tailwind CSS that allows you to search for GitHub users by their username and display their details.

## [Live Demo](https://github-finder-lyart-gamma.vercel.app/)

## Features

- Search for GitHub users by their username
- View user details such as name, bio, location, followers, and more
- See a list of the user's repositories with details like name, description, and creation date

## Technologies Used

- React.js
- Tailwind CSS
- Axios (HTTP client)
- GitHub REST API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tapan31/github-finder.git

2. Navigate to the project directory:

   ````bash
   cd github-finder
3. Install the dependencies:

   ````bash
   npm install
4. Set up environment variables:
  - Create a .env file in the root of the project.
  - Add the following environment variables to the .env file:  
  
   ```bash
   REACT_APP_GITHUB_URL=https://api.github.com
   REACT_APP_GITHUB_TOKEN=your_github_token
```
 Replace your_github_token with your personal GitHub API token. You can obtain a token by following the GitHub documentation.
