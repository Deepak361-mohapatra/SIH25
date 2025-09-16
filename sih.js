// JavaScript for Smart Tourist Safety Monitoring System

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Smart Tourist Safety Monitoring System initialized');
    
    // Add dynamic styles for animations
    addDynamicStyles();
    
    // Add interactive functionality to feature boxes
    initializeFeatureBoxes();
    
    // Enhance feature boxes with advanced interactions
    enhanceFeatureBoxes();
    
    // Initialize any additional interactive elements
    initializeInteractiveElements();
});

// Add hover effects and accessibility features to feature boxes
function initializeFeatureBoxes() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        // Add keyboard navigation support
        box.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Navigate to the linked page
                const href = this.getAttribute('href');
                if (href) {
                    window.location.href = href;
                }
            }
        });
        
        // Add click analytics
        box.addEventListener('click', function() {
            console.log('Feature clicked:', this.querySelector('h3').textContent);
            // Track navigation for analytics
            trackFeatureNavigation(this.querySelector('h3').textContent);
        });
    });
}

// Track feature navigation for analytics
function trackFeatureNavigation(featureName) {
    // Simple analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'feature_click', {
            'feature_name': featureName,
            'page_title': document.title
        });
    }
    console.log('Navigation tracked:', featureName);
}

// Add ripple effect to feature boxes
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced feature box interactions
function enhanceFeatureBoxes() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        // Add click ripple effect
        box.addEventListener('click', createRippleEffect);
        
        // Add loading state on click
        box.addEventListener('click', function(e) {
            const originalText = this.querySelector('h3').textContent;
            const loadingText = 'Loading...';
            
            // Show loading state briefly
            this.querySelector('h3').textContent = loadingText;
            this.style.opacity = '0.8';
            
            setTimeout(() => {
                this.querySelector('h3').textContent = originalText;
                this.style.opacity = '1';
            }, 300);
        });
        
        // Add pulse animation for Digital ID box
        if (box.getAttribute('href') === 'digital-id.html') {
            setInterval(() => {
                box.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    box.style.animation = '';
                }, 2000);
            }, 10000); // Pulse every 10 seconds
        }
    });
}

// Add CSS animations dynamically
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .feature-box:hover {
            animation: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize other interactive elements
function initializeInteractiveElements() {
    // Smooth scrolling for any future navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function for future API calls or data handling
function handleApiCall(endpoint, data) {
    // Placeholder for future API integration
    console.log('API call to:', endpoint, 'with data:', data);
}