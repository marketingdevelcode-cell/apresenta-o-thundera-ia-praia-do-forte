import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change grid to flex-column for Insights Críticos
content = content.replace(
    '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.8cqw;">',
    '<div style="display: flex; flex-direction: column; gap: 1.5cqh;">',
    2 # replace both occurrences (Column A and Column B)
)

# 2. Increase font sizes in the small boxes (Insights Críticos)
# Box number: font-size: 0.7cqw; -> 1.3cqw;
content = re.sub(r'font-size:\s*0\.7cqw;', r'font-size: 1.3cqw;', content)

# Box text: font-size: 0.5cqw; -> 0.8cqw;
content = re.sub(r'font-size:\s*0\.5cqw;', r'font-size: 0.8cqw;', content)

# General paragraph text: font-size: 0.45cqw; -> 0.7cqw;
content = re.sub(r'font-size:\s*0\.45cqw;', r'font-size: 0.7cqw;', content)

# Insight Title: font-size: 0.55cqw; -> 0.9cqw;
content = re.sub(r'font-size:\s*0\.55cqw;', r'font-size: 0.9cqw;', content)

# Insight Category (e.g. 01 Planejamento): font-size: 0.75cqw; -> 0.9cqw;
content = re.sub(r'font-size:\s*0\.75cqw;', r'font-size: 0.9cqw;', content)

# For Column B, the big yellow numbers are font-size: 1.5cqw; - let's leave them or make them 1.8cqw
content = re.sub(r'font-size:\s*1\.5cqw;\s*font-weight:\s*bold;\s*font-family:\s*sans-serif;\s*line-height:\s*1;', 
                 r'font-size: 2cqw; font-weight: bold; font-family: sans-serif; line-height: 1;', content)

# Also padding for the small boxes: padding: 0.5cqh; -> padding: 1cqh;
content = re.sub(r'padding:\s*0\.5cqh;', r'padding: 1cqh;', content)

# Gap for the small boxes: gap: 0.3cqw; -> gap: 1cqw;
content = re.sub(r'gap:\s*0\.3cqw;', r'gap: 1cqw;', content)


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated grid to flex-column and increased font sizes in the insights sections.")
