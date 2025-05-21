const articles= require('../models/articles');  
const getArticle=(req, res)=>{
   
    res.json(articles.getAllArticles()) 

}
let nextId=3;
const addArticle=(req, res)=>{
  const { title, author, published, content } = req.body;
    const newArticle = {
        id: nextId++,
        title,
        author,
        published,
        content
    };
    articles.addArticle(newArticle);
     res.status(201).json(newArticle);}
     const updateArticle=(req, res)=>{
        const id = Number(req.params.id);
        const updatedArticle = req.body;
        const article = articles.updateArticle(id, updatedArticle);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'Article not found' });
        }}
        const deleteArticle=(req, res)=>{
            const id = Number(req.params.id);
            const deletedArticle = articles.deleteArticle(id);
            if (deletedArticle) {
                res.json(deletedArticle);
            } else {
                res.status(404).json({ message: 'Article not found' });
            }
        }
module.exports={getArticle, addArticle,updateArticle, deleteArticle}