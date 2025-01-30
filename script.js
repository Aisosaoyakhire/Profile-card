function updateTime() {
    const timeElement = document.querySelector("[data-testid='currentTimeUTC']");
    const now = new Date();
    timeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}
updateTime();
setInterval(updateTime, 1000);

function toggleReadMore() {
    const moreText = document.getElementById('moreText');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
}
