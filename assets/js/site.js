// Shared behaviour: mobile menu, click-to-zoom figures, copy-to-clipboard. No dependencies.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Lightbox for any image inside a .figure
  var figs = document.querySelectorAll('.figure img');
  if (figs.length) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Enlarged image');
    var big = document.createElement('img');
    big.alt = '';
    box.appendChild(big);
    document.body.appendChild(box);
    var close = function () { box.classList.remove('open'); big.removeAttribute('src'); };
    box.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    figs.forEach(function (img) {
      img.setAttribute('tabindex', '0');
      var open = function () { big.src = img.currentSrc || img.src; big.alt = img.alt; box.classList.add('open'); };
      img.addEventListener('click', open);
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
  }

  // Copy buttons: <button data-copy="text">
  var toast;
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var done = function () {
        if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast); }
        toast.textContent = 'Copied ' + text;
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });
})();
