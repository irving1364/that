import React, {useEffect, useState} from 'react';


const CarouselSection = () => {
    

 const [index, setIndex] = useState(0);
const handleNext = () => {
  setIndex((prevIndex) => {
    if (prevIndex === data.length - 1) {
      return 0;
    } else {
      return prevIndex + 1;
    }
  });
};

const handleBack = () => {
  setIndex((prevIndex) => {
    if (prevIndex === 0) {
      return data.length - 1;
    } else {
      return prevIndex - 1;
    }
  });
  };
    function handleChangeIndex(index) {
    setIndex(index);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente slide
      setIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);


  return (

    <>
    </>

  )
}
export default CarouselSection 