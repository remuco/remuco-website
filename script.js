document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Fluid Smooth Scroll Architecture
    const interactiveLinks = document.querySelectorAll('.nav-menu a, .hero-action-group a, .nav-actions a');
    
    interactiveLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offset = 80;
                    const bodyPosition = document.body.getBoundingClientRect().top;
                    const sectionPosition = targetSection.getBoundingClientRect().top;
                    const finalOffsetPosition = sectionPosition - bodyPosition - offset;

                    window.scrollTo({
                        top: finalOffsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. High-Performance FAQ Row Triggers
    const faqTriggers = document.querySelectorAll(".faq-trigger");
    faqTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            this.classList.toggle("active");
            const structuralPane = this.nextElementSibling;
            
            if (structuralPane.style.maxHeight) {
                structuralPane.style.maxHeight = null;
            } else {
                structuralPane.style.maxHeight = structuralPane.scrollHeight + "px";
            }
        });
    });

    // 3. Live Dashboard Real-Time Visual Simulation
    const livePriceEl = document.getElementById("live-price");
    const liveBarEl = document.getElementById("live-bar");
    
    setInterval(() => {
        // Randomly fluctuate price between €45.00 and €55.00 to show live calculation updates
        const simulatedPrice = (45 + Math.random() * 10).toFixed(2);
        livePriceEl.innerText = `€${simulatedPrice}`;
        
        // Match the graphical rendering height dynamically to the price fluctuation
        const randomHeightPercent = 40 + Math.floor(Math.random() * 45);
        liveBarEl.style.height = `${randomHeightPercent}%`;
    }, 2500);

    // 4. Functional Enterprise Contact Form Panel Logic
    const enterpriseForm = document.getElementById("enterprise-form");
    const successAlert = document.getElementById("form-success-msg");

    enterpriseForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Stop standard page refreshing behavior
        
        // Hide submit button to signify ongoing background infrastructure processes
        const submitBtn = enterpriseForm.querySelector(".btn-form-submit");
        submitBtn.style.opacity = "0.5";
        submitBtn.innerText = "Transmitting Details...";
        submitBtn.disabled = true;

        setTimeout(() => {
            // Simulate processing pipeline success states
            successAlert.style.display = "block";
            submitBtn.innerText = "Request Received";
            enterpriseForm.reset();
        }, 1200);
    });
});
💡