// BAKPLANLA — telefonda açılır menü
(function () {
  var btn = document.getElementById('menuBtn');
  var panel = document.getElementById('menuPanel');
  if (!btn || !panel) return;
  function ac(a) {
    btn.setAttribute('aria-expanded', a ? 'true' : 'false');
    btn.setAttribute('aria-label', a ? 'Menüyü kapat' : 'Menüyü aç');
    panel.classList.toggle('acik', a);
    if (panel.classList.contains('menu-panel')) document.body.classList.toggle('menu-acik', a);
  }
  btn.addEventListener('click', function () { ac(btn.getAttribute('aria-expanded') !== 'true'); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) ac(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') ac(false); });
})();
