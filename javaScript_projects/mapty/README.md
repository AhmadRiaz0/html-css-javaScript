Mapty
Interactive workout tracking application built with JavaScript, Leaflet.js, and the Geolocation API.
Users can log running and cycling workouts directly on a map, store them locally, and interact with their data through an intuitive UI.

Features
Geolocation & Map
Automatically detects the user's location using the Geolocation API
Displays a Leaflet map centered on the user’s coordinates
Allows the user to add workouts by clicking anywhere on the map
Custom popups for each workout marker

Workout Management
Running :
Distance (km), Duration (min), Cadence (steps/min)
Automatic calculation of Pace (min/km)
Cycling :
Distance (km), Duration (min), Elevation Gain (m)
Automatic calculation of Speed (km/h)

Interactive UI
Form that appears when clicking on the map
Workout list with icons and metrics
Smooth map movement to workout markers when clicking items
Clear and responsive layout

Local Storage Persistence
Automatically saves all workouts to localStorage
Reloading the page restores all entries and markers
Option to reset all data

Technologies Used
Language: JavaScript (ES6+)
UI: HTML, CSS
Maps: Leaflet.js
API: Geolocation API
Storage: localStorage
Editor: Visual Studio Code
Tools: Live Server (for local testing)
