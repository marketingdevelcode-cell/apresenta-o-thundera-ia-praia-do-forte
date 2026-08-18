import sys

with open('index copy.html', 'r', encoding='utf-8') as f:
    copy_content = f.read()

# Extract slide-14 (Obrigado)
start_14 = copy_content.find('<!-- Slide 14: Obrigado / Closing -->')
if start_14 == -1:
    start_14 = copy_content.find('<section class="slide" id="slide-14"')
end_14 = copy_content.find('</section>', start_14) + len('</section>')
slide_14_html = copy_content[start_14:end_14]
print("Found slide-14:", len(slide_14_html), "bytes")

# Extract slide-pricing (Calculadora)
start_pricing = copy_content.find('<!-- Slide Calculadora de Investimento -->')
if start_pricing == -1:
    start_pricing = copy_content.find('<section class="slide" id="slide-pricing"')
end_pricing = copy_content.find('</section>', start_pricing) + len('</section>')
slide_pricing_html = copy_content[start_pricing:end_pricing]
print("Found slide-pricing:", len(slide_pricing_html), "bytes")

with open('index.html', 'r', encoding='utf-8') as f:
    main_content = f.read()

# Find slide-2c (Cases de Impacto)
start_2c = main_content.find('<section class="slide" data-title="Cases de Impacto" id="slide-2c">')
end_2c = main_content.find('</section>', start_2c) + len('</section>')
print("Found slide-2c:", len(main_content[start_2c:end_2c]), "bytes")

if start_2c != -1 and len(slide_14_html) > 0 and len(slide_pricing_html) > 0:
    new_content = main_content[:start_2c] + slide_pricing_html + "\n\n" + slide_14_html + "\n" + main_content[end_2c:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success: Replaced slide-2c with slide-pricing and slide-14.")
else:
    print("Error: Could not find all necessary sections.")
