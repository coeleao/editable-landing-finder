/**
 * FlixTV Landing Page - Pure JavaScript
 * No frameworks, no dependencies
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger
    const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
    if (mobileMenu.classList.contains('active')) {
      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    });
  });

  // ========================================
  // Floating CTA Visibility
  // ========================================
  const floatingCta = document.getElementById('floatingCta');
  const heroSection = document.querySelector('.hero');

  function handleFloatingCta() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (window.scrollY > heroBottom - 200) {
      floatingCta.classList.add('visible');
    } else {
      floatingCta.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleFloatingCta, { passive: true });

  // ========================================
  // Accordion (FAQ)
  // ========================================
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      
      // Close all items
      accordionItems.forEach(function(otherItem) {
        otherItem.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Intersection Observer for Animations
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.plan-card, .feature-card, .testimonial-card, .guarantee-point').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add animate-in styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // ========================================
  // CTA Button Click Tracking (placeholder)
  // ========================================
  document.querySelectorAll('.btn-cta').forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Here you can add tracking code (Google Analytics, Facebook Pixel, etc.)
      console.log('CTA clicked:', this.textContent.trim());
      
      // Example: Google Analytics event
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'click', {
      //     'event_category': 'CTA',
      //     'event_label': this.textContent.trim()
      //   });
      // }
    });
  });

  // ========================================
  // Plan Card Selection Effect
  // ========================================
  document.querySelectorAll('.plan-card .btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const planCard = this.closest('.plan-card');
      const planName = planCard.querySelector('.plan-name').textContent;
      const planPrice = planCard.querySelector('.price-value').textContent;
      
      // Here you would redirect to checkout or open a modal
      console.log('Selected plan:', planName, 'Price: R$' + planPrice);
      
      // Example: Redirect to checkout
      // window.location.href = '/checkout?plan=' + planName.toLowerCase();
      
      // For demo, show alert
      alert('Você selecionou o plano ' + planName + '!\n\nEm um site real, você seria redirecionado para a página de pagamento.');
    });
  });

  // ========================================
  // Mockup Play Button
  // ========================================
  const playBtn = document.querySelector('.mockup-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      // Here you could open a video modal
      alert('Em um site real, um vídeo demonstrativo seria reproduzido aqui.');
    });
  }

  // Initial calls
  handleScroll();
  handleFloatingCta();
});
