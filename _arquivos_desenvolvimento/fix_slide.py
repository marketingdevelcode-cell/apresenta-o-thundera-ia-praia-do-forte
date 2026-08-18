import re

with open('index copy.html', 'r', encoding='utf-8') as f:
    text_copy = f.read()

# Extract slide-2c from index copy.html
match_copy = re.search(r'(<!-- Slide 02c: Cases de Impacto -->\s*<section class="slide" id="slide-2c".*?</section>)', text_copy, re.DOTALL)
if not match_copy:
    print("Could not find slide-2c in copy")
    exit(1)

slide_2c = match_copy.group(1)

# Apply style transformations to adapt to Develcode Design System
slide_2c = slide_2c.replace('font-sansation', 'font-satoshi')
slide_2c = slide_2c.replace('var(--primary)', '#0057EA')
slide_2c = slide_2c.replace('rgba(255,202,40,', 'rgba(0,87,234,')
slide_2c = slide_2c.replace('text-primary', '')  # We will manually add color
slide_2c = slide_2c.replace('class="font-satoshi  uppercase"', 'class="font-satoshi uppercase" style="color: #0057EA;"')
slide_2c = slide_2c.replace('class="font-satoshi  uppercase font-bold"', 'class="font-satoshi uppercase font-bold" style="color: #0057EA;"')
slide_2c = slide_2c.replace('class="font-satoshi text-white"', 'class="font-satoshi text-white"')
slide_2c = slide_2c.replace('class="font-satoshi  font-bold"', 'class="font-satoshi font-bold" style="color: #0057EA;"')
slide_2c = slide_2c.replace('border-top: 3px solid #0057EA;', 'border: 1px solid #1A1C20; border-radius: 16px;')
slide_2c = slide_2c.replace('background: rgba(18,18,18,0.7);', 'background: #0B0C0E; box-shadow: 0 10px 30px rgba(0,0,0,0.5);')

# Also fix text-primary classes that became empty space
slide_2c = re.sub(r'class="([^"]*)\s+text-primary\s+([^"]*)"', r'class="\1 \2" style="color: #0057EA;"', slide_2c)
slide_2c = re.sub(r'class="([^"]*)\s*text-primary\s*([^"]*)"', r'class="\1 \2" style="color: #0057EA;"', slide_2c)


with open('index.html', 'r', encoding='utf-8') as f:
    text_main = f.read()

# Replace the broken slide-2c in index.html
new_text, count = re.subn(r'<!-- Slide 02c: Cases de Impacto -->.*?<!-- Slide 14: Obrigado / Closing -->', slide_2c + '\n\n        <!-- Slide 14: Obrigado / Closing -->', text_main, flags=re.DOTALL)

if count == 0:
    print("Could not find broken slide-2c in index.html to replace")
else:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Successfully replaced slide-2c with Develcode styles")
