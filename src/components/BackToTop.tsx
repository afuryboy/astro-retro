
import React, { useState, useEffect } from 'react';
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={scrollToTop} style={{display: showButton ? "flex" : "none"}}  className='rounded-full fixed bottom-8 right-8 w-10 h-10 flex items-center justify-center bg-neo-green border-2 z-50 cursor-pointer'>
      <ArrowUp />
    </div>
  )
};

export default BackToTopButton;