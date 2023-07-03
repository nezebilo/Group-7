// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// eslint-disable-next-line no-unused-vars 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeatmapPage from './components/HeatmapPage/HeatmapPage';

function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

function MyRoutes() {
  let location = useLocation();

  return (
    <div>
      {/* Only show Header when not on LoginPage */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path='/heatmap' element={<HeatmapPage />} />
=======
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
>>>>>>> 7c332c7703e9042bc710f38b874b48b8c27609d3
      </Routes>
      {/* Only show Footer when not on LoginPage */}
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}


export default App;
