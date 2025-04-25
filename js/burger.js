document.addEventListener("DOMContentLoaded", () => {
    const burgerToggle = document.getElementById('burger-menu-toggle');
    const burgerMenu = document.getElementById('burger-menu');
    const closeBurger = burgerMenu.querySelector('.close-burger');

    const authToggle = document.getElementById('burger-auth-toggle');
    const authMenu = document.getElementById('burger-auth-menu');
    const closeAuth = authMenu.querySelector('.close-burger');

    // Открытие/закрытие бургеров
    burgerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerMenu.classList.toggle('active');
        authMenu.classList.remove('active');
    });

    authToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        authMenu.classList.toggle('active');
        burgerMenu.classList.remove('active');
    });

    closeBurger.addEventListener('click', () => burgerMenu.classList.remove('active'));
    closeAuth.addEventListener('click', () => authMenu.classList.remove('active'));

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && e.target !== burgerToggle) {
            burgerMenu.classList.remove('active');
        }
        if (!authMenu.contains(e.target) && e.target !== authToggle) {
            authMenu.classList.remove('active');
        }
    });
    const closeMenuOnClick = (menu, linksSelector) => {
        const links = menu.querySelectorAll(linksSelector);
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                menu.classList.remove('active');
            });
        });
    };

    // Для основного бургер-меню
    closeMenuOnClick(burgerMenu, 'a, button');

    // Для меню авторизации
    closeMenuOnClick(authMenu, 'button');

    // Закрытие при клике на якорные ссылки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            authMenu.classList.remove('active');
        });
    });
});
