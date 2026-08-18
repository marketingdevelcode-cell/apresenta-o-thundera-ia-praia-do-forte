import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def remove_slide(content, slide_id):
    start_tag = f'id="{slide_id}"'
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print(f"Could not find slide {slide_id}")
        return content
    
    # Search backwards for the start of the section tag
    section_start = content.rfind('<section', 0, start_idx)
    if section_start == -1:
        print(f"Could not find start tag for {slide_id}")
        return content
        
    section_end = content.find('</section>', start_idx)
    if section_end == -1:
        print(f"Could not find end tag for {slide_id}")
        return content
        
    section_end += len('</section>')
    
    return content[:section_start] + content[section_end:]

content = remove_slide(content, "slide-7")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Slide 07 removed successfully.")
