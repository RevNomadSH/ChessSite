document.addEventListener('DOMContentLoaded', function() {
  // Модальное окно для героя
  const heroModal = document.getElementById("hero-modal");
  const starButton = document.getElementById("star-button");
  
  if (starButton && heroModal) {
      starButton.addEventListener('click', function(e) {
          e.preventDefault();
          heroModal.classList.add("active");
      });
  } else {
      console.error("Элементы для hero-modal не найдены");
  }

  // Модальное окно для авторизации
  const authModal = document.getElementById("auth-modal");
  const authButton = document.getElementById("EnterAccount");
  
  if (authButton && authModal) {
      authButton.addEventListener('click', function(e) {
          e.preventDefault();
          authModal.classList.add("active");
      });
  } else {
      console.error("Элементы для auth-modal не найдены");
  }
  // Закрытие модальных окон
function closeModal(e) {
  if(e.target.classList.contains("modal-overlay") || 
     e.target.closest(".telephone-contacts__form_index-del")) {
    document.querySelectorAll(".modal-overlay").forEach(modal => {
      modal.classList.remove("active");
    });
  }
}

document.addEventListener('click', closeModal);
});
