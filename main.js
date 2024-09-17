
var map;

// Select all markers
const markers = document.querySelectorAll('.map-marker');

// Loop through each marker and add hover event listeners
markers.forEach(marker => {
    // When the mouse enters the marker
    marker.addEventListener('mouseover', () => {
        marker.style.transform = 'scale(2.5)'; // Increase size by 1.5 times
    });

    // When the mouse leaves the marker
    marker.addEventListener('mouseout', () => {
        marker.style.transform = 'scale(1)'; // Return to original size
    });
});
