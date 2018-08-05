// 首页轮播图
const slideData = [
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w',
        title: 'slide1',
        noTextIntro: true,
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/19/5ad876b00b5bf.jpg@1920w',
        title: 'slide2'
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        title: 'slide3'
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/18/5ad734e10e00f.jpg@1920w',
        title: 'slide4',
        noTextIntro: true,

    },
]
// 每日推荐
const ciRecom = {
    id: "001",
    coverUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
    title: '课间十分钟',
    desc: '这是郑晓明的故事，也是每一个中学生的故事。这是郑晓明的故事，也是每一个中学生的故事。',
    author: 'endyzhuang',
    videoDuration: 896,
    devices: ['SONY ILCE-7R', 'Canon EOS-1D Mark III'],
    playTimes: 344,
    tags: ['青春', '校园'],
}
// 热门视频
const hotList = [
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w',
        videoId: '001',
        title: '马驹',
        desc: '一段回忆，一段青春; 二段回忆，二段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '002',
        title: '马驹',
        desc: '赫尔佐新说:"这个学校不是为怯懦的人开放的"',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/19/5ad876b00b5bf.jpg@1920w',
        videoId: '003',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '004',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '005',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '006',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
]
// 热门视频加载更多
const hotListMore = [
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/09/5acb77528ada5.jpg@1920w',
        videoId: '001',
        title: '马驹',
        desc: '一段回忆，一段青春; 二段回忆，二段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '002',
        title: '马驹',
        desc: '赫尔佐新说:"这个学校不是为怯懦的人开放的"',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/19/5ad876b00b5bf.jpg@1920w',
        videoId: '003',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '004',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '005',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
    {
        picUrl: 'https://cs.vmovier.com/Uploads/Banner/2018/04/20/5ad97803dd398.jpg@1920w',
        videoId: '006',
        title: '马驹',
        desc: '一段回忆，一段青春',
        duration: '23',
        playTimes: 65,
        tags: ['青春', '文艺', '友情'],
    },
]
// 图文推荐
const newsList = [
    {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0001',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0002',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0003',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0004',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0005',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0006',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0007',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0008',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },{
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0009',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0010',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },
]
// 图文推荐加载更多
const newsListMore = [
    {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0011',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0012',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0013',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0014',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0015',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0016',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0017',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0018',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },{
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0019',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0020',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },
]
// 热门图文推荐
const newsListRecom = [
    {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0011',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0012',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0013',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0014',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0015',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。新片场对导演本人进行了采访，聊了聊。',
        hasHotComment: true,
        hotComment: {
            userId: '0001',
            userName: '庄深沉',
            comment: '只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。只拍了3天的片子，他用40天排练。'
        }
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0016',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0017',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0018',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },{
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0019',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    }, {
        coverUrl: 'http://cs.xinpianchang.com/uploadfile/tmp/article/2018/05/02/5ae981a158177_cut.jpg@720w_480h_1e_1c',
        articleId: '0020',
        type: '0',
        title: '只拍了3天的片子，他用40天排练',
        createTime: '2017-08-22',
        commentNum: 10,
        tags: ['电影节', '资讯', '赫尔佐格'],
        author: 'cinext',
        intro: '曾以《揍他一顿》入围2017New Era青年电影季的导演杨科，近来又推出了他的新作《男孩们》，这也是他“校园三部曲”的最终章。就此，新片场对导演本人进行了采访，聊了聊。'
    },
]

module.exports = {
    slideData,
    ciRecom,
    hotList,
    hotListMore,
    newsList,
    newsListMore,
    newsListRecom
}