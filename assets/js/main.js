document.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Timeline animation
  const items = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.5 });
  items.forEach(item => observer.observe(item));

  // Toggle project details
  window.toggleProjectDetails = function (element) {
    document.querySelectorAll('.project-item').forEach(item => {
      if (item !== element) item.classList.remove("active");
    });
    element.classList.toggle("active");
  };

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
      };

      fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you! Your message has been sent.');
          contactForm.reset();
        } else {
          alert('Oops! Something went wrong.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong.');
      });
    });
  }
});
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}

