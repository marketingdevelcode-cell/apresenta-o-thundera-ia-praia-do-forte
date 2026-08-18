import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

box_idx = content.find('id="management-zoom-box"')
section_start = content.rfind('<section', 0, box_idx)
section_tag = content[section_start:content.find('>', section_start)+1]
print("Section tag:", section_tag)
