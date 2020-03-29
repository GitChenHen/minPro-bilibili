Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    "navList":[
      {
      "id":0,
      "text":"首页"
     },
     {
       "id":1,
       "text":"动画"
     },
     {
       "id": 2,
       "text": "科技"
     },
      {
        "id": 3,
        "text": "游戏"
      },
      {
        "id": 4,
        "text": "新闻"
      },
      {
        "id": 5,
        "text": "程序"
      },
      {
        "id": 6,
        "text": "舞蹈"
      },
      {
        "id": 5,
        "text": "军事"
      }
    ],
    "swiperList":[
      {
        "id":0,
        "link":"",
        "imgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562164667140&di=40a0b6b6669585f5f2b67d315a90d933&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D79449f3b76cf3bc7e855c5e8e4309697%2F2fdda3cc7cd98d101fa46f07273fb80e7bec9097.jpg"
      },
      {
        "id":1,
        "link":"",
        "imgUrl":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508918309,373388177&fm=26&gp=0.jpg"
      },
      {
        "id":2,
        "link":"",
        "imgUrl":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3619465302,973941116&fm=26&gp=0.jpg"
      }
    ],
    "videosList": [
      {
        "id": 0,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",
        "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
        "playCount": "24.9万",
        "commentCount": "1345",
        "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {
        "id": 1,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",
        "desc": "【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": "http://files.ak48.xyz/20181219211856.mp4"
      },
      {
        "id": 2,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",
        "desc": "迈克尔杰克逊封神的12秒，无人能做到",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": "http://files.ak48.xyz/20181219211920.mp4"
      },
      {
        "id": 3,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",
        "desc": "【2018】年度影视混剪 Ready Story 2018【混剪】",
        "playCount": "40.0万",
        "commentCount": "1066",
        "videoSrc": "http://files.ak48.xyz/20181219211910.mp4"
      },
      {
        "id": 4,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/2cc604557cab1f6fd79591981891467f7b825010.jpg@320w_200h.webp",
        "desc": "当你觉得扛不住的时候来看看这段视频",
        "playCount": "82.7万",
        "commentCount": "719",
        "videoSrc": ""
      },
      {
        "id": 5,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/0fc171eaa7bf6b81cf5427fc57db104a4ef719d7.jpg@320w_200h.webp",
        "desc": "【1080/漫威/衔接踩点向】前方高能！带你体验完美流畅的衔接踩点视觉盛宴！",
        "playCount": "28.9万",
        "commentCount": "817",
        "videoSrc": ""
      },
      {
        "id": 6,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0bf251d3f3b2cb589532aa24eaea140b312f7765.jpg@320w_200h.webp",
        "desc": "【木鱼微剧场】诺兰作品《星际穿越》，严谨的科学精神与深刻人文关怀（Re:C）",
        "playCount": "44.6万",
        "commentCount": "7149",
        "videoSrc": ""
      },
      {
        "id": 7,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/4a4155cf25b38da958e64b531709bca37927c82b.jpg@320w_200h.webp",
        "desc": "【嘻咦啊看】其实很多人一辈子都不懂得怎样道歉",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": ""
      },
      {
        "id": 8,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/54cd74a9bfd187fb795724c7bb51272e7c07a2e5.jpg@320w_200h.webp",
        "desc": "【改革春风吹满地】【漫威/香港电影/赵本山】和斧头帮一起吹满地吧~",
        "playCount": "30.4万",
        "commentCount": "373",
        "videoSrc": ""
      },
      {
        "id": 9,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/9046c3db8d6cddf56287fa1ead4e406baf4747f3.jpg@320w_200h.webp",
        "desc": "一家永远没有回头客的店《自杀专卖店》",
        "playCount": "40.0万",
        "commentCount": "1066",
        "videoSrc": ""
      },
      {
        "id": 10,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/67e474f4fa31d5a2a8a6241a28cdf67be898eed4.png@320w_200h.webp",
        "desc": "【演技】吃饭同样是吃空气，为什么演技差距如此之大！",
        "playCount": "65.7万",
        "commentCount": "3083",
        "videoSrc": ""
      },
      {
        "id": 11,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/67be0fadbe5eec5b967132c38fba65913cac7f43.jpg@320w_200h.webp",
        "desc": "【盘点火影真人版】我叫王大锤，是个忍者！这次参加了一个高成本火影忍者大电影！！",
        "playCount": "46.1万",
        "commentCount": "2090",
        "videoSrc": ""
      },
      {
        "id": 12,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/332b9cf87e30331277c84dcc47b1d53c2cb3fdfb.jpg@320w_200h.webp",
        "desc": "女部落奇怪规定，女人怀孕后必须吃男人补身体，还好这只是电影",
        "playCount": "56.6万",
        "commentCount": "663",
        "videoSrc": ""
      },
      {
        "id": 13,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/2e30177ef42ea0a420cd9926870d1463ed0be11c.jpg@320w_200h.webp",
        "desc": "《爱情公寓》令人窒息的骚操作！让人笑出猪叫声的神操作盘点！ 第十九弹",
        "playCount": "53.9万",
        "commentCount": "543",
        "videoSrc": ""
      },
      {
        "id": 14,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/cab6d4254e4b97a0edf4d2393f5e8aed4a90201c.jpg@320w_200h.webp",
        "desc": "【全程高能】一个角色的三观到底能够正到什么地步【世间清流】",
        "playCount": "32.6万",
        "commentCount": "2425",
        "videoSrc": ""
      },
      {
        "id": 15,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/396dfc33b8c3f426606760f9614759d7cf29c28d.png@320w_200h.webp",
        "desc": "明星20年后再次演绎自己的经典角色，谁变化最小",
        "playCount": "46.6万",
        "commentCount": "2770",
        "videoSrc": ""
      },
      {
        "id": 16,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/f03f82e14ee380f8e44c0b62924438f0ccc93750.jpg@320w_200h.webp",
        "desc": "一部拷问社会和人性的电影，极度真实，中国版的《东京物语》！",
        "playCount": "37.9万",
        "commentCount": "1658",
        "videoSrc": ""
      },
      {
        "id": 17,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/7ea04d86d345d109df15fd8fae5a1a12eca14b88.jpg@320w_200h.webp",
        "desc": "【公开处刑】演技炸裂与演技尴尬到底是什么样子：我是谢晓飞，我走路拽起来都是演技？",
        "playCount": "42.4万",
        "commentCount": "5165",
        "videoSrc": ""
      }
      ]
  },
  /*
  *点击首页导航按钮
   */
  activeNav(e) {
    this.setDate({
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})