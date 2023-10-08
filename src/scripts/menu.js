document.addEventListener('astro:page-load', () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process
  // https://docs.astro.build/en/guides/view-transitions/#astropage-load
  // since we are using view transitions, 
  // this event is a part of the flow why navigating
  // after this event we need to 
  // mount this event listener again
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("expanded");
  });

}, { once: false });

