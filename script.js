const slider = document.getElementById('slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 900, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -900, behavior: 'smooth' });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = questionBtn.querySelector('i');

  questionBtn.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight;

    // Close all
    faqItems.forEach(otherItem => {
      otherItem.querySelector('.faq-answer').style.maxHeight = null;
      otherItem.querySelector('i').classList.replace('fa-times', 'fa-plus');
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.replace('fa-plus', 'fa-times');
    } else {
      answer.style.maxHeight = null;
      icon.classList.replace('fa-times', 'fa-plus');
    }
  });
});
