const sectionHeroEl = document.querySelector('.hero-section');
const navEl = document.querySelector('.nav');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      navEl.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      navEl.classList.remove('sticky');
    }
  },
  {
    //in the view port
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
