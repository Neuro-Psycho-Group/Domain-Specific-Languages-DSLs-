/* nav.js — inject shared nav and footer into every page */

const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">DSL</div>
      <div>
        <span class="nav-logo-text">Domain Specific</span>
        <span class="nav-logo-sub">Languages</span>
      </div>
    </a>
    <button class="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="index.html">Overview</a></li>
      <li><a href="history.html">History</a></li>
      <li><a href="applications.html">Applications</a></li>
      <li><a href="future.html">Future</a></li>
      <li><a href="tidbits.html">Tidbits</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">Domain Specific Languages</div>
      <div class="footer-tagline">// A structured exploration of purposeful language design</div>
    </div>
    <nav>
      <ul class="footer-nav">
        <li><a href="index.html">Overview</a></li>
        <li><a href="history.html">History</a></li>
        <li><a href="applications.html">Applications</a></li>
        <li><a href="future.html">Future</a></li>
        <li><a href="tidbits.html">Tidbits</a></li>
      </ul>
    </nav>
    <div class="footer-copy">
      A reference guide to domain specific languages &nbsp;·&nbsp; Built as a static GitHub Pages site
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
