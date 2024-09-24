

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.querySelector('.ans');
        const icon = faq.querySelector('span');

        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.innerText = 'keyboard_arrow_down'; 
        } else {
            answer.classList.add('hidden');
            answer.style.maxHeight = null; 
            icon.innerText = 'keyboard_arrow_up'; 
        }
    });
});
