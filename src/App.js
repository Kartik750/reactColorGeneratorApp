import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


function App() {

  const [newColor, setNewColor]=useState('');

  const [hexValue, setHexValue]=useState(''); // npm i colornames -S

  const [isDarkText, setIsDarkText]=useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newColor) return;
    if(!hexValue) return;
    setHexValue('');
    setNewColor('');
  }

  const img1="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img2="https://images.pexels.com/photos/1148496/pexels-photo-1148496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img3="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img4="https://images.pexels.com/photos/3488764/pexels-photo-3488764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img5="https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img6="https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img7="https://images.pexels.com/photos/707265/pexels-photo-707265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img8="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img9="https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img10="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const colors=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [backgroundImage, setBackgroundImage]=useState(img1);

  useEffect(() => {
      const interval = setInterval(() => {
        setBackgroundImage(colors[Math.floor(Math.random()*colors.length)]);
      }, 10000);
      return () => clearInterval(interval);
    }, [backgroundImage]);

  return (
    <div 
      className="App"
      style={{backgroundImage:`url(${backgroundImage})`}} 
    >
      <Header />
      <Content
        newColor={newColor}
        setNewColor={setNewColor}
        handleSubmit={handleSubmit}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Footer />
    </div>
  );
}

export default App;
