---
date: 2025-09-01
banner: "![[I made the jankiest cloud gaming setup possible.. and how you should do it better - banner.png]]"
banner_y: 0.07
summary: Nowadays everybody talks about cloud gaming, so i made my own cloud gaming, and you can do so too! just don't make the same mistakes that i did or it's gonna turn ugly...
read_time: ~9 minutes
authors:
  - ZeroKun265
tags:
  - Tech
  - Linux
  - Games
  - Gaming
  - Cloud
  - Hardware
---
# I made the jankiest cloud gaming setup possible.. and how you should do it better
`````col
```col-md
# [[index|:luc_arrow_left: Back]]
```
````col-md
textAlign=left
===
```dataviewjs
// Get all tags from the current note
let tags = dv.current().file.tags;

// Join them with spaces and display
dv.paragraph(tags.join(" "));
```

````
`````


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
## Gaming on the Cloud
Nowadays everyone talks about gaming on the cloud.. but as we tech literates like to say: *"There is no Cloud, it's just somebody else's computer"*, and while Steam may have an option to hide your.. *your know what* games, your cloud providers don't need to add you to their friends list to see that.
And so a thought popped in my mind: *"Why not just make my own cloud gaming setup? I have the skills"*.. little did i know: i did not, in fact, have the skills necessary to do so (kinda)... in fact, i didn't even have the hardware, although we'll get there in a second.

## The Idea
I was pretty sure that many had done this already, so i did some research and found out about [Sunshine](https://github.com/LizardByte/Sunshine), *"a self-hosted game stream host for [Moonlight](https://github.com/moonlight-stream)"*.
The idea is very simple, Sunshine is the streaming server, the *"host"* and Moonshine is the application used to actually play, or the *"client"*.

The setup of these two is pretty simple, and i was able to quickly get a gaming session on my laptop from my couch streaming from my desktop upstaris.. *"Great!"*.. but what about accessing it from outside my local network? That's where [Tailscale](https://tailscale.com/) came in, a VPN that allows you to link multiple devices by giving you an IP that you can use when **and only when** connected to the same Tailscale network (and because i was curious, they use a special slice of the IP adress list so as to not override any IP you might actually care about.. thought i'd mention it).. this allowed me to use my laptop with my mobile data connection and still game without issue.

That's where **most people would probably stop**, but if you want to go a little further you can also:
1. Setup your bios to reboot your PC in the case of a power outage, for that *sweet sweet 99% uptime!!*
2. Setup Auto-login (definitely possible in linux, i'm pretty sure Windows has that too but i never used it)
3. Setup ssh access for a quick terminal for diagnostics, you can use the same IP provided by Tailscale for that
4. Setup your monitor to wake from sleep so as to not keep it always on and ruin it prematurely
5. Remember to setup automatic connection to the wifi if you're not running an ethernet cable to your machine or you will be locked out after a reboot

Now, no matter what happens to you (need a reboot for update? Power cuts? Anything!™), you will be able to game on your own machine, knowing nobody can spy on you, take away your service or ransom you to keep it.

## The Jank
That's how most people would setup their ultimate Cloud™ Gaming setup, but why did i mention "the jankiest setup possible"?
Well, keep in mind that i was about to leave the same day i was setting this up, and therefore couldn't wait for products to arrive, so i had to improvise a bit; let's go through the list of the correct setup and see what i was did correctly:
1. I was able to setup sunshine and moonlight easily
2. Tailscale was a breeze
3. I could setup the bios pretty easily
4. Auto-login worked first try, as well as ssh access (kinda..)
5. That's about it

Now let's see what i did wrong/couldn't do:
1. I actually had a useless ssh setup, i'll get to that in a moment
2. My "monitor" was actually an old TV.. so no QOL things such as standby (crazy i know)
3. I didn't have an Ethernet connection, so i used WiFi for a while.. until a CachyOS update broke my setup and my USB adapter was no longer working

Number 3, out of all, caused probably the most issues, which is why i'll cover it first:
I tried many times to make the adapter work after an update: it worked in windows, it worked before the update, it worked on my Arch Linux machine on an older kernel, it worked on the same laptop on the newest kernel.. (WHY CACHY..WHY??).. i didn't have time to buy another one (especially because i wanted to research deeply so i could buy one that had NO DRIVERS ISSUES this time..).
- [i] This effectively made my ssh connection USELESS until i figured out a way to actually get a reliable connection to the internet.. lol

I spent so much trying to fix it; until i sent it back to amazon (luckily it was new enough to send it back within 30 days).. so now what? I had used the desktop for a while in USB Tethering from my second phone connected to my WiFi (hurrah for NAT and latency i guess..) so i though *"AH! I just leave this plugged in, easy"*.

It was not, in fact, easy:
1. USB Tethering turns off if the USB connection is unplugged or if the PC reboots
2. Trying to automate the tethering required root privileges on the phone
	- I tried using [Shizuku](https://shizuku.rikka.app/), an android application that lets your apps use ADB commands without root
	- I got as far as opening an ADB shell on the device when i realized that.. after every time i **closed** that shell, the Shizuku service would have to be restarted via GUI (not if i had rooted my device tho.. guess that might be a future article)
3. Since i had to leave for university, but my desktop will stay (at least for a while) at my parents house, if they touched the phone it would all be over

In the end i figured something out: instead of using an ADB shell on the device itself i could just send ADB commands from the desktop itself.. but without internet i couldn't send any kind of commands by hand, hence i had to automate it:
```bash
#!/bin/bash    
  
PING_TARGET="8.8.8.8"  
  
while true; do  
   if ping -c 1 -W 2 $PING_TARGET >/dev/null 2>&1; then  
       echo "$(date '+%F %T') - Internet is up."  
   else  
       echo "$(date '+%F %T') - No internet. Enabling USB tethering..."  
       adb shell "svc usb setFunctions rndis" >/dev/null 2>&1  
       echo "Waiting 10 seconds before next attempt..."  
   fi  
   sleep 10  
done
```

It's ugly, and i like it exactly the way it is.. for those that can't read bash: the script just runs every 10 seconds and pings google's DNS, if successful, the script moves on and waits another 10 seconds to repeat the process, if the ping isn't successful, it sends an `adb` command to enable the USB tethering (`rndis`).
- [i] `adb:` Android Debug Bridge, a set of tools to interface with the Android Operating System for development/debug purposes.

And now to fix the simple issue of my parents touching the phone.. i just put it inside the case.. no i'm not joking, don't believe me? Look at this:
> [!col]
> > [!col-md]
> > ![[PXL_20250901_140150885.MP.jpg|right|300]]
> 
> > [!col-md]
> > ![[PXL_20250901_140239768.MP.jpg|300]]

**HEY, STOP LOOKING AT THE DUST AND CABLE MANAGEMENT!!**.. jeez, i swear i'll clean it up once i get an actual case instead of a 20 year old hand me down..

Anyways.. this pretty much solved the networking issue (maybe not the cable management or thermal issues.. but one thing at a time alright?).
So now the second issue, the dreaded TV... i actually fixed that pretty quickly, although it kinda goes against the point of this whole exercise (i refuse to call this an actual deployment).. i just used an Amazon smart plug!
The TV had a setting to restore it's previous state after a power outage (weird, i know, for a TV? never seen that) and so i'd just cut the power whenever i was not using it (not great for the poor TV's electronics, but it is what it is).

> [!info]+
> Funnily enough, since i use KDE Plasma on Wayland, the plasmashell would sometimes crash when i turned the TV off remotely, and without plasmashell the streaming couldn't work as well; It is also impossible to restart the plasma shell through a terminal only (like ssh is)
> In the end i made another script that runs on login and just waits for a file to change, and when it does, it hard resets the shell, here is the code for those interested:
> ```bash
> #!/bin/bash
> 
> # File to watch
> WATCH_FILE="$HOME/.restart_plasma.flag"
> 
> # Make sure it exists
> touch "$WATCH_FILE"
> 
> # Kill and restart plasmashell when file changes
> restart_plasma() {
>     echo "Restarting plasmashell..."
> 	kquitapp6 plasmashell 2>/dev/null || killall plasmashell
> 	kstart5 plasmashell &
> }
> 
> # Export DISPLAY so plasmashell starts in the right session
> export DISPLAY=:0
> export XDG_RUNTIME_DIR="/run/user/$UID"
> 
> # Watch file indefinitely
> inotifywait -m -e close_write "$WATCH_FILE" | while read -r; do
> 	restart_plasma
> done
> ```

While doing this i actually discovered that i couldn't stream my desktop UNLESS a monitor was actually plugged in and working.. so that's cool, definitely not gonna come back and bite me later.

Anyways, it came and bit me back later, when i decided to ditch the Amazon Plug, here is the issue:
- I want to keep the monitor OFF, but still be able to stream
- I can make a dummy display to stream and point Sunshine to share that one
	- [i] This was actually also a pain, i'll get into it in a bit
- I find out that the dummy display cannot be streamed UNLESS at least one REAL display is plugged in and working (really??)

This stumped me for quite a bit, and not even our AI overlords could figure that out (and i won't pay the premium tiers to try if they would've solved it), but i wouldn't be writing this article if i hadn't fixed the issue right?

First of all, how i made the dummy display: i didn't have a dummy plug and, as mentioned above, couldn't buy one in time, therefore i simulated a display using an [EDID](https://en.wikipedia.org/wiki/Extended_Display_Identification_Data) file and a kernel argument:
1. Download an EDID file with the specs you want, dump one from a monitor or just generate one
	- You can dump yours with `get-edid`, using `parse-edid` you can read the capabilities of the monitor in a human readable format (the edid file used next will need to remain in binary form)
2. Store your EDID file (mine was named `virtual`) into `/usr/lib/firmware/edid` (if the folder does not exist, make it)
3. Then add these kernel parameters: `drm.edid_firmware=DP-3:edid/virtual` (Of course, replace *virtual* with the name of your file, it can be anything) and `video=DP-3:e`
	- [i] Remember to replace `DP-3` with any free video output on your graphics card, you can list your video ports and their status with this command `ls /sys/class/drm/ | grep -E 'HDMI|DP|eDP|VGA'` (just remove the `cardX-` prefix)
4. Then add the file to your *initramfs* with *mkinitcpio* (what?); it's really simple, just look it up, for arch you can read the [wiki article!](https://wiki.archlinux.org/title/Mkinitcpio)
	- In short, just add the file to your `FILES` in the `/etc/mkinitcpio.conf` like so: `FILES=(/usr/lib/firmware/edid/virtual)`
	- Then run `mkinitcpio -p <your kernel>`, in my case `mkinitcpio -p linux-cachyos`
5. Reboot

You should now have a dummy display in your DE's settings!

This is still useless tho, as without a real monitor, the kernel won't even talk to the GPU about drawing anything.. so you have to trick the kernel by **forcing the main display**, and you do this by using, once again, the `video` kernel parameter like so: `video=HDMI-A-1:D`.
- [i] Once again replacing `HDMI-A-1` with the port used by your main monitor.

This means that now at least one display is always working even though the TV isn't on, and therefore we can finally stream!!
> [!important] 
> While writing this article i just realized one could have probably just avoided the whole virtual desktop and just forced the main monitor to be always on.. i'm not gonna test it but you're welcome to do so!
> Also, cut me some slack, i was tired, frustrated and time constrained..

## Conclusions
Just because you can do something doesn't mean you should.. while experimenting i ended up trying (and succeeding) to ssh directly on the phone (wasn't helpful though), trying to embed an X11 session in my Wayland one and stream that, and many other things that didn't quite work out.
In the end, i probably should have just ditched the cloud gaming for now and come back to it with the necessary hardware.. i got better things to do anyways (University exams anyone?).. still, it was a fun process, i learned a bit more about my beloved kernel, and i learned a bit more about drm, adb and more.. and overall i'm quite happy.

Also, the multiple layers of [NAT](https://en.wikipedia.org/wiki/Network_address_translation) and the phone essentially being in a [Faraday Cage](https://en.wikipedia.org/wiki/Faraday_cage) and having a bit of poor reception make this setup pretty susceptible to network issues, and also gives the whole system a very high input latency.
Once i get out of the bus i am currently writing this article on, i will test it out, only to probably not use it..

For now this was all, thanks for reading this very dumb article, hopefully i write one before 2 years pass again..
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
