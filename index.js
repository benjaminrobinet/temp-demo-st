import './index.scss';

import ScrollTrigger from "gsap/ScrollTrigger";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const scrollTriggerEl = document.querySelector('.scroll-trigger');
    const scrollSections = document.querySelector('.scroll-sections');

    const sections = scrollSections.querySelectorAll('.sections section');

    const scrollDuration = 5000; // in px

    const tl = gsap.timeline();
    sections.forEach((section, i) => {
        tl.to(section, {
            opacity: 1,
            ease: 'none',
            duration: 0.1,
        }, i);
        tl.to(section, {
            opacity: 0,
            ease: 'none',
            duration: 0.1,
        }, i + 1);
    })

    ScrollTrigger.create({
        trigger: scrollTriggerEl,
        end: `+=${scrollDuration}px`,
        pin: scrollSections,
    })

    ScrollTrigger.create({
        trigger: scrollTriggerEl,
        animation: tl,
        scrub: true,
    })
})