import { useState } from 'react'
import Question from './components/QuestionPage.jsx'
import YesPage from './components/YesPage.jsx'
import './App.css'
function App() {
  const [showYesPage, setShowYesPage] = useState(false);

  const handleYesClick = () => {
    setShowYesPage(true);
  };

  return (
    <div className="app">
      {!showYesPage ? (
        <Question onYesClick={handleYesClick} />
      ) : (
        <YesPage />
      )}
    </div>
  );
}

export default App;