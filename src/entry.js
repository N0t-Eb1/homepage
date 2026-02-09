import "./css/style.css";
import VanillaTilt from "vanilla-tilt";
import { PowerGlitch } from "powerglitch";

VanillaTilt.init(document.querySelector(".hero-img__container"), {
    reverse: true,
    max: 25,
    glare: true,
    "max-glare": 0.05,
    speed: 800,
});

PowerGlitch.glitch(".hero-img__img");
