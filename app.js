'use strict';
const content = window.PETES_LAW;
for (const element of document.querySelectorAll('[data-copy]')) element.textContent = content.copy[element.dataset.copy];
function make(tag, text, className) { const el = document.createElement(tag); if (text) el.textContent = text; if (className) el.className = className; return el; }
for (const item of content.timeline) {
  const row = make('li');
  row.append(make('p', item.date, 'eyebrow'), make('h3', item.title), make('p', item.text));
  const source = make('a', 'View source ↗', 'text-link'); source.href = item.source; row.append(source);
  document.querySelector('#timeline').append(row);
}
for (const [index, item] of content.news.entries()) {
  const card = make('article', null, 'news-card' + (item.verified ? '' : ' pending'));
  const top = make('div', null, 'card-top'); top.append(make('p', item.publisher, 'eyebrow'), make('span', item.verified ? 'COVERAGE' : 'PENDING'));
  card.append(top,make('h3', item.title),make('p', item.date, 'fine'));
  if(item.summary) card.append(make('p',item.summary,'article-preview'));
  if (item.verified) { const a=make('a','Read the coverage ↗','text-link'); a.href=item.url; a.setAttribute('aria-label','Read coverage from '+item.publisher); card.append(a); }
  else card.append(make('p','Link could not be verified. Not active in this preview.','fine'));
  document.querySelector('#news-grid').append(card);
}
