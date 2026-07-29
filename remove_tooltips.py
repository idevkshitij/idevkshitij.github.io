import re
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = re.sub(r'<span className="tag has-tooltip" data-tooltip="[^"]+">', r'<span className="tag">', content)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
