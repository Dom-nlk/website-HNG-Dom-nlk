
document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const currentTimeUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
