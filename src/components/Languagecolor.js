import React, { useEffect, useState } from 'react';
import colors from "../styles/_settings.scss";

const LanguageColor = ({ language }) => {

  const [color, setColor] = useState();

  useEffect(() => {
    if( language) {
      if(language = "HTML") {
        setColor(color.color1)
      }
      }
    })

  return (
    <p className='languages' style={{ color }}>
    {/* s'il y a un pourcentage sinon il renvoit un tiret */}
    {language ? language.toFixed(1)}
</p>
  );
};

export default LanguageColor;
