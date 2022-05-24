// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {
    for (let key in window.caches.keys()) {
        window.caches.delete(key);
    }
}, false);