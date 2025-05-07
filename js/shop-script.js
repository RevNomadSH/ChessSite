document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", function () {
      const price = this.parentElement.querySelector(".product-price");

      const isInCart = this.classList.contains("in-cart");

      if (isInCart) {
        // Возврат: показываем цену, меняем текст и стиль кнопки
        price.classList.remove("hidden");
        this.classList.remove("in-cart");
        this.textContent = "Купить";
      } else {
        // Преобразование в "В корзине"
        price.classList.add("hidden");
        this.classList.add("in-cart");
        this.textContent = "В корзине";
      }
    });
  });

  document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("click", function () {
      document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});