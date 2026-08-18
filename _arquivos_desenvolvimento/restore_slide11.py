import re

# 1. Extract slide-11 from index copy.html
with open('index copy.html', 'r', encoding='utf-8') as f:
    copy_content = f.read()

start_11 = copy_content.find('<section class="slide" id="slide-11" data-title="Escudo do Gestor">')
if start_11 == -1:
    print("Could not find slide-11 in index copy.html")
    exit(1)

end_11 = copy_content.find('</section>', start_11) + len('</section>')
slide_11_html = copy_content[start_11:end_11]

# 2. Insert into index.html before slide-12
with open('index.html', 'r', encoding='utf-8') as f:
    main_content = f.read()

start_12 = main_content.find('<section class="slide" data-title="O ROI do Thundera" id="slide-12">')
if start_12 == -1:
    # try the other attribute order just in case
    start_12 = main_content.find('<section class="slide" id="slide-12" data-title="O ROI do Thundera">')
    if start_12 == -1:
        print("Could not find slide-12 in index.html")
        exit(1)

new_content = main_content[:start_12] + slide_11_html + "\n\n" + main_content[start_12:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Slide-11 restored successfully.")
