// Death scenarios array
const deathScenarios = [
    "Tripped over a garden gnome",
    "Got stuck in an infinite Zoom call",
    "Overdosed on Kerala parottas",
    "Turned into a unicorn while chasing rainbows",
    "Slipped on a banana peel thrown by a monkey",
    "Laughed so hard at a cat meme that you stopped breathing",
    "Choked on an extra-large bubble tea straw",
    "Tried to take a selfie with a crocodile",
    "Swallowed too much air while blowing balloons",
    "Hugged a cactus thinking it was a friend",
    "Swallowed by a giant marshmallow",
    "Fell asleep on a treadmill that never stopped",
    "Eaten by a vegan zombie",
    "Tried to iron clothes while wearing them",
    "Laughed so hard you forgot to breathe",
    "Slipped on spilled glitter and vanished dramatically",
    "Tried to selfie with a beehive",
    "Choked on popcorn during a movie plot twist",
    "Slipped on spilled coffee while rushing to class",
    "Got hit by a bicycle while taking a perfect selfie",
    "Tripped over your own untied shoelaces",
    "Laughed so hard at a friend's joke you couldn't recover",
    "Forgot to look both ways while jaywalking",
    "Slipped in the bathroom while singing loudly",
    "Slipped while rushing to answer the doorbell",
    "Got electrocuted trying to charge your phone with a broken wire",
    "Hit your head on a cupboard you left open",
    "Burned your tongue on hot tea and gave up",
    "Got stung by too many mosquitoes at once",
    "Tripped while trying to run in flip-flops",
    "Slipped on spilled shampoo in the bathroom",
    "Tried to eat ice cream too fast and froze your brain",
    "Got sunburned so badly you melted into the sand"
];

let currentPrediction = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Create random floating emojis
    setInterval(createRandomFloatingEmoji, 5000);

    // Close modals when clicking outside
    window.onclick = function(event) {
        const certificateModal = document.getElementById('certificateModal');
        const shareModal = document.getElementById('shareModal');
        
        if (event.target == certificateModal) {
            certificateModal.style.display = 'none';
        }
        if (event.target == shareModal) {
            shareModal.style.display = 'none';
        }
    }

    // Add easter eggs and interactive effects
    addEasterEggs();
    addInteractiveEffects();
    
    // Initialize scroll animations
    initScrollAnimations();
});

function predictDeath() {
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    if (!name || !birthdate) {
        alert('Please fill in all fields before meeting your doom! 💀');
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 0 || age > 150) {
        alert('Please enter a valid birthdate! Time travel is not supported yet. 🕰');
        return;
    }

    const yearsToAdd = Math.floor(Math.random() * 51) + 10;
    const deathDate = new Date();
    deathDate.setFullYear(deathDate.getFullYear() + yearsToAdd);
    deathDate.setMonth(Math.floor(Math.random() * 12));
    deathDate.setDate(Math.floor(Math.random() * 28) + 1);

    const scenario = getRandomDeathScenario();
    const deathAge = age + yearsToAdd;
    const lifeProgress = Math.min((age / deathAge) * 100, 100);

    currentPrediction = {
        name,
        birthdate,
        deathDate,
        scenario,
        currentAge: age,
        deathAge,
        lifeProgress
    };

    displayResults();
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function displayResults() {
    const resultBox = document.getElementById('resultBox');
    const deathInfo = document.getElementById('deathInfo');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    const prediction = currentPrediction;
    const formattedDate = prediction.deathDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const daysRemaining = Math.floor((prediction.deathDate - new Date()) / (1000 * 60 * 60 * 24));

    deathInfo.innerHTML = `
        <div style="font-size: 1.5rem; margin-bottom: 1rem;">
            🎯 <strong style="color: #9d4edd;">${prediction.name}</strong>, your doom has been calculated!
        </div>
        <div>📅 <strong>Death Date:</strong> ${formattedDate}</div>
        <div>⚰ <strong>Cause of Death:</strong> ${prediction.scenario}</div>
        <div>🎂 <strong>Age at Death:</strong> ${prediction.deathAge} years old</div>
        <div style="font-size: 1.2rem; color: #00ff41;">
            💀 You have approximately ${formatNumber(daysRemaining)} days left to live!
        </div>
    `;

    setTimeout(() => {
        progressBar.style.width = prediction.lifeProgress + '%';
        progressText.textContent = `Life Progress: ${prediction.lifeProgress.toFixed(1)}%`;
    }, 500);

    resultBox.style.display = 'block';
}

function generateCertificate() {
    if (!currentPrediction) {
        alert('Please predict your death first! 💀');
        return;
    }

    const prediction = currentPrediction;
    const certificateContent = document.getElementById('certificateContent');
    const formattedDate = prediction.deathDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const certificateNumber = `DOOM-${Math.floor(Math.random() * 100000)}`;

    certificateContent.innerHTML = `
        <div class="certificate-logo">
            💀<br>DEATH<br>PREDICTOR
        </div>
        <h2>💀 DEATH CERTIFICATE 💀</h2>
        <div class="certificate-content">
            <h3 style="color: #9d4edd; margin-bottom: 1rem; text-align: center;">OFFICIAL DOOM DOCUMENT</h3>
            <p><strong>Full Name:</strong> ${prediction.name}</p>
            <p><strong>Date of Birth:</strong> ${new Date(prediction.birthdate).toLocaleDateString()}</p>
            <p><strong>Predicted Date of Death:</strong> ${formattedDate}</p>
            <p><strong>Age at Death:</strong> ${prediction.deathAge} years</p>
            <p><strong>Cause of Death:</strong> ${prediction.scenario}</p>
            <p><strong>Certificate Number:</strong> ${certificateNumber}</p>
            <div class="certificate-footer">
                <p><strong>Issued by:</strong> Death Predictor Authority</p>
                <p style="color: #ff0000;"><strong>⚠ Please don't use this for insurance claims.</strong></p>
                <p><em>This certificate is for entertainment purposes only and is not legally binding.</em></p>
            </div>
        </div>
        <div class="certificate-seal">
            💀<br>OFFICIAL<br>SEAL
        </div>
    `;

    document.getElementById('certificateModal').style.display = 'block';
}

function closeCertificate() {
    document.getElementById('certificateModal').style.display = 'none';
}

function downloadImage() {
    if (!currentPrediction) {
        alert('Please predict your death first! 💀');
        return;
    }

    const certificateElement = document.getElementById('certificateContent');
    
    // Show loading message
    const downloadBtn = document.querySelector('.modal-buttons .cert-btn');
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '⏳ Creating Image...';
    downloadBtn.disabled = true;

    // Use html2canvas to capture the certificate
    html2canvas(certificateElement, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        width: certificateElement.scrollWidth,
        height: certificateElement.scrollHeight
    }).then(canvas => {
        // Convert canvas to JPG
        const dataURL = canvas.toDataURL('image/jpeg', 0.95);
        
        // Create download link
        const link = document.createElement('a');
        link.download = `${currentPrediction.name}_DeathCertificate.jpg`;
        link.href = dataURL;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset button
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        
        alert('Certificate image downloaded successfully! 📸💀');
    }).catch(error => {
        console.error('Error generating image:', error);
        alert('Error generating image. Please try again.');
        
        // Reset button
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
    });
}

function shareResult() {
    if (!currentPrediction) {
        alert('Please predict your death first! 💀');
        return;
    }
    
    document.getElementById('shareModal').style.display = 'block';
}

function shareCertificate() {
    if (!currentPrediction) {
        alert('Please predict your death first! 💀');
        return;
    }
    
    document.getElementById('shareModal').style.display = 'block';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function getShareText() {
    if (!currentPrediction) return '';
    
    const prediction = currentPrediction;
    const formattedDate = prediction.deathDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return `💀 My death has been predicted! 💀

I, ${prediction.name}, will die on ${formattedDate} at age ${prediction.deathAge}.

Cause: ${prediction.scenario}

😱 Want to know your doom? Try the Death Predictor!`;
}

function shareToFacebook() {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareToTwitter() {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareToWhatsApp() {
    const text = encodeURIComponent(getShareText() + '\n\n' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareToInstagram() {
    // Instagram doesn't have direct URL sharing, so we copy to clipboard
    copyToClipboard();
    alert('Text copied to clipboard! Open Instagram and paste it in your story or post. 📸💀');
}

function shareToSnapchat() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.snapchat.com/share?url=${url}`, '_blank');
}

function shareToThreads() {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`https://threads.net/intent/post?text=${text}%20${url}`, '_blank');
}

function copyToClipboard() {
    const shareText = getShareText() + '\n\n' + window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Death prediction copied to clipboard! 📋💀');
        }).catch(() => {
            fallbackCopyToClipboard(shareText);
        });
    } else {
        fallbackCopyToClipboard(shareText);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('Death prediction copied to clipboard! 📋💀');
    } catch (err) {
        alert('Unable to copy to clipboard. Please copy the text manually.');
    }
    
    document.body.removeChild(textArea);
}

function createRandomFloatingEmoji() {
    const emojis = ['💀', '☠', '👻', '🎃', '⚰', '🦴'];
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.top = Math.random() * 100 + '%';
    emoji.style.position = 'fixed';
    emoji.style.zIndex = '1';
    emoji.style.pointerEvents = 'none';
    emoji.style.fontSize = '2rem';
    document.body.appendChild(emoji);

    setTimeout(() => {
        if (emoji.parentNode) {
            emoji.remove();
        }
    }, 5000);
}

function addEasterEggs() {
    let keys = [];
    const secret = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];
    document.addEventListener('keydown', (e) => {
        keys.push(e.code);
        if (keys.length > secret.length) keys.shift();
        if (JSON.stringify(keys) === JSON.stringify(secret)) {
            alert("🎉 You unlocked immortality! (just kidding 💀)");
            keys = [];
        }
    });
}

function addInteractiveEffects() {
    document.querySelectorAll('.btn, .predict-btn, .social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { 
                this.style.transform = ''; 
            }, 150);
        });
    });

    // Add parallax effect to floating emojis
    document.addEventListener('mousemove', (e) => {
        const emojis = document.querySelectorAll('.floating-emoji');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        emojis.forEach(emoji => {
            const speed = 0.02;
            const x3d = (x - 0.5) * speed;
            const y3d = (y - 0.5) * speed;
            emoji.style.transform += ` translate3d(${x3d}px, ${y3d}px, 0)`;
        });
    });
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getRandomDeathScenario() {
    return deathScenarios[Math.floor(Math.random() * deathScenarios.length)];
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}
