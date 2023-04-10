const Comment = require('./Comment')

class Post{
    constructor(title, bodie, author) {
        this.title = title;
        this.bodie = bodie;
        this.author = author;
        this.comments = [];
        this.createAt = new Date();
    }

    newComment(username, content){
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post;