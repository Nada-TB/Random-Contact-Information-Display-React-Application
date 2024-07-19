# Random Contact Information Display React Application
a single-page React application that fetches and displays random contact information, including images, using a free API.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction
Developed a single-page React application that utilizes a free API to fetch and display random contact information, including images. The application features a button that, when clicked, reveals additional details such as the age of the contact. Leveraged the Randomiser API and useEffect hook to efficiently manage data fetching and component lifecycle

## Demo

### Live Demo

Check out the live demo [github](https://nada-tb.github.io/random-contacts-list/)


## Requirements

To run this project locally, ensure you have the following installed:

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **React.js**: This project is built using React.js. If you haven't already installed React.js globally, you can do so using npm:

  ```bash
  npm install -g create-react-app
  ```

- **Randomiser API**: You will need access to the Randomiser API to fetch random contact information. Obtain API access from [Randomiser API](https://randomuser.me/) and replace the API endpoint in your React application.

## Installation

Certainly! Let's include the command to run your React application locally in the **Installation** section:

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nada-TB/random-contacts-list.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   This command will install all necessary dependencies defined in `package.json`.

4. **Run the application**

   ```bash
   npm start
   ```

   This command starts the React development server. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.


## Usage
- List of Contacts: Upon launching the application, you will see a list of random contacts fetched from the Randomiser API. Each contact card typically includes an image and basic information such as name and location.

- View Additional Details: To view additional details about a contact, click on a button or element associated with each contact card. This action reveals more information, such as the contact's age or other relevant details provided by the API.

## Features

- Data Fetching: Utilized the Randomiser API to fetch random contact information, including names, images, and additional details.

- Dynamic Rendering: Implemented dynamic rendering to display the fetched contact information in a visually appealing manner.

- Button Interaction: Integrated button functionality that reveals additional details, such as the age of the contact, upon user interaction.

- Efficient Data Management: Leveraged the useEffect hook to manage side effects, ensuring efficient data fetching and component lifecycle management.

## Technologies Used

-React.js: Used for building the user interface and managing component lifecycle.
-JavaScript: Implemented functionality and logic using JavaScript.
-Randomiser API: Used to fetch random contact information including names, images, and additional details.
-useEffect hook: Utilized to manage side effects such as data fetching in React functional components.

## Project Structure

```plaintext
public/
├── index.html          # Main HTML file
└── favicon.ico         # Favicon icon

src/
├── app.js              # Main React application component
├── style.css           # CSS styles for the application
├── index.js            # Entry point for React application
└── contact-card.js     # Component for displaying contact cards

.gitignore              # Git ignore file
package.json            # Project dependencies and scripts
package-lock.json       # Dependency lock file
README.md               # Project documentation

```
## Challenges and Learnings

- Data Fetching: Implemented asynchronous data fetching using the Randomiser API to retrieve contact information, including names, images, and details. Overcoming challenges in handling asynchronous operations efficiently in a React environment was key to ensuring smooth data retrieval and rendering.

- Efficient Data Management: Leveraged the useEffect hook to manage side effects, ensuring optimal data fetching and component lifecycle management. This experience provided insights into managing component state and asynchronous operations effectively in React applications.

- API Integration: Successfully handled asynchronous data fetching and API requests in a React application. Learning to structure and manage API calls within React components improved the overall performance and responsiveness of the application.

These challenges provided valuable learning experiences in React.js development, data management, and integrating external APIs effectively.

## Future Improvements
- Search and Filter Functionality: Implement search and filter options to allow users to search for specific contacts or filter contacts based on criteria such as age, location, or gender.

- Sorting Options: Add sorting capabilities to arrange contact cards alphabetically, by age, or other relevant criteria, providing users with more control over how contacts are displayed.

- Pagination: Introduce pagination to manage large datasets of contacts more efficiently, improving performance and user experience by loading contacts in smaller, manageable chunks.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

---
