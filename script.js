// Welcome screen
setTimeout(() => {
    document.getElementById('welcomeScreen').classList.add('hidden');
}, 3000);

// Time updates
function updateTimes() {
    const now = new Date();
    const localTimeEl = document.getElementById('localTime');
    const koreaTimeEl = document.getElementById('koreaTime');

    if (localTimeEl) {
        // Use Asia/Yangon for Myanmar time
        const myanmarTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Yangon' }));
        localTimeEl.textContent = myanmarTime.toLocaleTimeString();
    }
    
    if (koreaTimeEl) {
        const koreaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
        koreaTimeEl.textContent = koreaTime.toLocaleTimeString();
    }
}
updateTimes();
setInterval(updateTimes, 1000);

// Tab navigation
const tabs = document.querySelectorAll('.nav-tab');
const sections = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
    if (!tab.style.cursor || tab.style.cursor !== 'not-allowed') {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            sections.forEach(section => {
                if (section.id === targetTab) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    }
});