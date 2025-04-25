document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const currentAnswer = item.querySelector('.faq-answer');
        const currentIcon = item.querySelector('.faq-icon');
        const isActive = currentAnswer && currentAnswer.classList.contains('active');

        // Закрываем все активные
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('active');
        });
        document.querySelectorAll('.faq-icon').forEach(icon => {
            icon.classList.remove('rotated');
        });

        // Открываем текущий, если он не был открыт
        if (currentAnswer && !isActive) {
            currentAnswer.classList.add('active');
            currentIcon.classList.add('rotated');
        }
    });
});