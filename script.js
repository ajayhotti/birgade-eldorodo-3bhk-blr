// Simple image click to enlarge
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const win = window.open();
    win.document.write(`<img src="${img.src}" style="width:100%">`);
  });
});
