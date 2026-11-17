'use strict';
document.getElementById('study-search').addEventListener('input', function () {
  const query = this.value.trim().toLocaleLowerCase();
  let count = 0;
  document.querySelectorAll('.study-card').forEach(card => {
    card.hidden = !card.dataset.search.toLocaleLowerCase().includes(query);
    if (!card.hidden) count++;
  });
  document.querySelectorAll('.study-year').forEach(section => {
    section.hidden = Boolean(query) && !section.querySelector('.study-card:not([hidden])');
  });
  document.getElementById('study-no-results').hidden = count > 0 || !query;
});
