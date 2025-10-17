document.addEventListener('DOMContentLoaded', () => {
    // Select the element using its required data-testid
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    /**
     * Updates the text content of the time element with the current timestamp in milliseconds.
     */
    function updateTime() {
        const currentTime = Date.now();
        if (timeElement) {
            // The value equals Date.now() and is shown in milliseconds.
            timeElement.textContent = currentTime.toString();
        }
    }

    // 1. Initial call to set the time immediately upon load (for acceptance criteria)
    updateTime();

    // 2. Set an interval to update the time frequently (e.g., every 100ms) for high accuracy.
    setInterval(updateTime, 100);
});