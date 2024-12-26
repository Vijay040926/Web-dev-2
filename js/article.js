// Get article ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'));

// Function to display full article
function displayArticle() {
    const article = articles.find(a => a.id === articleId);
    
    if (!article) {
        window.location.href = '../index.html';
        return;
    }

    const articleContainer = document.getElementById('article-content');
    articleContainer.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-hero-image">
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span class="category">${article.category}</span>
            <span class="date">${article.date}</span>
        </div>
        <p class="article-content">${article.content}</p>
    `;

    document.title = `${article.title} - TechNews Hub`;
}

// Load article content
displayArticle();