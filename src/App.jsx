import React from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import FreshFruits from "./components/FreshFruits";
import EcoPackaging from "./components/EcoPackaging";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import DehydratedFlakesPowder from "./components/DehydratedFlakesPowder";
import KitchenSpicesPuries from "./components/KitchenSpicesPuries";
import FreshVegetables from "./components/FreshVegetables";
import { Route, Routes } from 'react-router-dom';
import DashBoard from "./components/DashBoard";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/Fresh Vegetables' element={<FreshVegetables />} />
        <Route path='/Fresh Fruits' element={<FreshFruits />} />
        <Route path='/Dehydrated Flakes & Powder' element={<DehydratedFlakesPowder />} />
        <Route path='/Kitchen Spices & Puries' element={<KitchenSpicesPuries />} />
        <Route path='/Eco Packaging' element={<EcoPackaging />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
