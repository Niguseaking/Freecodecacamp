function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Example data for 20 clubs
const clubs = [
    { club: 'Team A', mp: 38, w: 26, d: 8, l: 4, gf: 80, ga: 30 },
    { club: 'Team B', mp: 38, w: 24, d: 10, l: 4, gf: 70, ga: 35 },
    { club: 'Team C', mp: 38, w: 20, d: 8, l: 10, gf: 65, ga: 40 },
    { club: 'Team D', mp: 38, w: 18, d: 10, l: 10, gf: 60, ga: 42 },
    { club: 'Team E', mp: 38, w: 16, d: 12, l: 10, gf: 58, ga: 45 },
    { club: 'Team F', mp: 38, w: 14, d: 10, l: 14, gf: 52, ga: 50 },
    { club: 'Team G', mp: 38, w: 12, d: 14, l: 12, gf: 50, ga: 48 },
    { club: 'Team H', mp: 38, w: 12, d: 12, l: 14, gf: 48, ga: 52 },
    { club: 'Team I', mp: 38, w: 10, d: 14, l: 14, gf: 46, ga: 55 },
    { club: 'Team J', mp: 38, w: 9, d: 10, l: 19, gf: 45, ga: 60 },
    { club: 'Team K', mp: 38, w: 8, d: 12, l: 18, gf: 43, ga: 65 },
    { club: 'Team L', mp: 38, w: 8, d: 10, l: 20, gf: 42, ga: 70 },
    { club: 'Team M', mp: 38, w: 7, d: 10, l: 21, gf: 40, ga: 72 },
    { club: 'Team N', mp: 38, w: 6, d: 12, l: 20, gf: 38, ga: 75 },
    { club: 'Team O', mp: 38, w: 5, d: 14, l: 19, gf: 36, ga: 78 },
    { club: 'Team P', mp: 38, w: 5, d: 12, l: 21, gf: 35, ga: 80 },
    { club: 'Team Q', mp: 38, w: 4, d: 14, l: 20, gf: 34, ga: 82 },
    { club: 'Team R', mp: 38, w: 4, d: 12, l: 22, gf: 32, ga: 84 },
    { club: 'Team S', mp: 38, w: 3, d: 15, l: 20, gf: 30, ga: 85 },
    { club: 'Team T', mp: 38, w: 2, d: 12, l: 24, gf: 28, ga: 90 },
];

// Function to calculate points and goal difference
function calculatePointsAndGD(clubs) {
    return clubs.map(team => {
        const pts = (team.w * 3) + (team.d * 1);
        const gd = team.gf - team.ga;
        return { ...team, pts, gd };
    });
}

// Populate standings table
function populateStandingsTable() {
    const standingsTableBody = document.querySelector('#standings tbody');
    const updatedClubs = calculatePointsAndGD(clubs);

    // Sort clubs by points and goal difference
    // Sort clubs by points and goal difference
updatedClubs.sort((a, b) => b.pts - a.pts || b.gd - a.gd);

updatedClubs.forEach((team, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${team.club}</td>
        <td>${team.mp}</td>
        <td>${team.w}</td>
        <td>${team.d}</td>
        <td>${team.l}</td>
        <td>${team.pts}</td>
        <td>${team.gf}</td>
        <td>${team.ga}</td>
        <td>${team.gd}</td>
    `;
    standingsTableBody.appendChild(row);
});
}

// Call the function to populate the standings table when the page loads
document.addEventListener('DOMContentLoaded', populateStandingsTable);

