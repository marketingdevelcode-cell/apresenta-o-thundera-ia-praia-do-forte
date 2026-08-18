import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_func = """function triggerThunderaTransition() {
    const box = document.getElementById('management-zoom-box');
    const logo = document.querySelector('.thundera-transition-target');
    const targetLogo = document.querySelector('#slide-1 .cover-logo');
    
    if (!logo || !targetLogo) {
        console.error("Transition failed: missing elements", {logo, targetLogo});
        return;
    }

    const startRect = logo.getBoundingClientRect();
    
    // Create a clone to animate
    const clone = logo.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = startRect.left + 'px';
    clone.style.top = startRect.top + 'px';
    clone.style.width = startRect.width + 'px';
    clone.style.height = startRect.height + 'px';
    clone.style.margin = '0';
    clone.style.zIndex = '999999';
    document.body.appendChild(clone);
    
    // Force DOM reflow so the starting fixed position registers before transition is applied
    void clone.offsetWidth;
    
    clone.style.transition = 'all 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
    
    logo.style.opacity = '0';
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.6s ease';
    
    const nextSlide = document.getElementById('slide-1');
    nextSlide.style.display = 'block';
    nextSlide.style.visibility = 'hidden';
    
    let targetRect = targetLogo.getBoundingClientRect();
    
    // Fallback if presentation framework totally collapses slide layout
    if (targetRect.width === 0) {
        targetRect = {
            left: (window.innerWidth / 2) - 100,
            top: window.innerHeight * 0.05,
            width: 200,
            height: 56
        };
    }
    
    nextSlide.style.display = '';
    nextSlide.style.visibility = '';
    
    // Slight delay to ensure the browser paints the initial clone frame
    setTimeout(() => {
        clone.style.left = targetRect.left + 'px';
        clone.style.top = targetRect.top + 'px';
        clone.style.width = targetRect.width + 'px';
        clone.style.height = targetRect.height + 'px';
    }, 50);
    
    setTimeout(() => {
        const currentSlide = document.querySelector('.slide-active');
        if (currentSlide) currentSlide.classList.remove('slide-active');
        nextSlide.classList.add('slide-active');
        
        box.style.opacity = '1';
        logo.style.opacity = '1';
        clone.remove();
    }, 1100);
}"""

new_func = """function triggerThunderaTransition() {
    const box = document.getElementById('management-zoom-box');
    const logo = document.querySelector('.thundera-transition-target');
    const targetLogo = document.querySelector('#slide-1 .cover-logo');
    const nextSlide = document.getElementById('slide-1');
    
    if (!logo || !targetLogo || !nextSlide) return;

    const startRect = logo.getBoundingClientRect();
    
    // Switch to next slide immediately for a full-screen entry without waiting
    const currentSlide = document.querySelector('.slide-active');
    if (currentSlide) currentSlide.classList.remove('slide-active');
    nextSlide.style.display = '';
    nextSlide.style.visibility = '';
    nextSlide.classList.add('slide-active');
    
    // Temporarily hide the real target logo while the clone flies
    targetLogo.style.opacity = '0';
    
    let targetRect = targetLogo.getBoundingClientRect();
    if (targetRect.width === 0) {
        targetRect = { left: (window.innerWidth / 2) - 100, top: window.innerHeight * 0.05, width: 200, height: 56 };
    }

    const clone = logo.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = startRect.left + 'px';
    clone.style.top = startRect.top + 'px';
    clone.style.width = startRect.width + 'px';
    clone.style.height = startRect.height + 'px';
    clone.style.margin = '0';
    clone.style.zIndex = '999999';
    // Very fast, snappy transition
    clone.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    document.body.appendChild(clone);
    
    void clone.offsetWidth;
    
    setTimeout(() => {
        clone.style.left = targetRect.left + 'px';
        clone.style.top = targetRect.top + 'px';
        clone.style.width = targetRect.width + 'px';
        clone.style.height = targetRect.height + 'px';
    }, 20);
    
    setTimeout(() => {
        targetLogo.style.opacity = '1';
        clone.remove();
        if(box) box.style.opacity = '1';
        logo.style.opacity = '1';
    }, 550);
}"""

content = content.replace(old_func, new_func)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Transition function replaced.")
