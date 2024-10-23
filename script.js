import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
      dropbtn.addEventListener('click', () => {
        dropdown.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
    
    window.onclick = (event) => {
      if (!event.target.matches('.dropbtn')) {
        dropdowns.forEach(dropdown => {
          const dropdownContent = dropdown.querySelector('.dropdown-content');
          if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
          }
        });
      }
    };
    
  }, []);

  // Handle Donate Button Click
  const handleDonateClick = () => {
    window.location.href = "donate.html"; // Navigate to the donate page
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#who-we-are">Who Are We</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#gallery">Photo Gallery</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><button className="donate-btn" onClick={handleDonateClick}>Donate</button></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome to Our Donation Page</h1>
      </section>

      <section id="who-we-are">
        <h2>Who Are We</h2>
        <p>We are a nonprofit organization dedicated to helping those in need.</p>
      </section>

      <section id="what-we-do">
        <h2>What We Do</h2>
        <p>We provide resources to underprivileged communities and focus on various charitable causes.</p>
      </section>

      <section id="gallery">
        <h2>Photo Gallery</h2>
        <div className="carousel">
          <img src="path/to/photo1.jpg" alt="Gallery Image 1" />
          <img src="path/to/photo2.jpg" alt="Gallery Image 2" />
          <img src="path/to/photo3.jpg" alt="Gallery Image 3" />
          {/* Add more images as needed */}
        </div>
      </section>

      <section id="contact-us">
        <h2>Contact Us</h2>
        <p>Email: info@donation.org | Phone: +123 456 789</p>
        <div className="socials">
          <a href="https://www.instagram.com" target="_blank">
            <img src="path/to/instagram-icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <img src="path/to/tiktok-icon.png" alt="TikTok" className="social-icon" />
          </a>
        </div>
      </section>

      <footer>
        <p>Gracious Giving</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
