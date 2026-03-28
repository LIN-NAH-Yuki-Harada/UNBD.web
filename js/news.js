/**
 * News Page - Filter functionality
 */

'use strict';

(function initNewsFilter() {
  const filterBtns = document.querySelectorAll('.news-filter__btn');
  const newsItems = document.querySelectorAll('.news-item[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter items
      newsItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });
})();
