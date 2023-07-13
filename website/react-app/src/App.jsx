import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// old one
// import HeatmapPage from './components/HeatmapPage/HeatmapPage';
// new one
import HeatmapPage from './components/HeatmapPage/new/HeatmapPage';
function App() {
  return (
    <Router>
      <HeaderContainer />
      <MyRoutes />
      <Footer />
    </Router>
  );
}

function HeaderContainer() {
  let location = useLocation();

  return location.pathname !== '/login' && location.pathname !== '/signup' ? <Header /> : null;
}

function MyRoutes() {
  return (
    // <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/solutions' element={<HeatmapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    // </div>
  );
}



// function App() {
//   return (
//     <Router>
//       <MyRoutes />
//     </Router>
//   );
// }


// function MyRoutes() {
//   let location = useLocation();

//   return (
//     <div>
//       {/* Only show Header when not on LoginPage */}
//       {location.pathname !== '/login' && location.pathname !== '/signup' && <Header />}

//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route path='/solutions' element={<HeatmapPage />} />

//         <Route path="/login" element={<LoginPage />} />

//         <Route path="/signup" element={<SignupPage/>}/>
//       </Routes>
      
//       {/* Only show Footer when not on LoginPage */}
//       {location.pathname !== '/login' && <Footer />}
//     </div>
//   );
// }
// import './App.css';
// import ZoneComponent from  './components/BackendAPI/ZoneComponent'
// function App() {
//   return (
//     <div>
//       <ZoneComponent />
//     </div>
//   );
// }

export default App;
