function downloadFile(filePath) {
    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'Angela Chen resume';
    a.click();
}

window.downloadFile = downloadFile;
