// 1. DATA ARRAY: Add your images and links here
// To get image URLs from the Google Site: Right-click an image -> "Copy image address"
const games = [
    {
        title: "Slope",
        image: "https://classroom-6x.lol/_next/image?url=https%3A%2F%2Fcdn.shst.at%2Fimages%2Fgames%2Fslope.png&w=128&q=75",
        link: "https://kkgames.github.io/slope/" 
    },
    {
        title: "1v1.LOL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzY3zN8N_X1Nf5YpPZ5o8E9h-pL-lqS-mEig&s",
        link: "https://1v1.lol"
    },
    {
        title: "BitLife",
        image: "https://play-lh.googleusercontent.com/H_f-R6U9p6M7L9f5B_R_3E5b6q9Z5F6",
        link: "https://bitlifeonline.io"
    },
    {
        title: "Tunnel Rush",
        image: "https://edumaps.net/wp-content/uploads/2022/12/tunnel-rush.png",
        link: "https://kkgames.github.io/tunnel-rush/"
    }
];

const gameGrid = document.getElementById('gameGrid');

// 2. FUNCTION TO RENDER GAMES
function displayGames(gameList) {
    gameGrid.innerHTML = ""; // Clear grid
    
    gameList.forEach(game => {
        const card = document.createElement('a');
        card.href = game.link;
        card.className = 'game-card';
        card.target = "_blank"; // Opens game in new tab

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <p>${game.title}</p>
        `;
        
        gameGrid.appendChild(card);
    });
}

// 3. SEARCH LOGIC
function searchGames() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(term)
    );
    displayGames(filteredGames);
}

// Initial Load
displayGames(games);
