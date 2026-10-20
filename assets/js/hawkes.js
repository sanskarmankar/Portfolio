// Interactive illustration of the Hawkes-intensity signal used in the momentum option-selling strategy.
// Runs on SIMULATED prices only: it shows the mechanics, not real results.
(function () {
  var svg = document.getElementById('hk-svg');
  if (!svg) return;
  var kIn = document.getElementById('hk-kappa'), qIn = document.getElementById('hk-q');
  var kOut = document.getElementById('hk-kappa-v'), qOut = document.getElementById('hk-q-v');
  var countOut = document.getElementById('hk-count');
  var NS = 'http://www.w3.org/2000/svg';
  var DAYS = 4, BARS = 75, N = DAYS * BARS, NORM = 20, WARM = 3, COOL = 6;
  var seed = 7, series;

  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function gauss(r) { var u = 1 - r(), v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

  // Calm drift with occasional volatility bursts that carry a directional push.
  function simulate(s) {
    var r = rng(s), p = 100, price = [], range = [], burst = 0, dir = 0;
    for (var i = 0; i < N; i++) {
      if (burst <= 0 && r() < 0.02) { burst = 8 + Math.floor(r() * 10); dir = r() < 0.5 ? -1 : 1; }
      var vol = burst > 0 ? 0.22 : 0.05, drift = burst > 0 ? dir * 0.26 : 0;
      var ret = drift + vol * gauss(r);
      p += ret; price.push(p);
      range.push(Math.abs(ret) + vol * 0.6 * r());
      burst--;
    }
    return { price: price, range: range };
  }

  function compute(kappa, q) {
    var x = series.range, n = x.length, energy = [], lam = [], jump = [], thr = [], sig = [];
    for (var i = 0; i < n; i++) {               // energy = (range / rolling std)^2, past bars only
      var a = Math.max(0, i - NORM + 1), m = 0, v = 0, c = i - a + 1;
      for (var j = a; j <= i; j++) m += x[j]; m /= c;
      for (j = a; j <= i; j++) v += (x[j] - m) * (x[j] - m);
      var sd = Math.sqrt(v / Math.max(1, c - 1)) || 1;
      energy.push(Math.pow(x[i] / sd, 2));
    }
    var decay = Math.exp(-kappa), acc = energy[0];
    for (i = 0; i < n; i++) { if (i) acc = acc * decay + energy[i]; lam.push(acc * kappa); }
    for (i = 0; i < n; i++) jump.push(i % BARS === 0 ? 0 : Math.abs(lam[i] - lam[i - 1]));
    for (var d = 0; d < DAYS; d++) {            // intraday expanding quantile: start of day -> current bar
      var seen = [], last = -99, lamSum = 0;
      for (var b = 0; b < BARS; b++) {
        i = d * BARS + b; seen.push(jump[i]); lamSum += lam[i];
        var sorted = seen.slice().sort(function (u, w) { return u - w; });
        var t = sorted[Math.min(sorted.length - 1, Math.floor(q * (sorted.length - 1)))];
        thr.push(b < WARM ? null : t);
        if (b >= WARM && b - last > COOL && jump[i] > t && lam[i] > lam[i - 1] && lam[i] > 1.25 * lamSum / (b + 1)) {
          last = b;
          var dir = series.price[i] - series.price[i - 3] >= 0 ? 1 : -1;
          sig.push({ i: i, dir: dir });
        }
      }
    }
    return { lam: lam, jump: jump, thr: thr, sig: sig };
  }

  function el(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); (parent || svg).appendChild(e); return e; }
  function path(vals, x, y) { var d = '', pen = false; vals.forEach(function (v, i) { if (v == null) { pen = false; return; } d += (pen ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); pen = true; }); return d; }

  function draw() {
    var kappa = +kIn.value, q = +qIn.value / 100;
    kOut.textContent = kappa.toFixed(2); qOut.textContent = Math.round(q * 100) + 'th';
    var r = compute(kappa, q);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var W = 900, L = 8, R = 8, panels = [[10, 150], [176, 86], [278, 86]];
    var x = function (i) { return L + i * (W - L - R) / (N - 1); };
    function scale(vals, top, h) {
      var lo = Infinity, hi = -Infinity;
      vals.forEach(function (v) { if (v != null) { lo = Math.min(lo, v); hi = Math.max(hi, v); } });
      if (hi === lo) hi = lo + 1;
      return function (v) { return top + h - (v - lo) / (hi - lo) * h; };
    }
    // day separators + panel labels
    for (var d = 1; d < DAYS; d++) el('line', { x1: x(d * BARS), x2: x(d * BARS), y1: 6, y2: 370, stroke: 'rgba(255,255,255,.08)', 'stroke-dasharray': '3 4' });
    [['Simulated price  (▲ long / ▼ short signal)', 0], ['Hawkes intensity λ', 1], ['|Δλ| jump vs intraday quantile threshold', 2]].forEach(function (t) {
      el('text', { x: L + 2, y: panels[t[1]][0] + 12, fill: '#737d8c', 'font-size': 11.5, 'font-family': 'JetBrains Mono, monospace' }).textContent = t[0];
    });
    var yp = scale(series.price, panels[0][0] + 18, panels[0][1] - 18);
    el('path', { d: path(series.price, x, yp), fill: 'none', stroke: '#e8ebf1', 'stroke-width': 1.4 });
    var yl = scale(r.lam, panels[1][0] + 18, panels[1][1] - 18);
    el('path', { d: path(r.lam, x, yl), fill: 'none', stroke: '#5cc8f5', 'stroke-width': 1.6 });
    var yj = scale(r.jump.concat(r.thr), panels[2][0] + 18, panels[2][1] - 18), base = panels[2][0] + panels[2][1];
    var hit = {}; r.sig.forEach(function (s) { hit[s.i] = 1; });
    r.jump.forEach(function (v, i) {
      el('line', { x1: x(i), x2: x(i), y1: base, y2: yj(v), stroke: hit[i] ? '#fbbf24' : 'rgba(163,172,186,.35)', 'stroke-width': 2 });
    });
    el('path', { d: path(r.thr, x, yj), fill: 'none', stroke: '#f87171', 'stroke-width': 1.3, 'stroke-dasharray': '4 3' });
    r.sig.forEach(function (s) {
      var cx = x(s.i), cy = yp(series.price[s.i]) + (s.dir > 0 ? 12 : -12);
      var pts = s.dir > 0 ? [cx, cy - 5, cx - 5, cy + 4, cx + 5, cy + 4] : [cx, cy + 5, cx - 5, cy - 4, cx + 5, cy - 4];
      el('polygon', { points: pts.join(' '), fill: s.dir > 0 ? '#3ddc97' : '#f87171' });
    });
    countOut.textContent = r.sig.length;
  }

  kIn.addEventListener('input', draw);
  qIn.addEventListener('input', draw);
  document.getElementById('hk-new').addEventListener('click', function () { seed = (seed * 7919 + 13) % 100003; series = simulate(seed); draw(); });
  series = simulate(seed);
  draw();
})();
