import { getUser, getAddressList } from '../service/getData'
import { GET_USERINFO, SAVE_ADDRESS } from './mutation-types.js'

/**
 * {async}表示该方法为异步函数
 * {await}表示同步等待结果
 */

/**
 * {commit}commit提交的结果为mutations同步结果
 */

export default {

	async getUserInfo({ commit, state }){
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
	async saveAddress({ commit, state }){
		if(state.removeAddress.length > 0) return;
		let addres = await getAddressList(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);	
	},
	
}

/**
 * 1.	在action中commit
 * 2.	根据commit的type自动匹配mutation中的方法(如果有荷载res)
 * 3.	则匹配的function(state, res)
 * 4.	然后根据res去改变state, 一次commit完成
 */