var router = require('express').Router();
var { mock, Random } = require('mockjs');

router.get('/api/categories', (req, res) => {
    var mainIds = [Random.id(), Random.id(), Random.id(), Random.id()];
    res.send(mock({
        categories: [{
            id: mainIds[0],
            name: '文化',
            subCategories: [
                { id: mainIds[0], name: '文学' },
                { id: Random.id(), name: '社科' },
                { id: Random.id(), name: '艺术' },
                { id: Random.id(), name: '心理' },
            ]
        }, {
            id: mainIds[1],
            name: '工作',
            subCategories: [
                { id: mainIds[1], name: '商业' },
                { id: Random.id(), name: '管理' },
                { id: Random.id(), name: '技能' },
                { id: Random.id(), name: '编程' },
                { id: Random.id(), name: '金融' },
            ]
        }, {
            id: mainIds[2],
            name: '生活',
            subCategories: [
                { id: mainIds[2], name: '旅行' },
                { id: Random.id(), name: '居家' },
                { id: Random.id(), name: '美食' },
                { id: Random.id(), name: '健美' },
                { id: Random.id(), name: '育儿' },
            ]
        }, {
            id: mainIds[3],
            name: '外文',
            subCategories: [
                { id: mainIds[3], name: '英语' },
                { id: Random.id(), name: '日语' },
                { id: Random.id(), name: '繁体中文' },
                { id: Random.id(), name: '语言学习' },
            ]
        },]
    }));
});

function generalBooks() {
    var title = [Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5), Random.cword(3, 5),];
    var bookList = mock({
        count: 20,
        'start|0-99': 0,
        'total|0-99': 0,
        result: [
            { id: Random.id(), title: title[0], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[0]) },
            { id: Random.id(), title: title[1], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[1]) },
            { id: Random.id(), title: title[2], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[2]) },
            { id: Random.id(), title: title[3], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[3]) },
            { id: Random.id(), title: title[4], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[4]) },
            { id: Random.id(), title: title[5], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[5]) },
            { id: Random.id(), title: title[6], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[6]) },
            { id: Random.id(), title: title[7], latestSellers: [{ id: Random.id(), avatar: Random.image('28x28', '#643a48', '#ffffff', 'avatar') }], author: Random.cname(), 'rating|0-9.1': 0, 'price|0-99.1': 0, 'originalPrice|99-999.1': 0, images: Random.image('90x128', '#643a48', '#ffffff', title[7]) },
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

router.get('/api/books/:id', (req, res) => {
    var title = Random.ctitle(2, 5),
        relatedTitles = [
            Random.ctitle(2, 8), Random.ctitle(2, 8),
            Random.ctitle(2, 8), Random.ctitle(2, 8),
            Random.ctitle(2, 8), Random.ctitle(2, 8),
            Random.ctitle(2, 8), Random.ctitle(2, 8),
            Random.ctitle(2, 8), Random.ctitle(2, 8),
            Random.ctitle(2, 8), Random.ctitle(2, 8),
        ],
        sellerCount = Math.ceil(Math.random() * 9);
    res.send(mock({
        detail: {
            // book-cover
            title: title,
            subtitle: Random.ctitle(2, 9),
            images: Random.image('310x430', '#f28181', '#ffffff', title),
            // book-seller
            sellerCount: sellerCount,
            latestSellers: (() => {
                var sellers = [];
                for (let max = sellerCount > 3 ? 3 : sellerCount, i = 0; i < max; i++) {
                    sellers.push({ name: Random.cname(), avatar: Random.image('28x28', '#f28181', '#ffffff', 'avatar') })
                }
                return sellers;
            })(),
            // book-detail
            author: Random.cname(),
            'publisher|1': ['上海译文出版社', '译林出版社', '人民文学出版社', '中信出版社', '北京十月文艺出版社', '当代世界出版社', '复旦大学出版社'],
            publishDate: Random.date('yyyy-MM'),
            'bingding|1': ['平装', '精装'],
            'rating|0-9.1': 0,
            // book-price
            'price|100-9999': 0,
            'originalPrice|9999-20000': 0,
            // book-brief
            summary: '在这里，雪域之天堂触手可及。 在这里，记忆冲破时空的枷锁。 在这里，人们思索过去和未来。 在这里，失落的信仰终被寻回。 一本书，一个人，一份坚定的信仰，一种彻悟的力量。 一百余幅穿越时空的藏地影像，带你探寻三十年秘境记忆。',
            authorIntro: '徐家树，澳籍华人，摄影家，翻译家，旅行家。 国内最早深入拍摄藏地的摄影家之一。 英国皇家摄影学会高级会士，澳大利亚职业摄影家协会会员，中国摄影家协会会员。 曾获英国皇家摄影学会第130届国际摄影展银奖（曾在CCTV《新闻联播》中报道）、澳大利亚职业摄影协会全国摄影展览银 奖（1991年）、美国“Communication Arts”杰出摄影奖（1992年）等。作品曾登上《经济学家》杂志2003年1月封面。 二十世纪八十年代，因机缘巧合，有幸前往西藏，并为此着迷。三十年间，不惜远渡重洋，多次往返信仰之地，用无数张影像和随行记录，向藏地虔诚朝圣。 出版作品：《水云木石：风光摄影之道》（清华大学出版社，2014年） 译著：《世界的眼睛》（中国摄影出版社，2013年）《 美国〈生活〉杂志摄影师访谈录（1-4）》（中国摄影出版社，2013年）',
            catalog: '【推荐序】朝圣记：影像与文字镌刻的天路心经 【缘•生】 夏河的夜 唤起内心的诉求 晒佛节上的信徒 与神耳语 【漫•行】 沱沱河边 停靠那曲 经幡 宫殿的山 记忆拉萨 那一瞬的虔诚 哲蚌寺里凝固的时光 朝圣布达拉宫 绿松石镶成的雍仲 “318”往事 白居寺佛眼 藏王的子孙 寻找昌珠寺 桑耶寺渡船 再逢晒佛节 藏地那些人儿 老朋友贡太 郎木寺法会 梵天的云 【尘•隐】 远离喧嚣的小镇 被遗忘的古城 六月血祭 约瑟夫•洛克曾经来过 【后记】我与西藏',
            // book-related
            'relatedTags|6-12': [{
                id: Random.id(),
                'name|+1': [
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                    Random.ctitle(2, 8), Random.ctitle(2, 8),
                ]
            }],
            'relatedBooks|6-12': [{
                id: Random.id(),
                'title|+1': relatedTitles,
                'images|+1': [
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[0]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[1]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[2]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[3]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[4]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[5]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[6]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[7]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[8]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[9]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[10]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[11]),
                    Random.image('90x128', '#643a48', '#ffffff', relatedTitles[12]),
                ]
            }],
        }
    }));
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

router.get('/api/collections', (req, res) => {
    res.send(mock({
        collections: {
            'data|0-99': [{
                'id|+1': (() => {
                    var ret = [];
                    for (let i = 0; i < 99; i++) {
                        ret.push(Random.id());
                    }
                    return ret;
                })(),
                'name|+1': (() => {
                    var ret = [];
                    for (let i = 0; i < 99; i++) {
                        ret.push(Random.ctitle(2, 9));
                    }
                    return ret;
                })(),
                'availableCount|1-999': 0,
                image: Random.image('475x335', '#643a48'),
            }]
        }
    }));
});

router.get('/api/collections/:id/books', (req, res) => {
    res.send(generalBooks());
});

router.get('/api/users/:id', (req, res) => {
    res.send(mock({
        user: {
            name: Random.cname(),
            avatar: Random.image('76x76', '#643a48', '#ffffff', 'avatar'),
            'income|0-99999': 0,
            'owningBookCount|0-1': 0,
            'soldBookCount|0-666': 0,
            'backgroundImages|0-1': [Random.image('90x128', '#643a48', '#ffffff', 'Sold-Book')]
        }
    }));
});

router.get('/api/users/:id/sold-books', (req, res) => {
    res.send(mock({
        count: 20,
        'start|0-99': 0,
        'total|0-99': 0,
        'result|1-3': [{
            'created|+1': [Random.date('yyyy-MM-dd'), Random.date('yyyy-MM-dd'), Random.date('yyyy-MM-dd')],
            'soldCount|0-9': 0,
            'userBooks|1-6': [{
                'stock|1': true,
                'wishCount|1-66': 0,
                'id|+1': [Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id()],
                'image|+1': [
                    Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'sold-book'),
                    Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'sold-book'),
                    Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'sold-book')
                ],
                'title|+1': [Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle()]
            }]
        }]
    }));
});

router.get('/api/users/:id/owning-books', (req, res) => {
    res.send(mock({
        count: 20,
        'start|0-99': 0,
        'total|0-99': 0,
        'result|0-6': [{
            'stock|1': true,
            'wishCount|1-66': 0,
            'id|+1': [Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id()],
            'image|+1': [
                Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'owning-book'),
                Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'owning-book'),
                Random.image('90x128', '#643a48', '#ffffff', 'sold-book'), Random.image('90x128', '#643a48', '#ffffff', 'owning-book')
            ],
            'title|+1': [Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle(), Random.ctitle()]
        }]
    }));
});

router.get('/api/tags/:id', (req, res) => {
    res.send(mock({
        tag: {
            id: Random.id(),
            'bookCount|0-99': 0,
            name: Random.ctitle()
        }
    }))
});

router.get('/api/tags/:id/books', (req, res) => {
    res.send(generalBooks())
});

router.get('/api/books/:id/sellers', (req, res) => {
    res.send(mock({
        count: 20,
        'start|0-99': 0,
        'total|0-99': 0,
        'result|12': [
            {
                'id|+1': [Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id(), Random.id()],
                'name|+1': [Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname()],
                'soldBookCount|0-99': 0,
                'avatar|+1': [Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar'), Random.image('30x30', '#643a48', '#fff', 'avatar')]
            }
        ]
    }));
});

router.get('/api/search/recommendations', (req, res) => {
    res.send(mock({
        labels: ["电影", "爱情", "漫画", "料理", "编程", "猫", "产品", "安妮宝贝", "明朝", "创业"]
    }))
});

router.get('/api/search', (req, res) => {
    res.send(mock({
        result: [
            { type: 'tag', tag: { id: Random.id(), name: Random.ctitle(2), 'bookCount|0-999': 0 } },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: true, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },

            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
            { id: Random.id(), 'receivedCount|0-999': 0, 'wishCount|0-999': 0, title: Random.ctitle(), author: Random.cname(), 'price|100-9999': 0, stock: false, image: Random.image('50x70', '#643a48', '#ffffff', '皇帝的新衣') },
        ]
    }));
});

module.exports = router;