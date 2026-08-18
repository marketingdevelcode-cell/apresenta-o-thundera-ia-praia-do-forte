import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

script_to_add = """
<script>
// Intercept "Next" actions to trigger the Thundera animation automatically
function interceptNext(e) {
    const activeSlide = document.querySelector('.slide-active');
    if (activeSlide && activeSlide.id === 'slide-shift-os') {
        e.preventDefault();
        e.stopPropagation();
        triggerThunderaTransition();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        interceptNext(e);
    }
}, true);

document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nav-area-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', interceptNext, true);
    }
});
</script>
"""

# Insert right before </body>
body_close_idx = content.rfind('</body>')
if body_close_idx != -1:
    content = content[:body_close_idx] + script_to_add + content[body_close_idx:]
else:
    content += script_to_add

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Intercept script added.")
