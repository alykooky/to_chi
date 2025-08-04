document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const box = document.getElementById('box');
    const boxClosed = document.getElementById('boxClosed');
    const boxOpen = document.getElementById('boxOpen');
    const boxContent = document.getElementById('boxContent');
    const heartIcon = document.getElementById('heartIcon');
    const capybaraHeartIcon = document.getElementById('capybaraHeartIcon');
    const voiceMessage = document.getElementById('voiceMessage');
    const capybaraVoiceMessage = document.getElementById('capybaraVoiceMessage');

    let isBoxOpen = false;
    let isPlaying = false;
    let isHeartClicked = false;

    // Ensure hearts are visible and clickable from the start
    heartIcon.style.opacity = '1';
    heartIcon.style.scale = '1';
    heartIcon.style.pointerEvents = 'auto';
    heartIcon.style.zIndex = '1000';

    capybaraHeartIcon.style.opacity = '1';
    capybaraHeartIcon.style.scale = '1';
    capybaraHeartIcon.style.pointerEvents = 'auto';
    capybaraHeartIcon.style.zIndex = '1000';

    // Debug: Log heart position and visibility
    console.log('Cat heart element:', heartIcon);
    console.log('Capybara heart element:', capybaraHeartIcon);

    // Box opening functionality
    box.addEventListener('click', function (event) {
        // Don't close if clicking on any heart or if heart was just clicked
        if (event.target === heartIcon || event.target === capybaraHeartIcon ||
            event.target.closest('.heart-icon') || isHeartClicked) {
            return;
        }

        if (!isBoxOpen) {
            openBox();
        } else {
            closeBox();
        }
    });

    function openBox() {
        // Hide closed box, show open box
        boxClosed.classList.add('hide');
        boxOpen.classList.add('show');

        // Add open bounce animation
        box.classList.add('open-bounce');
        setTimeout(() => {
            box.classList.remove('open-bounce');
        }, 1200);

        setTimeout(() => {
            boxContent.classList.add('show');
        }, 300);
        isBoxOpen = true;

        // Create celebration effects
        createExplosionHearts();
        createSparkles();
        createConfetti();
    }

    function closeBox() {
        boxContent.classList.remove('show');
        setTimeout(() => {
            boxOpen.classList.remove('show');
            boxClosed.classList.remove('hide');
        }, 300);
        isBoxOpen = false;
    }

    // Create bomb explosion hearts animation
    function createExplosionHearts() {
        const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝'];
        const boxRect = box.getBoundingClientRect();
        const centerX = boxRect.left + boxRect.width / 2;
        const centerY = boxRect.top + boxRect.height / 2;

        // Create hearts in a circular explosion pattern
        for (let i = 0; i < 24; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'explosion-heart';
                heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

                // Calculate explosion direction (360 degrees)
                const angle = (i * 15) * (Math.PI / 180); // 15 degrees apart
                const distance = 150 + Math.random() * 100; // Random distance 150-250px

                const endX = Math.cos(angle) * distance;
                const endY = Math.sin(angle) * distance;

                // Position heart at center
                heart.style.left = centerX + 'px';
                heart.style.top = centerY + 'px';

                // Set explosion direction using CSS custom properties
                heart.style.setProperty('--explosion-x', endX + 'px');
                heart.style.setProperty('--explosion-y', endY + 'px');

                document.body.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    if (document.body.contains(heart)) {
                        document.body.removeChild(heart);
                    }
                }, 1500);
            }, i * 50); // Stagger the explosion
        }
    }

    // Create sparkle animation
    function createSparkles() {
        const sparkleEmojis = ['✨', '⭐', '🌟', '💫', '⚡'];
        const boxRect = box.getBoundingClientRect();

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];

                // Random position around the box
                const startX = boxRect.left + Math.random() * boxRect.width;
                const startY = boxRect.top + Math.random() * boxRect.height;

                sparkle.style.left = startX + 'px';
                sparkle.style.top = startY + 'px';

                document.body.appendChild(sparkle);

                // Remove sparkle after animation
                setTimeout(() => {
                    if (document.body.contains(sparkle)) {
                        document.body.removeChild(sparkle);
                    }
                }, 2000);
            }, i * 100); // Stagger the sparkles
        }
    }

    // Heart clicking functionality
    function handleHeartClick(event) {
        // Prevent event from bubbling up to the box
        event.stopPropagation();
        event.preventDefault();

        console.log('Heart clicked!'); // Debug log

        // Set flag to prevent box from closing
        isHeartClicked = true;

        // Ensure heart stays visible and in front
        heartIcon.style.opacity = '1';
        heartIcon.style.scale = '1';
        heartIcon.style.pointerEvents = 'auto';
        heartIcon.style.zIndex = '1000';

        // Prevent box from closing when heart is clicked
        if (isBoxOpen) {
            // Keep box open and just play audio
            playVoiceMessage();
        } else {
            // If box is closed, open it first
            openBox();
            setTimeout(() => {
                playVoiceMessage();
            }, 800);
        }

        // Reset flag after a short delay
        setTimeout(() => {
            isHeartClicked = false;
        }, 100);
    }

    // Capybara heart clicking functionality
    function handleCapybaraHeartClick(event) {
        // Prevent event from bubbling up to the box
        event.stopPropagation();
        event.preventDefault();

        console.log('Capybara heart clicked!'); // Debug log

        // Set flag to prevent box from closing
        isHeartClicked = true;

        // Ensure heart stays visible and in front
        capybaraHeartIcon.style.opacity = '1';
        capybaraHeartIcon.style.scale = '1';
        capybaraHeartIcon.style.pointerEvents = 'auto';
        capybaraHeartIcon.style.zIndex = '1000';

        // Prevent box from closing when heart is clicked
        if (isBoxOpen) {
            // Keep box open and just play audio
            playCapybaraVoiceMessage();
        } else {
            // If box is closed, open it first
            openBox();
            setTimeout(() => {
                playCapybaraVoiceMessage();
            }, 800);
        }

        // Reset flag after a short delay
        setTimeout(() => {
            isHeartClicked = false;
        }, 100);
    }

    function playVoiceMessage() {
        console.log('Playing cat voice...'); // Debug log

        // Add click animation
        heartIcon.classList.add('clicked');
        heartIcon.classList.add('shake');

        // Remove the animation classes after they complete
        setTimeout(() => {
            heartIcon.classList.remove('clicked');
            heartIcon.classList.remove('shake');
        }, 600);

        // Add box bounce animation
        box.classList.add('bounce');
        setTimeout(() => {
            box.classList.remove('bounce');
        }, 800);

        // Add confetti effect
        createConfetti();

        // Check if audio is already playing
        if (isPlaying) {
            voiceMessage.pause();
            voiceMessage.currentTime = 0;
            isPlaying = false;
        }

        // Ensure audio is loaded
        if (voiceMessage.readyState < 2) {
            voiceMessage.load();
        }

        // Try to play the audio
        voiceMessage.play().then(() => {
            console.log('Audio started playing'); // Debug log
            isPlaying = true;

            // Add visual feedback
            heartIcon.style.animation = 'heartPulse 0.5s ease';

            // Reset animation after pulse
            setTimeout(() => {
                heartIcon.style.animation = 'heartBeat 1.5s infinite';
            }, 500);

        }).catch(error => {
            console.log('Audio playback failed:', error);
            showFallbackMessage();
            heartIcon.style.animation = 'heartBeat 1.5s infinite';
        });

        // Ensure box stays open
        if (isBoxOpen) {
            // Keep box open
            boxContent.classList.add('show');
            boxOpen.classList.add('show');
            boxClosed.classList.add('hide');
        }
    }

    function playCapybaraVoiceMessage() {
        console.log('Playing capybara voice...'); // Debug log

        // Add click animation
        capybaraHeartIcon.classList.add('clicked');
        capybaraHeartIcon.classList.add('shake');

        // Remove the animation classes after they complete
        setTimeout(() => {
            capybaraHeartIcon.classList.remove('clicked');
            capybaraHeartIcon.classList.remove('shake');
        }, 600);

        // Add box bounce animation
        box.classList.add('bounce');
        setTimeout(() => {
            box.classList.remove('bounce');
        }, 800);

        // Add confetti effect
        createConfetti();

        // Check if audio is already playing
        if (isPlaying) {
            capybaraVoiceMessage.pause();
            capybaraVoiceMessage.currentTime = 0;
            isPlaying = false;
        }

        // Ensure audio is loaded
        if (capybaraVoiceMessage.readyState < 2) {
            capybaraVoiceMessage.load();
        }

        // Try to play the audio
        capybaraVoiceMessage.play().then(() => {
            console.log('Capybara audio started playing'); // Debug log
            isPlaying = true;

            // Add visual feedback
            capybaraHeartIcon.style.animation = 'heartPulse 0.5s ease';

            // Reset animation after pulse
            setTimeout(() => {
                capybaraHeartIcon.style.animation = 'heartBeat 1.5s infinite';
            }, 500);

        }).catch(error => {
            console.log('Capybara audio playback failed:', error);
            showCapybaraFallbackMessage();
            capybaraHeartIcon.style.animation = 'heartBeat 1.5s infinite';
        });

        // Ensure box stays open
        if (isBoxOpen) {
            // Keep box open
            boxContent.classList.add('show');
            boxOpen.classList.add('show');
            boxClosed.classList.add('hide');
        }
    }

    function showFallbackMessage() {
        // Create a temporary message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1000;
            font-family: 'Dancing Script', cursive;
            font-size: 1.2rem;
            color: #8B4513;
            text-align: center;
            max-width: 300px;
        `;
        message.innerHTML = `
            <p>💕 Cat says: I love you so much! 💕</p>
            <p style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">
                (Add "cat_voice.mp3" to hear the cat's voice!)
            </p>
        `;

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translate(-50%, -50%) scale(0.8)';
            message.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 3000);
    }

    function showCapybaraFallbackMessage() {
        // Create a temporary message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.95);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1000;
            font-family: 'Dancing Script', cursive;
            font-size: 1.2rem;
            color: #8B4513;
            text-align: center;
            max-width: 300px;
        `;
        message.innerHTML = `
            <p>💖 Capybara says: You're the best! 💖</p>
            <p style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">
                (Add "capybara_voice.mp3" to hear the capybara's voice!)
            </p>
        `;

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translate(-50%, -50%) scale(0.8)';
            message.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 3000);
    }

    // Add click event listeners to hearts
    heartIcon.addEventListener('click', handleHeartClick);
    capybaraHeartIcon.addEventListener('click', handleCapybaraHeartClick);

    // Audio event listeners
    voiceMessage.addEventListener('ended', function () {
        console.log('Audio finished playing'); // Debug log
        isPlaying = false;
        // Reset heart animation
        heartIcon.style.animation = 'heartBeat 1.5s infinite';
    });

    voiceMessage.addEventListener('error', function () {
        console.log('Audio file not found or cannot be played');
        showFallbackMessage();
    });

    // Capybara audio event listeners
    capybaraVoiceMessage.addEventListener('ended', function () {
        console.log('Capybara audio finished playing'); // Debug log
        isPlaying = false;
        // Reset heart animation
        capybaraHeartIcon.style.animation = 'heartBeat 1.5s infinite';
    });

    capybaraVoiceMessage.addEventListener('error', function () {
        console.log('Capybara audio file not found or cannot be played');
        showCapybaraFallbackMessage();
    });

    // Additional audio event listeners for better handling
    voiceMessage.addEventListener('loadstart', function () {
        console.log('Audio loading started');
    });

    voiceMessage.addEventListener('canplay', function () {
        console.log('Audio can play');
    });

    voiceMessage.addEventListener('playing', function () {
        console.log('Audio is playing');
    });

    voiceMessage.addEventListener('pause', function () {
        console.log('Audio paused');
        isPlaying = false;
    });

    // Ensure heart is always visible and clickable
    voiceMessage.addEventListener('load', function () {
        console.log('Audio loaded successfully');
        // Make sure heart is visible
        heartIcon.style.opacity = '1';
        heartIcon.style.scale = '1';
        heartIcon.style.pointerEvents = 'auto';
    });

    // Add some interactive effects
    document.addEventListener('mousemove', function (e) {
        const rect = box.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / 50;
        const deltaY = (e.clientY - centerY) / 50;

        box.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    });

    // Reset box transform when mouse leaves
    document.addEventListener('mouseleave', function () {
        box.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    // Add keyboard support
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            if (!isBoxOpen) {
                openBox();
            } else {
                playVoiceMessage();
            }
        }
    });

    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function (e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function (e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndY - touchStartY;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe down - close box
                if (isBoxOpen) {
                    closeBox();
                }
            } else {
                // Swipe up - open box
                if (!isBoxOpen) {
                    openBox();
                }
            }
        }
    }

    // Add confetti effect when box opens
    function createConfetti() {
        const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff1493', '#ff69b4'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * window.innerWidth}px;
                    top: -10px;
                    animation: confettiFall 3s linear forwards;
                    z-index: 1000;
                `;

                document.body.appendChild(confetti);

                setTimeout(() => {
                    if (document.body.contains(confetti)) {
                        document.body.removeChild(confetti);
                    }
                }, 3000);
            }, i * 50);
        }
    }


}); 