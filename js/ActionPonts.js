document.addEventListener('DOMContentLoaded', function() {
    // Модальное окно для героя
    const heroModal = document.getElementById("hero-modal");
    const starButton = document.getElementById("star-button");

    if (starButton && heroModal) {
        starButton.addEventListener('click', function(e) {
            e.preventDefault();
            heroModal.classList.add("active");
        });
    }

    // Общее модальное окно для авторизации/регистрации
    const authModal = document.getElementById("auth-modal");

    // Кнопки для открытия
    const authButtons = [
        document.getElementById("EnterAccount"),
        document.getElementById("EnterAccountMobile"),
        document.getElementById("EnterAccountMobileReg"),
        document.getElementById("Registration")
    ];

    // Обработчик для всех кнопок авторизации
    authButtons.forEach(button => {
        if (button && authModal) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                authModal.classList.add("active");
            });
        }
    });

    // Закрытие модальных окон
    function closeModal(e) {
        if(e.target.classList.contains("modal-overlay") ||
            e.target.closest(".modal-close")) {
            document.querySelectorAll(".modal-overlay").forEach(modal => {
                modal.classList.remove("active");
            });
        }
    }

    document.addEventListener('click', closeModal);
});
