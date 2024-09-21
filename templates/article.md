---
date: 
banner: 
banner_y: 0
summary: 
read_time: ~NaN minutes
---


# Title
````col
```col-md
# [[index|:luc_arrow_left: Back]]
```
```col-md
textAlign=left
===
Insert Tags Here
```
````

`````col
````col-md
textAlign=left
===
```dataviewjs

// Get the date property from the current note
let read_time = dv.current().read_time;
dv.paragraph(`**:luc_clock: ${read_time}**`)
```
````
````col
textAlign=right
===
```dataviewjs
function formatDate(isoDateString) {
    // Create a Date object from the ISO string
    let date = new Date(isoDateString);
    
    // Extract day, month, and year
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    let year = date.getFullYear();
    
    // Return the date in DD/MM/YYYY format
    return `:luc_calendar: ${day}/${month}/${year}`;
}

// Get the date property from the current note
let date = dv.current().date;

dv.paragraph(`**${formatDate(date)}**`)
```
`````


````col
textAlign=center
===
```dataviewjs
// Set this to 1 if you want to include level 1 headers,
// or set it to 2 if you want to ignore level 1 headers
const startAtLevel = 2
const content = await dv.io.load(dv.current().file.path)
const toc = content.match(new RegExp(`^#{${startAtLevel},} \\S.*`, 'mg'))
  .map(heading => {
    const [_, level, text] = heading.match(/^(#+) (.+)$/)
    const link = dv.current().file.path + '#' + text
    return '\t'.repeat(level.length - startAtLevel) + `1. [[${link}|${text}]]`
  })
dv.header(2, 'Table of contents')
dv.paragraph(`\`\`\`\`col\n\`\`\`col-md\nflexGrow=0.65\n===\n\n\`\`\`\n\`\`\`col-md\ntextAlign=left\n===\n${toc.join('\n')}\n\`\`\`\n\`\`\`\``)
```
````
****
## Insert Content Here
****
<br></br>
# [[index|:luc_arrow_left: Homepage]]