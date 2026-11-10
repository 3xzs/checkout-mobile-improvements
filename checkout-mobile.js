/* checkout-mobile.js
   On entering a step, scroll so the active step sits right under the sticky
   header + stepper, with the completed-step summary scrolled up out of view. */

// Always land on the active step, also when navigating back to this page
history.scrollRestoration = 'manual';

function scrollActiveStepToTop() {
  const step = document.querySelector('.step-card.active');
  const stepper = document.querySelector('.stepper');
  if (!step || !stepper) return;

  const gap = 12;
  const y = step.getBoundingClientRect().top + window.scrollY - stepper.getBoundingClientRect().bottom - gap;
  if (y <= 0) return;

  // A short step can't reach the top on its own; add room below it
  const shortfall = y + window.innerHeight - document.documentElement.scrollHeight;
  if (shortfall > 0) step.style.marginBottom = shortfall + 'px';

  window.scrollTo({ top: y, behavior: 'instant' });
}

// Wait for fonts so the measured offsets are final
window.addEventListener('load', scrollActiveStepToTop);
