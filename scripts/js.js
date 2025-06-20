// DOM Elements
const contactBtn = document.getElementById('contactBtn');
const techButtons = document.querySelectorAll('.tech-btn');
const codeDisplay = document.getElementById('codeDisplay');
const contactForm = document.getElementById('contactForm');

// Code snippets for different technologies
const codeSnippets = {
    HTML: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Aylin Peralta</title>
</head>
<body>
    <h1>Desarrolladora Web</h1>
    <p>Creando experiencias digitales</p>
</body>
</html>`,
    
    CSS: `.developer {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 10px;
    padding: 20px;
    color: white;
    font-family: 'Inter', sans-serif;
}

.skills {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}`,
    
    JavaScript: `const developerProfile = {
    fullName: "Aylin Peralta",
    age: 17,
    city: "San Martín de los Andes",
    institution: "EPET N°12",
    focusArea: "Desarrollo Web",
    programmingLanguages: [
        "HTML", "CSS", "JavaScript", "Python"
    ],
    createSolution: function() {
        return "Transformando ideas en código";
    }
};

console.log(developerProfile.createSolution());`,
    
    Python: `class Developer:
    def __init__(self):
        self.name = "Aylin Peralta"
        self.age = 17
        self.location = "San Martín de los Andes"
        self.school = "EPET N°12"
        self.skills = ["HTML", "CSS", "JavaScript", "Python"]
    
    def create_solution(self):
        return "Desarrollando el futuro con código"
    
    def learn_new_tech(self, technology):
        self.skills.append(technology)
        print(f"¡Nueva tecnología aprendida: {technology}!")

# Crear instancia del desarrollador
aylin = Developer()
print(aylin.create_solution())`
};

// Contact button functionality
contactBtn.addEventListener('click', function() {
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 150);
    
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Tech button functionality
techButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tech = this.getAttribute('data-tech');
        
        // Remove active class from all buttons
        techButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Update code display with animation
        updateCodeDisplay(tech);
        
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 150);
    });
});

// Function to update code display
function updateCodeDisplay(tech) {
    const codeContent = codeDisplay.querySelector('code');
    
    // Fade out
    codeDisplay.style.opacity = '0.3';
    
    setTimeout(() => {
        // Update content
        if (codeSnippets[tech]) {
            codeContent.textContent = codeSnippets[tech];
        }
        
        // Apply syntax highlighting
        applySyntaxHighlighting(codeContent, tech);
        
        // Fade in
        codeDisplay.style.opacity = '1';
    }, 200);
}

// Simple syntax highlighting function
function applySyntaxHighlighting(element, tech) {
    let html = element.textContent;
    
    if (tech === 'HTML') {
        html = html.replace(/(&lt;[^&]*&gt;)/g, '<span style="color: #79c0ff;">$1</span>');
        html = html.replace(/(DOCTYPE|html|head|body|title|meta|h1|p)/g, '<span style="color: #ff7b72;">$1</span>');
    } else if (tech === 'CSS') {
        html = html.replace(/([.#][\w-]+)/g, '<span style="color: #79c0ff;">$1</span>');
        html = html.replace(/(background|border-radius|padding|color|font-family|display|gap|margin-top)/g, '<span style="color: #ffa657;">$1</span>');
    } else if (tech === 'JavaScript') {
        html = html.replace(/(const|function|return|console\.log)/g, '<span style="color: #ff7b72;">$1</span>');
        html = html.replace(/("[^"]*")/g, '<span style="color: #98d982;">$1</span>');
    } else if (tech === 'Python') {
        html = html.replace(/(class|def|self|return|print)/g, '<span style="color: #ff7b72;">$1</span>');
        html = html.replace(/("[^"]*")/g, '<span style="color: #98d982;">$1</span>');
        html = html.replace(/(#[^\n]*)/g, '<span style="color: #8b949e; font-style: italic;">$1</span>');
    }
    
    element.innerHTML = html;
}

// Contact form functionality
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    showNotification(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.`);
    
    // Reset form
    this.reset();
});

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Initialize
window.addEventListener('load', () => {
    // Set default active button
    const jsBtn = document.querySelector('[data-tech="JavaScript"]');
    if (jsBtn) {
        jsBtn.classList.add('active');
    }
    
    // Apply initial syntax highlighting
    const initialCode = codeDisplay.querySelector('code');
    if (initialCode) {
        applySyntaxHighlighting(initialCode, 'JavaScript');
    }
});
