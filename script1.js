document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.querySelector('.notes-list');

    // Fetch notes from local storage
    const username = document.cookie;
    var notes = JSON.parse(localStorage.getItem(username))['notes'];
    console.log(notes)
    
    console.log(typeof(notes))

    // Check if there are no notes
    if (notes === "nothing") {
        const noNotesMessage = document.createElement('h4');
        noNotesMessage.classList.add('no');
        noNotesMessage.innerText = 'No Notes Here, Tap + to add notes';
        notesList.appendChild(noNotesMessage);
    } else {
        var i=0;
        notes=JSON.parse(notes)
        typeof(notes)
        notes.forEach(note => {
            console.log(note)
            const noteBox = document.createElement('div');
            noteBox.classList.add('note-box');
            noteBox.innerHTML = `<a href="/view-note.html?id=${i}">
                <h3 id="${String(i)}">${note.title}</h3>
                <p>${(note.content).substring(0,10)+'...'}</p></a>
            `;i++;
            notesList.appendChild(noteBox);
        });
    }
});
