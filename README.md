# Quiz App

A simple quiz application built with React, TypeScript, TailwindCSS, and Vite. This app fetches quiz questions from the Quiz API and displays them for users to answer.

## Features

- Fetches and displays quiz questions.
- Tracks user score based on correct answers.
- Responsive UI using TailwindCSS.
- Real-time data fetching with API integration.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- NPM (or Yarn)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sahinmeric/quiz-app.git
   cd quiz-app
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Set up environment variables:**
     - Create a .env file in the root directory.
     - Add your API key to the .env file as shown below:
    
      ```bash
      VITE_API_KEY=your_api_key_here
      ```
      > **Note:** You can get your API key from [QuizAPI.io](https://quizapi.io/).
4. **Run the development server:**

   ```bash
   npm run dev
   ```
## Usage

After setting up, the app should run locally at `http://localhost:5173`. The app will fetch quiz questions from the Quiz API and display them for users.

## Project Structure

- **`src/components`**: Contains reusable components like `Home`, `Quiz`, and `Results`.
- **`src/hooks`**: Contains custom hooks like `useFetchQuizQuestions`.
- **`src/index.css`**: Contains global styling with TailwindCSS and custom styles.

## Environment Variables

| Variable       | Description               |
| -------------- | ------------------------- |
| `VITE_API_KEY` | API key for Quiz API      |

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Vite**: Fast frontend build tool.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [QuizAPI.io](https://quizapi.io/) - Quiz API for providing question data.
