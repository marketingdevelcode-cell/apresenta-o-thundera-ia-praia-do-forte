import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find slide-13
start_13 = content.find('<section class="slide" data-title="Diagnóstico 30 Dias" id="slide-13">')
if start_13 == -1:
    print("Could not find slide-13")
    sys.exit(1)
end_13 = content.find('</section>', start_13) + len('</section>')
slide_13_html = content[start_13:end_13]

# Find slide-pricing
start_pricing = content.find('<section class="slide" id="slide-pricing"')
if start_pricing == -1:
    print("Could not find slide-pricing")
    sys.exit(1)
end_pricing = content.find('</section>', start_pricing) + len('</section>')
# Wait, slide-pricing has an inner script tag, let's find the outermost closing tag.
# Since it's <section ...> ... </section>, the first </section> is the one we want because we only use one <section> inside the calculator.
# Actually, let's make sure it doesn't have nested sections. It shouldn't.
slide_pricing_html = content[start_pricing:end_pricing]

# Construct new content
before_13 = content[:start_13]
after_pricing = content[end_pricing:]

# The original was: before_13 + slide_13_html + \n + slide_pricing_html + \n + after_pricing
# Assuming they are consecutive
if content[end_13:start_pricing].strip() == '':
    # They are consecutive
    new_content = before_13 + slide_pricing_html + "\n\n" + slide_13_html + content[end_pricing:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully reordered!")
else:
    # They are not strictly consecutive, but let's replace the whole chunk
    new_content = before_13 + slide_pricing_html + "\n\n" + slide_13_html + after_pricing
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully reordered with chunk replacement!")

