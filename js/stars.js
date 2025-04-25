document.getElementById('star-button').addEventListener('click', function(e) {
  const directions = [
      {x: 0, y: 100},    // Вниз
      {x: -100, y: 50},  // Влево-вниз
      {x: 100, y: 50}     // Вправо-вниз
  ];

  directions.forEach(dir => {
      for(let i = 0; i < 5; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          
          // Случайный разброс
          const offsetX = dir.x + (Math.random() - 0.5) * 50;
          const offsetY = dir.y + (Math.random() - 0.5) * 30;
          
          star.style.setProperty('--move-x', `${offsetX}px`);
          star.style.setProperty('--move-y', `${offsetY}px`);
          star.style.setProperty('--rotate', `${Math.random() * 360}deg`);

          this.appendChild(star);
          
          star.addEventListener('animationend', () => star.remove());
      }
  });
});