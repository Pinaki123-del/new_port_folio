  const text = "Software Developer | Web Enthusiast".split(" "); // split into words
  const element = document.getElementById("word-slide");
  let index = 0;

  function showWords() {
    if (index < text.length) {
      element.textContent += (index > 0 ? " " : "") + text[index];
      index++;
      setTimeout(showWords, 500); // delay between words
    }
  }

  // Start animation
  showWords();
 // Texts to show
  const texts = ["Software Developer", "Web Enthusiast"];
  let index = 0;
  const textElement = document.getElementById("slideshow-text");

  function changeText() {
    // fade out
    textElement.classList.add("opacity-0");

    setTimeout(() => {
      // update text
      textElement.textContent = texts[index];
      index = (index + 1) % texts.length;

      // fade in
      textElement.classList.remove("opacity-0");
    }, 700); // same as duration-700
  }

  // start with first text
  changeText();
  // change every 3 seconds
  setInterval(changeText, 3000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // // Contact Form Handling
        // const contactForm = document.getElementById('contact-form');
        // const formStatus = document.getElementById('form-status');

        // contactForm.addEventListener('submit', function(event) {
        //     event.preventDefault(); // Prevent the default form submission

        //     // Here you would typically send the form data to a backend server.
        //     // For now, we'll just show a success message.
        //     formStatus.classList.remove('text-red-500', 'text-green-500');
        //     formStatus.textContent = 'Sending...';

        //     // Simulate a delay for a server request
        //     setTimeout(() => {
        //         formStatus.classList.add('text-green-500');
        //         formStatus.textContent = 'Message sent successfully!';
        //         contactForm.reset(); // Clear the form fields
        //         // You can clear the status message after a few seconds
        //         setTimeout(() => {
        //             formStatus.textContent = '';
        //         }, 5000);
        //     }, 2000);
        // });
        