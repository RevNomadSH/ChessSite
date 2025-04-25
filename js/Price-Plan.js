function selectPlan(selectedElement) {
    const plans = document.querySelectorAll('.pricing-plan');
    plans.forEach(plan => {
        plan.classList.remove('active');
        plan.classList.add('inactive');
    });

    selectedElement.classList.add('active');
    selectedElement.classList.remove('inactive');
}
    
// Установим "Стратегическое мастерство" активным при загрузке
window.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.pricing-plan');
    if (plans.length >= 2) {
        plans.forEach(plan => plan.classList.add('inactive'));
        plans[1].classList.add('active');
        plans[1].classList.remove('inactive');
    }
});