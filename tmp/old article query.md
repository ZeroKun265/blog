
```dataviewjs
const folderPath = "articles";

const files = dv.pages(`"${folderPath}"`).sort(page => -page.date);
for (let file of files) {
    // Keep the original file path for the link without converting to lowercase or replacing spaces
    const relativePath = `${file.file.path.replace(".md", ".html")}`;

    // Generate the block with a clickable Markdown link in the header
    dv.paragraph(`> [!col]\n> > [!quote|noicon] %%%%\n> > ${file.banner}\n> \n> > [!col-md-3]\n> > # [[${file.file.name}]]\n> > **:luc_clock: ReadTime: ${file.read_time}**\n> > ${file.summary}...\n\n****`);
}

```

