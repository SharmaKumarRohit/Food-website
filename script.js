// <====================== SMOOTH SCROLLING ========================>
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//   <======================== EMAIL JS =========================>
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_wc0wk1z', 'template_mthl1mj', '#contact-form', 'nPyJNKA5SvPj1E7wX')
     .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

     }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
     })
}

contactForm.addEventListener('submit', sendEmail)