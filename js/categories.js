// Function to display articles by category
function displayCategoryArticles() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const category = card.dataset.category;
        const categoryArticles = articles.filter(article => article.category === category);
        const articlesContainer = card.querySelector('.category-articles');
        
        categoryArticles.forEach(article => {
            articlesContainer.innerHTML += `
                <div class="category-article">
                    <img src="${article.image}" alt="${article.title}" class="article-hero-image">
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
            `;
        });
    });
}

// Load category articles
displayCategoryArticles();