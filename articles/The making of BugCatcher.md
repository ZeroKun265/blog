---
date: 2022-08-23
banner: "![[The making of BugCatcher - banner.png]]"
banner_y: 0.72
summary: I didn't do much developement because of school and stuff, but when a friend of mine told me he was learning Godot and participating in a Game Jam I could not resist, he had already started with his game so I ended up making my own entry instead.  <br> This is how I made Bug Catcher for the Zeno Jam 5 in May 2022.
read_time: ~2 minutes
---

# The Making of BugCatcher
````col
```col-md
# [[index|:luc_arrow_left: Back]]
```
```col-md
textAlign=left
===
#Games #Developement #Jam #Zeno-Jam #Godot
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
[Link the game's page](https://zerokun265.itch.io/bugcatcher)  
## The Beginning
I didn't do much developement because of school and stuff, but when a friend of mine told me he was learning Godot and participating in a Game Jam I could not resist, he had already started with his game so I ended up making my own entry instead.  
This is how I made Bug Catcher for the Zeno Jam 5 in May 2022.  
  
I started the jam really late, compared to the jam's start, at 36 hours instead of 72, and as I said, i didn't have much time for developement so I didn't use all the time available to me.  
So I ended up using 12 hours of time **in total**.  
  
## The Theme  
The theme was "Light Attracts Bugs", I thought about doing something programming related but I didn't have much time, so i thought that having a **literal** light that attracts bugs would have been a good idea.  
So i started developement on a Point and Click game where you needed to kill bugs while letting butterflies fly away(no one wants to kill butterflies right?)  
  
## Problems? No not really  
Having learned the engine now, and it being an easy project meant i didn't really encounter any big issue, the developement continued fast and downhill.  
  
## Polish? No not really  
As I said, i couldn't spend any longer on the game, UI was made by manually placing the buttons instead of a proper UI with Control Nodes, not a lot of theming, I even kept Godot's default font.  
I'd really love to revisit the game, maybe in a mobile format, with **LOTS AND LOTS** of polish.  
  
## Conclusion  
In the end I exported to HTML5, made an itch page, and submitted the game, then it came the voting phase, some games were under my level but there were also really great games that I knew would surpass me.. my only goal was to be ranked higher than my friend(nothing wrong with a little competition, right?).  
I ended up 34th, and he as 35th.  
I'd say that's a win.  
  
Overall the experience was fun and I loved picking the engine up again, and i hope i won't get overwhelmed by school again, so as to focus more on creating more and more games and having fun like I did during this jam

****
<br></br>
# [[index|:luc_arrow_left: Homepage]]