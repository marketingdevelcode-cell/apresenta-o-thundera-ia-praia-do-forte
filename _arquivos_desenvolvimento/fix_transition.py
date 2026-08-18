import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the onclick from management-zoom-box
content = content.replace('id="management-zoom-box" onclick="triggerThunderaTransition()" style="position: relative; overflow: hidden; background: #0B0C0E; border: 1px solid #1A1C20; border-radius: 16px; padding: 3cqh 2cqw; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.5); min-height: 52cqh; align-items: flex-start; text-align: left;; cursor: pointer;',
                          'id="management-zoom-box" style="position: relative; overflow: hidden; background: #0B0C0E; border: 1px solid #1A1C20; border-radius: 16px; padding: 3cqh 2cqw; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.5); min-height: 52cqh; align-items: flex-start; text-align: left;"')

# 2. Convert anim-group to auto-playing anim-fade-in in slide-1
# Find slide-1 section
s1_start = content.find('<section class="slide" data-title="Capa" id="slide-1">')
s1_end = content.find('</section>', s1_start)

slide1_html = content[s1_start:s1_end]

# Replace anim-group with anim-fade-in and delays
slide1_html = slide1_html.replace('class="anim-group anim-1"', 'class="anim-fade-in" style="animation-delay: 0.2s;"')
slide1_html = slide1_html.replace('class="anim-group anim-2"', 'class="anim-fade-in" style="animation-delay: 0.6s;"')
slide1_html = slide1_html.replace('class="anim-group anim-3"', 'class="anim-fade-in" style="animation-delay: 1.0s;"')
slide1_html = slide1_html.replace('class="anim-group anim-4 man-anim-wrapper"', 'class="anim-fade-in man-anim-wrapper" style="animation-delay: 1.4s;"')

content = content[:s1_start] + slide1_html + content[s1_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Transition removed and Slide 1 set to show directly.")
