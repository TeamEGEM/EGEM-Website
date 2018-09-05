// ---- particles.js config ----
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 75,
            "density": {
                "enable": false,
                "value_area": 750
            }
        },
        "color": {
            "value": ["#e4ebfd", "#e4ebfd"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#e4ebfd"
            },
            "polygon": {
                "nb_sides": 16
            },
            "image": {
                "src": "none",
                "width": 10,
                "height": 10
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.25,
                "sync": true
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "size_min": 0.5,
                "sync": false
            }
        },

        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#e4ebfd",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "random",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 150,
                "size": 50,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 150,
                "duration": 0.5
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});