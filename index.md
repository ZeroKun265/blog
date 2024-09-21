---
title: ZeroKun265's Blog
---
[:luc_twitter: Twittter](https://x.com/ZeroKun265) $\qquad$ [:luc_github: Github](https://github.com/ZeroKun265) $\qquad$ [:luc_globe: Website](https://zerokun265.com) $\qquad$ [:luc_instagram: Instagram](https://www.instagram.com/zerodev265?igsh=NzhsMGExNnViN204)

# ZeroKun265's Blog

<div style="text-align: center;">
    <!-- Rounded Image -->
    <img src="assets/icon.png" alt="ZeroKun265 Icon" style="
        width: 150px; 
        height: 150px; 
        border-radius: 50%; 
        object-fit: cover;
        margin-bottom: 10px;">
</div>


```col
textAlign=center
===
**ZeroKun265, gamer and developer when i have the time**
**Wanna-be Mechanical Engineer when i don't**
```

# Sometimes I also write:

```dataviewjs
const folderPath = "articles";

const files = dv.pages(`"${folderPath}"`).sort(page => -page.date);
for (let file of files) {
    // Keep the original file path for the link without converting to lowercase or replacing spaces
    const relativePath = `${file.file.path.replace(".md", ".html")}`;

    // Generate the block with a clickable Markdown link in the header
    dv.paragraph(`> [!example|article] %%%% \n> > [!col]\n> > > [!quote|noicon] %%%%\n> > > ${file.banner}\n> > \n> > > [!col-md-4]\n> > > # [[${file.file.name}]]\n> > > **:luc_clock: ReadTime: ${file.read_time}**\n> > > ${file.summary}\n\n****`);
}

```
