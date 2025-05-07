function selectPlan(selectedButton) {
    const buttons = document.querySelectorAll('.plan-button');

    buttons.forEach(button => {
        button.classList.remove('active');
        button.classList.add('inactive');
    });

    selectedButton.classList.add('active');
    selectedButton.classList.remove('inactive');
}



document.addEventListener('click', (e) => {
    const isInsidePricing = e.target.closest('.pricing-grid');

    // Если клик ВНЕ .pricing-grid → сбросить активность
    if (!isInsidePricing) {
        const buttons = document.querySelectorAll('.plan-button');
        buttons.forEach(button => {
            button.classList.remove('active');
            button.classList.add('inactive');
        });
    }
});