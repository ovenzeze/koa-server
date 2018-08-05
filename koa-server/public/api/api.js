// host: www.icinext.com
// api-format: host/type/action/name(主机/请求类型/请求动作/路由名称)
// eg: www.icinext.com/api/get/carousel
// 错误码(前端不关心具体是什么原因导致的错误，只需要成功/失败两个状态就可以)
// code = {
//   0: "success",
//   -1: "error"
// }

// 切图时以最低质量切图就可以
// 大图最好不超过500KB，小图最好不超过200KB
// 图片尺寸
// size1: 1280x500px
// size2: 540x300px
// size3: 327x200px
// size4: 879x400px
// size5: 352x198px
// size6: 352x210px
// size7: 260x140px
// size8: 1280x560px
// （海报）首页轮播图尺寸：@size1
// （视频）每日推荐封面图： @size2
// （视频）热门精选视频封面图: @size3
// （视频）视频播放页视频封面图: @size8
// （图文）Banner主图：@size4
// （图文）Banner副图：@size5
// （图文）图文列表封面图: @size6
// （图文）热门推荐封面图: @size7

// path: api/get/carousel
// desc: '获取首页轮播图信息'
// introInfo = {
//   videoName: Required|String,//视频的标题
//   IntroText: Required|String,//视频的推介语
// }
// picItem: {
//   url: Required|String,// 图片地址
//   title: Required|String,// 图片标题(图片加载失败的提示语)
//   vid: Required|String,//视频的唯一ID
//   noTextIntro: Optional|boolean,// 是否存在文字描述，可选参数， 默认为false(存在文字描述)
//   introInfo: Optional|introInfo //文字描述信息，默认需要填写，如果没有需要设置noTextIntro为true
// }
// response: {
//   code: Required|int,
//   data: Required|Array|picItem
// }


// path: api/get/cirecom
// desc: '每日推荐视频'
// response: {
//     code: Required|int,
//     coverUrl: Required|String, //图片地址
//     videoId: Required|String, //视频唯一ID
//     title: Required|String, //视频标题
//     desc: Required|String, //视频描述
//     author: Required|String, //视频作者
//     videoDuration: Required|int, //视频时长，单位 秒
//     devices: Required|Array, //视频拍摄设备，数组，至多可以有三个 eg: ['SONY ILCE-7R','Canon EOS-1D Mark III']
//     playTimes: Required|int, //视频播放次数
//     tags: Required|Array //视频TAG信息，数组，至多可以有三个 eg: tags: ['青春','校园']
// }


// path: api/get/hotList/sequence
// desc: '热门精选视频推荐'
// intro: 每次获取9条热门精选视频，sequence参数代表获取次数，对于同一个用户(session)需要保证不同sequence推出来的视频没有重复
// hotItem: {
// coverUrl: Required|int,
// videoId: Required|String, //视频唯一ID
// title: Required|String, //视频标题
// desc: Required|String, //视频描述
// videoDuration: Required|int, //视频时长，单位 分钟
// playTimes: Required|int, //视频播放次数
// tags: Required|Array //视频TAG信息，数组，至多可以有三个 eg: tags: ['青春','校园']
// }
// response: {
//     code: Required|int,
//     data: Required|Array|hotItem
// }


// path: api/get/newsList/sequence
// desc: '图文内容推荐'
// intro: 每次获取10条图文内容，sequence参数代表获取次数，对于同一个用户(session)需要保证不同sequence推出来的内容没有重复，同时sequence最大值为5（即用户最多可加载更多内容5次）
// commentInfo = {
//   userId: Required|String, 用户唯一Id
//   userName: Required|String,'庄深沉', 用户昵称
//   comment: Required|String, 用户评论
//   likeCount: Required|int, 用户评论点赞数
// }
// newsItem= {
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
//   createTime: Required|String, 内容发布日期，只需要精确到天 eg: '2017-08-22'
//   commentNum: Required|int, 评论数
//   tags: Required|Array|String, 标签，最多支持三个标签 eg: ['电影节', '资讯', '赫尔佐格']
//   author: Required|String, 图文内容的作者
//   intro: Required|String, 图文内容的导语，最多140字
//   hasHotComment: Required|Boolean, 默认为false,无热门评论
//   hotComment: Optional|Object|commentInfo, 当有热门评论时，需要携带commentInfo信息
// }
// response: {
//     code: Required|int,
//     data: Required|Array|newsItem
// }



// path: api/get/newsListRecom/
// desc: '热门图文内容推荐'
// intro: 每次获取10条图文内容
// newsItem= {
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
//   createTime: Required|String, 内容发布日期，只需要精确到天 eg: '2017-08-22'
//   commentNum: Required|int, 评论数
//   tags: Required|Array|String, 标签，最多支持三个标签 eg: ['电影节', '资讯', '赫尔佐格']
//   author: Required|String, 图文内容的作者
//   intro: Required|String, 图文内容的导语，最多140字
// }
// response: {
//     code: Required|int,
//     data: Required|Array|newsItem
// }


// path: api/get/newsListBanner/
// desc: '热门图文内容Banner'
// intro: 三条热门/编辑推荐图文内容（一主两次）[主要图文会有大图Banner,次要的是小图Banner]，置于图文页最上方
// newsItem= {
//   coverUrl: Required|String, 图文内容封面图地址
//   articleId: Required|String, 图文内容唯一Id
//   type: Required|int, 默认为1(资讯)，图文内容类型
//   title: Required|String, 内容标题
// }
// banner = {
//   main: Required|Array|bannerItem, 大图Banner,只有一张
//   secondary: Required|Array|bannerItem, 小图Banner,两张
// }
// response: {
//     code: Required|int,
//     data: Required|Object|banner
// }


// path: api/get/comments/{videoId|articleId}
// desc: '根据VideoId|articleId获取评论信息'
// commentItem = {
//   userName: Required|String, 用户昵称
//   userId: Required|String, 用户Id
//   userAvator: Required|String, 用户头像地址
//   createdTime: Required|String, 评论创建时间, eg: '2018-6-3 11:20:20'
//   likeCount: Required|Int, 评论点赞数, eg: 1531
//   commentId: Required|String,评论唯一ID,
//   commentText: Required|String, 评论内容
//   isLiked: Required|boolean 默认值: false 当前登录用户是否有对这条评论点赞
// }
// response: {
//     code: Required|int,
//     data: Required|Array|commentItem
// }


// path: api/get/videoInfo/{videoId}
// desc: '根据VideoId获取视频基本信息'
// videoInfo = {
//   videoId: Required|String, 视频Id
//   videoCoverImg: Required|String, 视频封面大图地址
//   videoName: Required|String, 视频名称
//   editorIntroText: Required|String, 编辑推荐文案
//   directorIntroText: Required|String, 导演说文案
//   devices: Required|Array|String, 使用设备数组 eg: ['SONY ILCE-7R', 'Canon EOS-1D Mark III', 'Canon EOS-1D Mark III']
//   dirctorName: Required|String, 导演名称
//   creativeTeam: Required|Array|String, 主创人员数组 eg: ['Endy', 'Clay', 'Ovenzeze', '装深沉', '张镇', '沈庄城']
//   videoDuration: Required|Int, 视频时长 单位:秒
//   playTimes: Required|Int, 533 视频播放次数
//   updateTime: Required|String, 视频上传时间, eg: '2018-6-20'
//   scores: {
//     whole: Required|Int, 整体评分， 此分数根据其他四项分数计算得出，保留一位小数点 eg: 7.5
//     script: Required|Int, 剧本评分，7.5
//     photograph: Required|Int, 摄像评分，7.5
//     actor: Required|Int, 演员评分，7.5
//     light: Required|Int, 灯光评分，7.5
//   }
// }
// response: {
//     code: Required|int,
//     data: Required|Object|videoInfo
// }



// path: api/get/articleInfo/{articleId}
// desc: '根据articleId获取图文页基本信息'
// authorInfoObj = {
//   authorId: Required|String, 用户唯一ID
//   authorName: Required|String, 用户昵称
//   authorAvator: Required|String, 用户头像
//   totalReadTimes: Required|Int, 用户文章总阅读次数
//   totalArticleNum: Required|Int 用户文章总数
// }
// articleInfo = {
//   articleId: Required|String, 视频Id
//   articleCoverImg: Required|String, 图文封面大图地址，若无 填一张Cinext的默认图
//   articleTitle: Required|String, 名称
//   articleText: Required|String, 文章内容
//   readTimes: Required|Int, 阅读次数
//   postTime: Required|String, 发布时间
//   commentNum: Required|Int, 评论数
//   authorInfo: Required|Object|authorInfoObj, 用户信息
// }
// response: {
//     code: Required|int,
//     data: Required|Object|articleInfo
// }

// 登录
// path: api/post/login/
// request: {
//     mail: Required|String, 邮箱
//     password: Required|String, 约定算法加密后的字符串 cinext+password+timestamp 进行SHA1加密的值
//     timestamp: Required|String, 时间戳
//     validateTime: Required|Int, 登录有效期 0 仅本次访问有效 24 24小时内有效 24*7=168 一周内有效
//     key: Required|String, 有效登录验证参数 cinext+registerMail+timestamp 进行SHA1加密的值
// }
// response: {
//     code: Required|int, 登录成功或失败的返回码
//     msg: Required|String 成功或失败的提示信息
//     cookie: Reqiured|String 登录成功时才有这个字段
// }

// 注册
// path: api/post/register/
// request: {
//     3-10位英文字符 可以包含特殊符号 不允许重复
//     username: Required|String, 用户名
//     mail: Required|String, 邮箱
//     小写字母 大写字母 数字 至少两种组成的6位以上字符
//     password: Required|String, 约定算法加密后的字符串 cinext+password+timestamp 进行SHA1加密的值
//     timestamp: Required|String, 时间戳
//     key: Required|String, 有效登录验证参数 cinext+registerMail+timestamp 进行SHA1加密的值
// }
// response: {
//     code: Required|int, 注册成功或失败的返回码 0 成功 1 邮箱已注册 2 用户名已存在 -1 其他错误
//     msg: Required|String 成功或失败的提示信息
// }

// 获取个人信息（用于个人详情页）
// path: api/get/userInfo/{userId}
// desc: 获取个人详细信息
// userInfo = {
//   userId: Required|String, 用户唯一ID
//   userName: Required|String, 用户昵称
//   authorName: Required|String, 用户昵称
//   authorAvator: Required|String, 用户头像
//   totalReadTimes: Required|Int, 用户文章总阅读次数
//   totalArticleNum: Required|Int, 用户文章总数
//   registerMail: Required|String, 用户注册邮箱
//   gender: Required|String, 性别 男 或 女 或 其他
//   province: Required|String, 所在省份
//   city: Required|String, 所在城市
//   signature: Required|String, 个性签名
// }
// response: {
//     code: Required|int,
//     data: Required|Object|userInfo
// }

// 增加新评论
// path: api/post/addComment/
// request: {
//     userId: Required|String,用户唯一ID
//     type: Required|Int, 1 代表视频 2 代表图文
//     id: Required|Int, 图文或视频唯一ID
//     commentText: Required|String, 评论文本内容
// }
// response: {
//     code: Required|int, 评论添加成功或失败返回码
//     msg: Required|String 成功或失败的提示信息
// }

// 删除评论（只能删除自己的）
// path: api/get/deleteComment/?key=value
// data: {
//     userId: Required|String,用户唯一ID
//     commentId: Required|String, 评论唯一ID
// }
// response: {
//     code: Required|int, 评论添加成功或失败返回码
//     msg: Required|String 成功或失败的提示信息
// }

// 点赞评论
// path: api/get/likeComment/?key=value
// data: {
//     userId: Required|String,用户唯一ID
//     commentId: Required|String, 评论唯一ID
// }
// response: {
//     code: Required|int, 评论添加成功或失败返回码
//     msg: Required|String 成功或失败的提示信息
// }

// 提交视频信息（视频上传）
// path: api/post/uploadVideo/

