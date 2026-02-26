const accordions = document.querySelectorAll('[data-accordion]');

accordions.forEach((accordion) => {
  const items = accordion.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((otherItem) => {
        otherItem.classList.remove('is-open');
        const otherTrigger = otherItem.querySelector('.accordion-trigger');
        otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
