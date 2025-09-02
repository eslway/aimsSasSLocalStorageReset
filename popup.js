const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url && tab.url.includes('asia.common.solumesl.com')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                localStorage.clear();
            }
        });
    }
});