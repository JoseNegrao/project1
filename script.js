document.getElementById('save-button').addEventListener('click', function () {
    const noteContent = document.getElementById('note-content').innerHTML;

    // Generate a unique key
    const noteId = generateId();

    // Save the note to local storage
    localStorage.setItem(noteId, noteContent);

    // Display the link
    const linkContainer = document.getElementById('link-container');
    const link = `${window.location.href.split('?')[0]}?note=${noteId}`;
    linkContainer.innerHTML = `<a href="${link}">Your note link: ${link}</a>`;
});

function generateId() {
    return 'note-' + Math.random().toString(36).substr(2, 9);
}

// Load the note if a note ID is present in the URL
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const noteId = urlParams.get('note');

    if (noteId) {
        const savedNote = localStorage.getItem(noteId);
        if (savedNote) {
            document.getElementById('note-content').innerHTML = savedNote;
        } else {
            alert("No note found with this ID.");
        }
    }
};

