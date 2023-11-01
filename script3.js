var searchParams = new URLSearchParams(new URL(document.URL).search);

// Get the value of the "id" parameter
var idValue = searchParams.get("id");
const username = document.cookie;
    var notes = JSON.parse(localStorage.getItem(username))['notes'];
    console.log(notes)
    
    console.log(typeof(notes))
    notes=JSON.parse(notes)
    var noteContentDiv = document.querySelector('.note-content');
    noteContentDiv.textContent = notes[idValue].content;

    var noteContentDiv = document.querySelector('.note-title');
    noteContentDiv.textContent = notes[idValue].title;    