const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'articles.json');

// קריאת הנתונים מהקובץ
let articles = JSON.parse(fs.readFileSync(filePath));

// פונקציה לעדכון הקובץ
const saveArticles = () => {
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));
};

const getAllArticles = () => articles;

const getArticleById = (id) => articles.find(article => article.id == id);

const addArticle = (article) => {
    articles.push(article);
    saveArticles();
    return article;
};

const updateArticle = (id, updatedArticle) => {
    const index = articles.findIndex(article => article.id == id);
    if (index !== -1) {
        articles[index] = { ...articles[index], ...updatedArticle };
        saveArticles();
        return articles[index];
    }
    return null;
};

const deleteArticle = (id) => {
    const index = articles.findIndex(article => article.id == id);
    if (index !== -1) {
        const deleted = articles[index];
        articles.splice(index, 1);
        saveArticles();
        return deleted;
    }
    return null;
};

module.exports = {
    getAllArticles,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle
};
