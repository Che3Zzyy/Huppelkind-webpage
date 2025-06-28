document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // stop observing after fade-in
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(section => {
    observer.observe(section);
  });
});
