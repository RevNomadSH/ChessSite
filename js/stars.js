// document.getElementById('star-button').addEventListener('click', function(e) {
//     const button = this;
//     const starsContainer = button.closest('.hero__wrap').querySelector('.stars-container');
    
//     // Очистка предыдущих звёзд
//     starsContainer.innerHTML = '';

//     const rect = button.getBoundingClientRect();
    
//     // Явное позиционирование относительно нижнего края
//     const startY = rect.bottom;
//     const startXCenter = rect.left + rect.width / 2;

//     for(let i = 0; i < 16; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         // Углы только нижней полусферы (225°-315°)
//         const baseAngle = 225 + (i % 3) * 45; // 225, 270, 315
//         const angle = baseAngle + (Math.random() * 10 - 5);
//         const rad = angle * Math.PI / 180;
        
//         // Расчёт смещения (Y всегда положительный)
//         const distance = 180 + Math.random() * 70;
//         const moveX = Math.cos(rad) * distance;
//         const moveY = Math.abs(Math.sin(rad) * distance); // Гарантированно вниз

//         star.style.cssText = `
//             left: ${startXCenter + (Math.random() - 0.5) * 60}px;
//             top: ${startY}px;
//             --move-x: ${moveX}px;
//             --move-y: ${moveY}px;
//             --rotate: ${Math.random() * 360}deg;
//         `;

//         starsContainer.appendChild(star);
//     }

//     // Форсированный запуск анимации
//     setTimeout(() => {
//         starsContainer.querySelectorAll('.star').forEach(star => {
//             star.style.animation = 'none';
//             star.offsetHeight; // Триггер рефлоу
//             star.style.animation = 'explode 1.5s ease-out forwards';
//         });
//     }, 10);
// });

// document.getElementById('star-button').addEventListener('click', function(e) {
//     const button = this;
//     const starsContainer = button.closest('.hero__wrap').querySelector('.stars-container');
    
//     starsContainer.innerHTML = '';
//     const rect = button.getBoundingClientRect();

//     // Параметры для тонкой настройки:
//     const BASE_DISTANCE = 80;  // ▼▼▼ Уменьшено с 180 ▼▼▼
//     const HORIZONTAL_SPREAD = 40; // ▲▲▲ Уменьшен разброс по X ▲▲▲

//     for(let i = 0; i < 16; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         // Настройка углов и расстояния
//         const baseAngle = 225 + (i % 3) * 45;
//         const angle = baseAngle + (Math.random() * 8 - 4); // ▲ Меньший разброс
//         const rad = angle * Math.PI / 180;
        
//         const distance = BASE_DISTANCE + Math.random() * 40; // ▼ Уменьшено
//         const moveX = Math.cos(rad) * distance;
//         const moveY = Math.abs(Math.sin(rad) * distance);

//         star.style.cssText = `
//             left: ${rect.left + rect.width/2 + (Math.random() - 0.5) * HORIZONTAL_SPREAD}px;
//             top: ${rect.bottom}px;
//             --move-x: ${moveX}px;
//             --move-y: ${moveY}px;
//             --rotate: ${Math.random() * 360}deg;
//         `;

//         starsContainer.appendChild(star);
//     }

//     // Анимация
//     setTimeout(() => {
//         starsContainer.querySelectorAll('.star').forEach(star => {
//             star.style.animation = 'explode 1.2s ease-out forwards'; // ▲ Уменьшено время
//         });
//     }, 10);
// });

// document.getElementById('star-button').addEventListener('click', function(e) {
//     const button = this;
//     const starsContainer = button.closest('.hero__wrap').querySelector('.stars-container');
    
//     // Блокируем кнопку и добавляем стиль нажатия
//     button.classList.add('active');
//     button.disabled = true;

//     // Очистка предыдущих элементов
//     starsContainer.innerHTML = '';
//     const existingModal = document.querySelector('.modal');
//     if(existingModal) existingModal.remove();

//     // Параметры анимации
//     const BASE_DISTANCE = 80;
//     const HORIZONTAL_SPREAD = 40;
//     const rect = button.getBoundingClientRect();

//     // Создаём звёзды
//     for(let i = 0; i < 16; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
        
//         const baseAngle = 225 + (i % 3) * 45;
//         const angle = baseAngle + (Math.random() * 8 - 4);
//         const rad = angle * Math.PI / 180;
//         const distance = BASE_DISTANCE + Math.random() * 40;
//         const moveX = Math.cos(rad) * distance;
//         const moveY = Math.abs(Math.sin(rad) * distance);

//         star.style.cssText = `
//             left: ${rect.left + rect.width/2 + (Math.random() - 0.5) * HORIZONTAL_SPREAD}px;
//             top: ${rect.bottom}px;
//             --move-x: ${moveX}px;
//             --move-y: ${moveY}px;
//             --rotate: ${Math.random() * 360}deg;
//         `;

//         starsContainer.appendChild(star);
//     }

//     // Запускаем анимацию звёзд
//     setTimeout(() => {
//         starsContainer.querySelectorAll('.star').forEach(star => {
//             star.style.animation = 'explode 1.2s ease-out forwards';
//         });
//     }, 10);

//     // Создаём и показываем модальное окно через 3 секунды
//     const modal = document.createElement('div');
//     modal.className = 'modal';
//     modal.textContent = 'Модальное окно!';
//     document.body.appendChild(modal);

//     setTimeout(() => {
//         modal.style.display = 'block';
        
//         // Восстанавливаем кнопку через 1 секунду после показа модалки
//         setTimeout(() => {
//             button.classList.remove('active');
//             button.disabled = false;
//             starsContainer.innerHTML = '';
//             modal.remove();
//         }, 1000);
//     }, 3000);
// });

// document.getElementById('star-button').addEventListener('click', function () {
//     const heroWrap = this.closest('.hero__wrap');
//     if (!heroWrap) return; // Защита от ошибки
//     const container = heroWrap.querySelector('.stars-container');
  
//     const starTypes = ['images/icons/Star.svg', 'images/icons/LittleStar.svg']; // Укажи путь к SVG
//     const starCount = 5;
  
//     for (let i = 0; i < starCount; i++) {
//       const star = document.createElement('div');
//       star.classList.add('star');
//       const img = starTypes[Math.floor(Math.random() * starTypes.length)];
//       star.style.backgroundImage = `url('${img}')`;
  
//       const angle = Math.random() * Math.PI * 2;
//       const distance = 60 + Math.random() * 40;
//       const x = Math.cos(angle) * distance + 'px';
//       const y = Math.sin(angle) * distance + 'px';
  
//       star.style.setProperty('--x', x);
//       star.style.setProperty('--y', y);
//       star.style.left = '50%';
//       star.style.top = '50%';
//       star.style.transform = 'translate(-50%, -50%)';
  
//       container.appendChild(star);
  
//       star.addEventListener('animationend', () => star.remove());
//     }
//   });

document.getElementById('star-button').addEventListener('click', function(e) {
    const button = this;
    const heroWrap = button.closest('.hero__wrap');
    if (!heroWrap) return;
    
    const starsContainer = heroWrap.querySelector('.stars-container');
    const modal = document.getElementById('modal'); // Ваш модальный элемент
    
    // Сброс предыдущих звёзд
    starsContainer.innerHTML = '';
    
    // Параметры анимации
    const rect = button.getBoundingClientRect();
    const BASE_DISTANCE = 80;
    const HORIZONTAL_SPREAD = 40;

    // Создание звёзд
    for(let i = 0; i < 16; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const baseAngle = 225 + (i % 3) * 45;
        const angle = baseAngle + (Math.random() * 8 - 4);
        const rad = angle * Math.PI / 180;
        
        const distance = BASE_DISTANCE + Math.random() * 40;
        const moveX = Math.cos(rad) * distance;
        const moveY = Math.abs(Math.sin(rad) * distance);

        star.style.cssText = `
            left: ${rect.left + rect.width/2 + (Math.random() - 0.5) * HORIZONTAL_SPREAD}px;
            top: ${rect.bottom}px;
            --move-x: ${moveX}px;
            --move-y: ${moveY}px;
            --rotate: ${Math.random() * 360}deg;
        `;

        starsContainer.appendChild(star);
    }

    // Активация анимации звёзд
    setTimeout(() => {
        starsContainer.querySelectorAll('.star').forEach(star => {
            star.style.animation = 'explode 1.2s ease-out forwards';
        });
    }, 10);

    // Открытие модального окна после анимации звёзд
    setTimeout(() => {
        // Показ модалки
        modal.classList.add('active');
        
        // Обработчики закрытия
        const closeModal = () => {
            modal.classList.remove('active');
            starsContainer.innerHTML = ''; // Удаление звёзд
        };
        
        // Закрытие по клику на оверлей или крестик
        modal.querySelectorAll('[data-close]').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }, 1200); // Задержка = длительность анимации
});