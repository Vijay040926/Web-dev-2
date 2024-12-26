// Function to create article card
function createArticleCard(article) {
    return `
        <div class="article-card">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-content">
                <h2>${article.title}</h2>
                <p>${article.summary}</p>
                <div class="article-meta">
                    <span class="category">${article.category}</span>
                    <span class="date">${article.date}</span>
                </div>
                <a href="pages/article.html?id=${article.id}" class="read-more">Read More</a>
            </div>
        </div>
    `;
}

// Function to refresh articles
function refreshArticles() {
    const articlesContainer = document.getElementById('featured-articles');
    articlesContainer.innerHTML = '';
    
    // Shuffle articles array to simulate refresh
    const shuffledArticles = [...articles].sort(() => Math.random() - 0.5);
    
    // Display first 6 articles
    shuffledArticles.slice(0, 6).forEach(article => {
        articlesContainer.innerHTML += createArticleCard(article);
    });
}

// Initial load
refreshArticles();

// Refresh articles every 5 minutes
setInterval(refreshArticles, 300000);