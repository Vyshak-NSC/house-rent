document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');
            
            // Toggle menu icon between bars and X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Favorite Button Toggle with Animation
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            // Add animation class
            this.classList.add('favorite-btn-animate');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('favorite-btn-animate');
            }, 300);
            
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ef4444'; // error-color variable
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });
    
    // Modern Sticky Header with Shrink Effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce padding when scrolling down
        if (scrollTop > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Hide header when scrolling down and show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Search Functionality with Visual Feedback
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            this.classList.add('btn-loading');
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            
            const searchInput = document.querySelector('.search-input input').value;
            const propertyType = document.querySelector('.filters select:nth-child(1)').value;
            const priceRange = document.querySelector('.filters select:nth-child(2)').value;
            const bedrooms = document.querySelector('.filters select:nth-child(3)').value;
            
            // This would normally trigger a form submission or API call
            console.log('Search parameters:', { 
                searchInput, 
                propertyType, 
                priceRange, 
                bedrooms 
            });
            
            // Simulate API call delay
            setTimeout(() => {
                // Remove loading state
                this.classList.remove('btn-loading');
                this.innerHTML = '<i class="fas fa-search"></i> Search Now';
                
                // For demo purposes, show an alert
                alert('Search complete! Here are your results.');
            }, 1500);
        });
    }
    
    // Smooth scrolling with enhanced behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // Get offset for header height
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const fadeElements = document.querySelectorAll('.feature-card, .step, .property-card, .testimonial-card');
    
    const fadeOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-element');
                observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);
    
    fadeElements.forEach(element => {
        element.classList.add('fade-element');
        fadeObserver.observe(element);
    });
    
    // Section headers animation
    const headerElements = document.querySelectorAll('.section-header');
    
    const headerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const headerObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.children;
                for (let i = 0; i < children.length; i++) {
                    // Add delay to each child element
                    setTimeout(() => {
                        children[i].classList.add('fade-in-element');
                    }, i * 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, headerOptions);
    
    headerElements.forEach(element => {
        Array.from(element.children).forEach(child => {
            child.classList.add('fade-element');
        });
        headerObserver.observe(element);
    });
    
    // Add CSS rules for mobile menu when active
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                box-shadow: var(--shadow);
                padding: 1rem;
                text-align: center;
                z-index: 999;
                animation: slideDown 0.3s ease forwards;
            }
            
            .auth-buttons.active {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 1rem;
                background-color: white;
                position: absolute;
                top: calc(100% + 200px); /* Adjust based on nav-links height */
                left: 0;
                right: 0;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                z-index: 999;
                animation: slideDown 0.3s ease forwards;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
        
        /* Animation styles */
        .fade-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-element {
            opacity: 1;
            transform: translateY(0);
        }
        
        .favorite-btn-animate {
            animation: pulse 0.3s ease;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
            }
            100% {
                transform: scale(1);
            }
        }
        
        /* Header scroll effect */
        .header-scrolled {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            box-shadow: var(--shadow);
            background-color: rgba(255, 255, 255, 0.95);
        }
    `;
    document.head.appendChild(style);
}); 