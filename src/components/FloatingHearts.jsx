import { useEffect } from 'react';

const FloatingHearts = () => {
  useEffect(() => {
    const createHearts = () => {
      const heartsContainer = document.createElement('div');
      heartsContainer.style.position = 'fixed';
      heartsContainer.style.top = '0';
      heartsContainer.style.left = '0';
      heartsContainer.style.width = '100%';
      heartsContainer.style.height = '100%';
      heartsContainer.style.pointerEvents = 'none';
      heartsContainer.style.zIndex = '-1';
      heartsContainer.className = 'hearts';
      
      document.body.appendChild(heartsContainer);

      const heartCount = 20;
      
      for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.color = 'rgba(255, 107, 139, 0.5)';
        heart.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out ${Math.random() * 5}s infinite`;
        heart.style.opacity = '0';
        
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        
        heartsContainer.appendChild(heart);
      }
    };
    
    createHearts();

    return () => {
      const hearts = document.querySelector('.hearts');
      if (hearts) {
        document.body.removeChild(hearts);
      }
    };
  }, []);

  return null;
};

export default FloatingHearts;