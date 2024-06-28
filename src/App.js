import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//import Animation from './images/welcomeAnimation.gif';
import HomePage from './components/HomePage';
import PolicyPage from './components/PoliciesPage';

const App =()=> {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/policies" element={<PolicyPage />} />
        </Routes>
    )
  );
}

export default App;
