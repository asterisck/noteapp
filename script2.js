document.addEventListener('DOMContentLoaded', function () {
    const createButton = document.querySelector('.create-button');
    const titleInput = document.querySelector('.note-form input');
    const contentTextarea = document.querySelector('.note-form textarea');
    const username = document.cookie;

    createButton.addEventListener('click', function () {
        // Get the note title and content from the input fields
        const noteTitle = titleInput.value;
        const noteContent = contentTextarea.value;

        // Create a new note object
        const newNote = {
            title: noteTitle,
            content: noteContent
        };

        // Fetch the existing notes for the user
        var existingNotes = JSON.parse(localStorage.getItem(username));
        console.log(existingNotes)
        // Add the new note to the existing notes
        if (existingNotes['notes']=="nothing"){var ns=[]}
        else{var ns =JSON.parse(existingNotes['notes']);}
        console.log(typeof(ns))
        ns.push(newNote)
        existingNotes['notes']=JSON.stringify(ns)

        // Store the updated notes in local storage
        localStorage.setItem(username, JSON.stringify(existingNotes));

        // Clear the input fields after creating the note
        titleInput.value = '';
        contentTextarea.value = '';

        // Optionally, you can redirect the user to the notes.html page
        // window.location.href = '/notes.html';
    });
});
