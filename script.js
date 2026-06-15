// عداد الأرقام التلقائي للإحصائيات
const counters = document.querySelectorAll('.counter');
const speed = 80;

const startCounters = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    
    const update = () => {
      const increment = Math.ceil(target / speed);
      count += increment;
      if (count < target) {
        counter.innerText = count;
        setTimeout(update, 25);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      startCounters();
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.5});

observer.observe(document.getElementById('stats'));