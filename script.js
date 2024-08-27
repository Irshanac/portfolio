// // Select the toggle and close buttons and the menu list
// const navToggle = document.getElementById('nav__toggle');
// const navClose = document.getElementById('nav__close');
// const navMenu = document.getElementById('nav__menu');

// // Event listener to open the menu when the toggle button is clicked
// navToggle.addEventListener('click', () => {
//   navMenu.classList.add('active'); // Show the menu by adding the 'active' class
// });

// // Event listener to close the menu when the close button is clicked
// navClose.addEventListener('click', () => {
//   navMenu.classList.remove('active'); // Hide the menu by removing the 'active' class
// });
// function scrollHeader() {
//     const header = document.getElementById('header');
    
//     // Check the vertical scroll position using window.scrollY
//     if (window.scrollY >= 50) {
//       header.classList.add('scroll-header'); // Add the class when scrolled past 50px
//     } else {
//       header.classList.remove('scroll-header'); // Remove the class if scrolled back up
//     }
//   }
  
//   // Add event listener for the window scroll event
//   window.addEventListener('scroll', scrollHeader);

//   let menuList = document.getElementById("menuList");
//   let menuIcon = document.getElementById("menuIcon");
  
//   menuList.style.maxHeight = "0px"; // Initial state, menu hidden
  
//   function toggleMenu() {
//       if (menuList.style.maxHeight == "0px") {
//           menuList.style.maxHeight = "300px"; // Show menu
//           menuIcon.classList.remove('fa-bars'); // Remove the bars icon
//           menuIcon.classList.add('fa-times'); // Add the close (X) icon
//       } else {
//           menuList.style.maxHeight = "0px"; // Hide menu
//           menuIcon.classList.remove('fa-times'); // Remove the close (X) icon
//           menuIcon.classList.add('fa-bars'); // Add the bars icon
//       }
//   }

function toggleMenu() {
  const menuList = document.getElementById("menuList");
  menuList.classList.toggle("active");
}
  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_o12fuvj";
    const templateID = "template_sios2tl";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
    }
  
  
  