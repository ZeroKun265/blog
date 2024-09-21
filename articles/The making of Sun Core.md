---
date: 2022-08-20
banner: "![[The making of Sun Core - banner.png]]"
banner_y: 0.68285
summary: It was summer and i had nothing to do but code, you might think it's cool, what project did you build? You had an entire summer! <br> Yeah.. i was lazy and costrained myself to a 72 hour game jam, not the smartest of ideas, i know.
read_time: ~4-5 minutes
authors:
  - ZeroKun265
---

# The Making of Sun Core
````col
```col-md
# [[index|:luc_arrow_left: Back]]
```
```col-md
textAlign=left
===
#Games #Developement #Jam #Ludum-Dare #Python
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
[Link to the game's page](https://zerokun265.itch.io/sun-core)
## The Beginning
It was summer and i had nothing to do but code, you might think it's cool, what project did you build? You had an entire summer!
Yeah.. i was lazy and costrained myself to a 72 hour game jam, not the smartest of ideas, i know.

Let's get in some more details.
I participated in the [Ludum Dare](https://ldjam.com/) 48 Game Jam(["What is a Game Jam?"](https://en.wikipedia.org/wiki/Game_jam)) after learning how to use Pygame, a Python framework for making Graphics applications, mostly games as the name implies.
I'll divide this into 4 parts: 
- The beginning
- A cronological list of all that went wrong
- Music 
- Publication and results

## Notes
As this "article" is beeing written a while after the jam, it won't be that detailed.
Also because I feel like like I was very unexperienced at the time, I'll mostly share my struggles(and some code) and my thoughts

## The Beginning (for real this time)
So, we're jumping into this nightmare, no one's home and i can code all day, and the theme of the jam gets released.
"Deeper and Deeper"
My first tought was making a digging game(I know, wild imagination) but then (don't ask me why) I ended on the idea of going deeper and deeper into.. the sun?!
I didn't have time so I jumped right into developement, started making a prototype ([With an AWFUL jump](https://www.instagram.com/p/COCt0Htoh2q/?utm_source=ig_web_copy_link))
And this is where the problems arrived

## A cronological list of all that went wrong
First of all, i couldn't get 2d collision to work, for some reason.. my approach was moving the player on the x axis first, check collision, then do the same for the y axis.
Somehow it didn't work, so i ended up copying code from [@DaFluffyPotato](https://dafluffypotato.com/) and his pygame developement series, which did the same thing but it worked(No idea what was wrong with my code)
Here's a rundown of how the code works(you can check it out [on GitHub!](https://github.com/ZeroKun265/Sun-Core/blob/LD48-version/SunCore.py#L54):
- Add x velocity to player
- Check if we collided on the left or right(using the velocity's sign)
- Set the correct size of the player rectangle to the opposite side of the tile it collided with
- Do the same with y velocity (up and right instead of left and right)
- (Optional) return booleans for which sides are colliding which can be useful for other stuff like floor detection

After that I started making enemies.
I planned to have 3 enemies, a static cannon, a static enemy that would emit "spores" on top of it's head when you jumped and a ranged enemy.
I ended up with the cannn, a static enemy that did not amit "spores" and not even sprite for the ranged enemy, so 1.5 enemies.. that's 50%!

Well, things like that happen, and besides a little memory problem(enemies were spawning constantly and i was having thousands of enemies on the same spot, destroying performance) everything went smoothly.
I hacked in a decent enough UI and an absolutely HORRIBLE level loading system (just that takes most of the game's code, i copy pasted instead of making functions.. yeah, i know)
Cool, the game is finished, right? WRONG, what about SFX?

## Music
Making Sound Effects wasn't hard, I just used [sfxr](https://www.drpetter.se/project_sfxr.html) and made all the sounds that I needed, but music was like a demon approaching, and i only had about 1.5 hours to defeat it.
So I spent around 30 minutes looking for the right software, web tools, "no skills" apps, fully fledged studio apps.. I couldn't do it, and so I did the unthinkable. 
I ended up downloading some music from [Incompetech](https://incompetech.com) and failed in the task of making a game from scratch( To be fair, participating in the 72 hours jam meant I could use them as long as I had the right to do so, which I had with correct crediting, but in my mind I still failed)
The music was really fitting tho, and i found two related tracks, one faster paced then the other one, which i used for the final timed level. (You can check the credits for the songs on [Sun Core's game page](https://zerokun265.itch.io/sun-core)

## Publication and results
I finally had a working game, and after finally beeing able to bundle it with cx_freeze(Python bundling tool for deployment of Python code in executable format) i submitted the Windows build(Couldn't build for Linux or Mac at the time) and i suddenly felt the urge to go to sleep and wake up 12 hours later, and in fact, I did.

### Results
During the rating period(in which I admit, i didn't participate that much) tons of positive comments and some constructive criticism came in, and after a bit of waiting the results were in! (The results are on a pool of over 10k entries in the jam)
- Overall: **1735**th (2.87 average from 29 ratings).
- Fun: **1473**rd (2.944 average from 29 ratings).
- Innovation: **1867**th (2.185 average from 29 ratings).
- Theme: **1751**st (2.704 average from 29 ratings).
- Graphics: **1624**th (2.796 average from 29 ratings).
- Mood: **1584**th (2.87 average from 29 ratings).

## In Conclusion
It was my firstgame jam, and i can only describe it as stressful, but at the same time rewarding.. it's an experience that every developer(especially game developers in my opinion) should try.
The ratings were good enough for me, I was inexperienced yet i fought my battle well.
Still, i don't think i'll ever touch pygame ever again, moving(actually moved, since this article is technically from the future) to the Godot Gang!

****
<br></br>
# [[index|:luc_arrow_left: Homepage]]
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
