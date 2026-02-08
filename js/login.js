// Mot de passe secret (change-le pour ton projet)
const SECRET_PASSWORD = "harold";

// Éléments DOM
let backgroundMusic, musicToggle;

/**
 * Initialisation complète avec audio
 */
document.addEventListener('DOMContentLoaded', function() {
    initAudio();
    initLoginForm();
    
    // Début lecture audio après interaction utilisateur (politique autoplay)
    document.body.addEventListener('click', function startMusicOnInteraction() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(e => console.log('Audio play prevented:', e));
        }
        document.body.removeEventListener('click', startMusicOnInteraction);
    }, { once: true });
});

/**
 * Initialisation du système audio
 */
function initAudio() {
    backgroundMusic = document.getElementById('backgroundMusic');
    musicToggle = document.getElementById('musicToggle');
    
    if (!backgroundMusic) return;
    
    // Volume doux pour fond musical
    backgroundMusic.volume = 0.4;
    
    // Contrôles audio
    musicToggle.addEventListener('click', toggleMusic);
    
    // État initial
    updateMusicUI();
    
    // Gestion événements audio
    backgroundMusic.addEventListener('play', updateMusicUI);
    backgroundMusic.addEventListener('pause', updateMusicUI);
    backgroundMusic.addEventListener('ended', () => {
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();
    });
}

/**
 * Basculer musique on/off
 */
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(e => {
            console.log('Cannot play audio:', e);
            musicToggle.textContent = '🔇 Bloqué';
        });
    } else {
        backgroundMusic.pause();
    }
}

/**
 * Met à jour l'interface du contrôleur musique
 */
function updateMusicUI() {
    if (!musicToggle) return;
    
    if (backgroundMusic.paused) {
        musicToggle.classList.add('paused');
        musicToggle.innerHTML = `
            <span class="music-icon">🔇</span>
            <span class="music-status">Musique OFF</span>
        `;
        musicToggle.setAttribute('aria-label', 'Activer la musique');
    } else {
        musicToggle.classList.remove('paused');
        musicToggle.innerHTML = `
            <span class="music-icon">🎵</span>
            <span class="music-status">Musique ON</span>
        `;
        musicToggle.setAttribute('aria-label', 'Désactiver la musique');
    }
}

/**
 * Gère la soumission du formulaire de connexion
 */
function initLoginForm() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');

    // Focus automatique avec effet doux
    setTimeout(() => {
        passwordInput.focus();
    }, 500);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = passwordInput.value.trim();
        
        // Masquer message d'erreur précédent
        errorMessage.classList.remove('show');
        
        if (password === SECRET_PASSWORD) {
            // Succès : animation puis redirection (garde musique active)
            loginBtn.innerHTML = `
                <span class="btn-text-main">Cœur ouvert... 💖</span>
                <div class="btn-glow"></div>
            `;
            loginBtn.style.transform = 'scale(0.95)';
            
            // Fade out musique douce avant redirection
            if (!backgroundMusic.paused) {
                backgroundMusic.volume = 0.1;
                setTimeout(() => {
                    window.location.href = 'story.html';
                }, 800);
            } else {
                setTimeout(() => {
                    window.location.href = 'story.html';
                }, 800);
            }
        } else {
            // Erreur romantique avec feedback audio
            showError();
            passwordInput.select();
            
            // Petit son d'erreur si musique active
            if (!backgroundMusic.paused) {
                backgroundMusic.currentTime += 0.5; // Skip léger
            }
        }
    });

    /**
     * Affiche message d'erreur avec animation
     */
    function showError() {
        errorMessage.classList.add('show');
        
        // Vibration douce du champ
        passwordInput.style.animation = 'shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97)';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 600);
    }

    /**
     * UX : efface erreur en tapant
     */
    passwordInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            errorMessage.classList.remove('show');
        }
    });

    /**
     * Support clavier amélioré
     */
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.length > 0) {
            form.dispatchEvent(new Event('submit'));
        }
    });

    // Easter egg : survol titre avec effet manuscrit
    const title = document.querySelector('.romantic-title');
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02) rotate(-1deg)';
    });
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Gestion visibilité page pour pause musique
document.addEventListener('visibilitychange', function() {
    if (document.hidden && backgroundMusic && !backgroundMusic.paused) {
        backgroundMusic.pause();
    }
});
