```dataviewjs
const authorsFolder = "authors";  // Folder path for the authors, if needed

// Initialize an empty string to build the entire paragraph
let paragraph = "> > [!invisible] ### Authors:\n";

dv.current().authors.forEach(author => {
	paragraph += `![[authors/${author}.png|author-icon]]**${author}** \$\\qquad\\qquad\$`;
})

// Finally, print the entire paragraph using dv.paragraph
dv.paragraph(paragraph);
```