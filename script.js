// Initialize AOS (Animate On Scroll)
AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: [
        'Full Stack Developer.',
        'Network Architect.',
        'AI Enthusiast.',
        'Systems Integrator.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '_'
});

// Initialize tsParticles for the interactive tech background
tsParticles.load("particles-js", {
    background: {
        color: {
            value: "#050505"
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            }
        }
    },
    particles: {
        color: {
            value: "#00f0ff"
        },
        links: {
            color: "#7000ff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 60
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 3 }
        }
    },
    detectRetina: true
});
