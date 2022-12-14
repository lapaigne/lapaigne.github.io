window.onload = function () {
    document.querySelectorAll('.topbar-btn').forEach(e => e.addEventListener('click', topbarHandler));
    calculate();
    poly();
}

function topbarHandler(event) {
    document.querySelectorAll('.content-item').forEach(e => e.classList.add('hidden'));
    document.getElementById(event.target.dataset.content).classList.remove('hidden');
}