// Ember particles
    (function () {
      var field = document.getElementById('emberField');
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!field || reduced) return;
      var count = window.innerWidth < 600 ? 12 : 22;
      for (var i = 0; i < count; i++) {
        var e = document.createElement('span');
        e.className = 'ember';
        var left = Math.random() * 100;
        var delay = Math.random() * 10;
        var dur = 6 + Math.random() * 6;
        var drift = (Math.random() * 80 - 40) + 'px';
        var size = 2 + Math.random() * 3;
        e.style.left = left + '%';
        e.style.animationDelay = delay + 's';
        e.style.animationDuration = dur + 's';
        e.style.setProperty('--drift', drift);
        e.style.width = size + 'px';
        e.style.height = size + 'px';
        field.appendChild(e);
      }
    })();

    // Scroll reveal
    (function () {
      var items = document.querySelectorAll('.reveal');
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        items.forEach(function (el) { el.classList.add('in'); });
        return;
      }
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      items.forEach(function (el) { obs.observe(el); });
    })();
