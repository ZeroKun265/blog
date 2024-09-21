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