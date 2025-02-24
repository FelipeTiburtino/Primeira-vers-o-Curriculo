function toggleProjects() {
    toggleContent('projects');
}

function toggleAboutMe() {
    toggleContent('about-me');
}

function toggleServices() {
    toggleContent('services');
}

function toggleContent(id) {
    const content = document.getElementById(id);
    const allContents = document.querySelectorAll('.content');

    allContents.forEach(div => {
        if (div.id !== id) {
            div.style.display = 'none';
        }
    });

    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
