function playNow() {
const select = document.getElementById('gameSelect');
const url = select.value;

if (url) {
window.location.href = url;
} else {
alert('Please select a version/beta version first!');
}
}
