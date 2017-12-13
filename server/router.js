var router = require('express').Router();
var { mock, Random } = require('mockjs');


function generalBooks() {
    var title = [Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5),];
    var bookList = mock({
        'books': [
            { id: Random.id(), title: title[0], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[0]) },
            { id: Random.id(), title: title[1], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[1]) },
            { id: Random.id(), title: title[2], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[2]) },
            { id: Random.id(), title: title[3], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[3]) },
            { id: Random.id(), title: title[4], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[4]) },
            { id: Random.id(), title: title[5], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[5]) },
            { id: Random.id(), title: title[6], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[6]) },
            { id: Random.id(), title: title[7], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[7]) },
        ]
    });
    return bookList;
}
router.get('/api/categories/:id/books', (req, res) => {
    res.send(generalBooks());
});

router.get('/api/home_books', (req, res) => {
    res.send(generalBooks());
});

router.get('/api/home_collections', (req, res) => {
    res.send(mock({
        collections: {
            'count|0-99': 0,
            'data|6': [{
                id: Random.id(),
                'name|+1': [Random.ctitle(1, 9), Random.ctitle(1, 9), Random.ctitle(1, 9), Random.ctitle(1, 9), Random.ctitle(1, 9), Random.ctitle(1, 9)],
                'bookCount|0-999': 0
            }]
        }
    }));
});

router.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);
    var title = Random.ctitle(2, 5);
    res.send(mock({
        detail: {
            title: title,
            subtitle: Random.ctitle(2, 9),
            images: Random.image('150x210', '#643a48', '#ffffff', title),
            'rating|0-9.1': 0,
        }
    }));
});

module.exports = router;