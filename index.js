/* ══════════════════════════════════════
   index.js — Permana Sound
   ══════════════════════════════════════ */

// ── NOMOR WA ──
const WA_NUMBER = '628970633043';

// ── VIDEO MODAL ──
function openVideo(src) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('popupVideo');
  video.src = src;
  modal.style.display = 'flex';
  video.play();
}

document.querySelector('.video-close').onclick = function () {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('popupVideo');
  modal.style.display = 'none';
  video.pause();
  video.currentTime = 0;
};

// ── FAQ TOGGLE ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const ans = item.querySelector('.faq-a');
  const isOpen = btn.classList.contains('open');

  btn.closest('.faq-col').querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
  });

  if (!isOpen) {
    btn.classList.add('open');
    ans.classList.add('open');
  }
}

// ── LAZY LOAD VIDEO ──
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video');
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.load();
        videoObserver.unobserve(entry.target);
      }
    });
  });
  videos.forEach(video => videoObserver.observe(video));
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .testi-card, .why-item, .g-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});