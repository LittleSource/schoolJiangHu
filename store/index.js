import Vue from 'vue'
import Vuex from 'vuex'
import global from '../global' //引用全局变量文件
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: {
			hasLogin: false, //是否登录
			id: 0,
			openId: '',
			type: -1, //第三方登录类型
			token: '', //token
			phone: '', //手机号
			avatar: '', //头像
			password: '', //密码
			userName: '', //昵称
			sex: 0, //性别
			merchant: 0 //是否商家
		},
		addressInfo: { //地址信息
			name: null,
			phone: null,
			city: null,
			adress: null
		},
		school: {
			id: '11853391869743621792',
			title: '',
			addr: ''
		},
		selectSchool: {
			id: '11853391869743621792',
			title: '',
			addr: ''
		},
		msgList: [{
				id: 69,
				to_id: 67,
				avatar: 'https://apii.ym998.cn//static/avatar/5cc1c5c2312b7.jpg',
				name: "源哥",
				msg: '人生在世，及时行乐',
				status: "未读",
				unread: 1
			}, {
				id: 67,
				to_id: 69,
				avatar: 'http://thirdqq.qlogo.cn/g?b=oidb&k=MnkDBng1YxwnmSsDgy1nyw&s=140',
				name: "蛇皮",
				msg: '还有聊天功能啊，不错不错',
				status: "未读",
				unread: 1
			},
			{
				id: 111,
				to_id: 70,
				avatar: 'https://apii.ym998.cn//static/avatar/5cbe9e3c2e0dd.jpg',
				name: "狸猫",
				msg: 'TOP校园真好用啊！',
				status: "未读",
				unread: 1
			}
		],
		unreadCount: 3,
		historyMsg: {
			67: [{
				id: 100,
				name: "历史",
				face: "https://staticimgs.oss-cn-beijing.aliyuncs.com/glogo.png",
				ctype: 1,
				msg: "历史消息演示文本内容...",
				date: '2018 01-01 00:00'
			}, {
				id: 100,
				name: "历史",
				face: "https://staticimgs.oss-cn-beijing.aliyuncs.com/glogo.png",
				ctype: 1,
				msg: "源哥最帅",
				date: '2018 01-01 00:00'
			}],
			189: [{
				id: 100,
				name: "to蛇皮",
				face: "https://staticimgs.oss-cn-beijing.aliyuncs.com/glogo.png",
				ctype: 1,
				msg: "历史消息演示文本内容...",
				date: '2018 01-01 00:00'
			}],
			70: [{
				id: 100,
				name: "to蛇皮",
				face: "https://staticimgs.oss-cn-beijing.aliyuncs.com/glogo.png",
				ctype: 1,
				msg: "怎么说呢",
				date: '2018 01-01 00:00'
			}]
		}
	},
	mutations: {
		regSetPhoneAndPass(state, payload) {
			state.user.phone = payload.phone;
			state.user.password = payload.password;
		},
		regSetSex(state, sex) {
			state.user.sex = sex;
		},
		regSetSchool(state, school) {
			state.school = school;
			state.selectSchool = school;
		},
		regSetAvatar(state, avatar) {
			state.user.avatar = avatar;
		},
		regSetUserName(state, userName) {
			state.user.userName = userName;
		},
		regAfterLogin(state, payload) {
			state.user.id = payload.user.user_id;
			state.user.phone = payload.user.phone;
			state.user.sex = payload.user.sex;
			state.user.userName = payload.user.user_name;
			state.user.avatar = payload.user.avatar;

			state.user.openId = payload.user.openId;
			state.user.token = payload.token;

			state.user.password = ''; //为了安全置空密码
			state.user.hasLogin = true;
			this.commit('loginAfterSetStorage');
		},
		login(state, payload) {
			state.user.id = payload.user.user_id;
			state.user.phone = payload.user.phone;
			state.user.sex = payload.user.sex;
			state.user.userName = payload.user.user_name;
			state.user.avatar = payload.user.avatar;
			state.user.merchant = payload.user.merchant;
			state.user.openId = payload.user.openId;
			state.user.token = payload.token;

			state.school = payload.school;
			state.selectSchool = state.school; //登陆后选择的学校默认是自己的学校

			state.addressInfo = payload.addressInfo; //同步地址信息
			state.user.hasLogin = true;
			this.commit('loginAfterSetStorage');
		},
		logOut(state) {
			state.hasLogin = false;
			uni.clearStorage();
		},
		loginAfterSetStorage(state) {
			uni.setStorage({
				key: 'user',
				data: state.user
			});
			uni.setStorage({
				key: 'school',
				data: state.school
			});
			uni.setStorage({
				key: 'selectSchool',
				data: state.selectSchool
			});
			uni.setStorage({
				key: 'addressInfo',
				data: state.addressInfo
			});
		},
		setOpenId(state, playload) {
			state.user.openId = playload.openId;
			state.user.type = playload.type;
		},
		checkSchool(state, payload) {
			state.selectSchool = payload;
			uni.setStorage({
				key: 'selectSchool',
				data: payload,
				fail: function() {
					uni.showModal({
						title: '提示',
						content: '学校切换失败！',
						showCancel: false
					});
				}
			});
		},
		changeAddressInfo(state, addressInfo) {
			state.addressInfo = addressInfo;
			uni.setStorage({
				key: 'addressInfo',
				data: state.addressInfo
			});
		},
		appOnLunch(state, user) {
			//获取用户基本信息
			state.user = user;
			state.school = uni.getStorageSync('school');
			state.selectSchool = uni.getStorageSync('selectSchool');
			state.addressInfo = uni.getStorageSync('addressInfo');
			//设置未读消息
			uni.setTabBarBadge({
				index: 2,
				text: state.unreadCount.toString()
			});
			//暂时注释掉  个人详情开发完毕再搞
			//state.msgList = uni.getStorageSync('msgList');
			//state.historyMsg = uni.getStorageSync('historyMsg');
		},
		connectAndOnMessage(){
			uni.connectSocket({//尝试连接Socket服务
				url: global.serverChat,
			});
			this.commit('onMessage'); //开始监听
		},
		onMessage(state) {
			var _self = this;
			uni.onSocketOpen(function(res) {
				console.log('WebSocket连接已打开！');
				var initDate = {
					ctype: 'init',
					id: state.user.id
				};
				uni.sendSocketMessage({
					data: JSON.stringify(initDate)
				});
				uni.onSocketMessage(function(res) {
					global.playMessage(); //播放通知音乐
					var newMsg = JSON.parse(res.data); //消息json转换为对象
					console.log(JSON.stringify(newMsg));
					var payload = new Object(); //准备载荷
					payload.newMsg = newMsg;
					//准备消息列表的消息文本
					var msgListText = '';
					switch (newMsg.ctype) { //根据newMsg.ctype转换为正确的消息列表的消息文本
						case 2:
							msgListText = '[图片]';
							break;
						case 3:
							msgListText = '[语音]';
							break;
						case 4:
							msgListText = '[系统通知]';
							break;
						default:
							msgListText = newMsg.msg;
					}
					//准备消息列表对象
					payload.msgObj = {
						id: state.user.id,
						to_id: newMsg.id,
						avatar: newMsg.face,
						name: newMsg.name,
						msg: msgListText,
						status: "未读",
						unread: 1
					};
					_self.commit('addMsg', payload); //提交载荷到addMsg处理
				});
			});
		},
		addMsg(state, payload) {
			var hasMsg = false; //检测消息列表是否有相同的人
			for (var i = 0; i < state.msgList.length; i++) {
				if (state.msgList[i].to_id === payload.msgObj.to_id) {
					hasMsg = true;
					break;
				}
			}
			if (hasMsg) {
				state.historyMsg[payload.newMsg.id].push(payload.newMsg); //将消息放在历史记录
				state.msgList[i].msg = payload.msgObj.msg; //更新消息列表消息内容
				state.msgList[i].unread += 1; //未读数量+1
			} else {
				state.historyMsg[payload.newMsg.to_id] = []; //新建历史记录数组 索引为对方id
				state.historyMsg[payload.newMsg.to_id].push(payload.newMsg); //将此信息添加进刚新建的历史记录
				state.msgList.unshift(payload.msgObj); //将消息列表对象添加进消息列表，并且置顶
				console.log(JSON.stringify(state.historyMsg));
			}
			uni.setTabBarBadge({
				index: 2,
				text: state.unreadCount.toString()
			});

			this.commit('setMsgStorage');
		},
		sendMsg(state, newMsg) {
			uni.sendSocketMessage({
				data: JSON.stringify(newMsg)
			});
			var hasMsg = false; //消息列表是否有相同的人
			for (var i = 0; i < state.msgList.length; i++) {
				if (state.msgList[i].to_id == newMsg.to_id) {
					hasMsg = true;
					break;
				}
			}
			//准备消息列表的消息文本
			var msgListText = '';
			switch (newMsg.ctype) { //根据newMsg.ctype转换为正确的消息列表的消息文本
				case 2:
					msgListText = '[图片]';
					break;
				case 3:
					msgListText = '[语音]';
					break;
				case 4:
					msgListText = '[系统通知]';
					break;
				default:
					msgListText = newMsg.msg;
			}
			if (hasMsg) {
				state.historyMsg[newMsg.to_id].push(newMsg); //添加历史记录
				state.msgList[i].msg = msgListText; //更新消息列表消息文本
			} else {
				//创建消息列表对象
				var msgListObj = {
					id: state.user.id,
					to_id: newMsg.id,
					avatar: newMsg.face,
					name: newMsg.name,
					msg: msgListText,
					status: "已读",
					unread: 0
				};
				state.historyMsg[newMsg.to_id] = []; //创建聊天历史记录数组
				state.historyMsg[newMsg.to_id].push(newMsg); //添加此条消息到历史记录
				state.msgList.unshift(msgListObj); //将消息列表对象添加进消息列表，并且置顶
			}
			this.commit('setMsgStorage');
		},
		changeMsg(state, index) {
			//设置tabbar的小红点
			state.unreadCount -= state.msgList[index].unread;
			if (state.unreadCount !== 0) {
				uni.setTabBarBadge({
					index: 2,
					text: state.unreadCount.toString()
				});
			} else {
				uni.removeTabBarBadge({
					index: 2
				});
			}

			state.msgList[index].unread = 0;
			state.msgList[index].status = "已读";
			this.commit('setMsgStorage');
		},
		delMsg(state, index) {
			state.msgList.splice(index, 1);
			this.commit('setMsgStorage');
		},
		setMsgStorage(state) { //本地缓存消息列表和消息历史记录
			uni.setStorage({
				key: 'msgList',
				data: state.msgList
			});
			uni.setStorage({
				key: 'historyMsg',
				data: state.historyMsg
			});
		}
	}
})

export default store
