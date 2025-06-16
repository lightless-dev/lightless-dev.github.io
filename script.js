function playNow() {
    const select = document.getElementById('gameSelect');
    const url = select.value;

    if (url) {
        window.location.href = url;
    } else {
        alert('Please select a version/beta version first!');
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.header-right');
    if(menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
});
