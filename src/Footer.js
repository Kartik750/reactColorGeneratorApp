import React from 'react';

const Footer = () => {

    const date=new Date();

  return (
    <footer>
        <p>Kartik &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer;
