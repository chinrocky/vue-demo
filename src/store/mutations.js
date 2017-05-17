import * as types from './types'

import getters from './getters'

const state = {
  mindex_state: false,
  cindex_state: false,
  sindex_state: false,
  list_title: '列表页',
  foot_state: true
};

const mutations = {
  [types.MENUITYINDEXSTATE](state, boolean){  // 设置菜谱首页组件的显示状况
    state.mindex_state = boolean;
  },
  [types.COMMUNITYINDEXSTATE](state, boolean){  // 设置社区首页组件的显示状况
    state.cindex_state = boolean;
  },
  [types.SHOPINDEXSTATE](state, boolean){ // 设置商城首页组件显示状态
    state.sindex_state = boolean;
  },
  [types.SETLISTTITLE](state, title){ // 设置列表页的title
    state.list_title = title;
  },
  [types.SETFOOTSTATE](state, boolean){ // 设置底部导航栏显示状态
    state.foot_state = boolean;
  }
}

export default {
  state,
  mutations,
  getters
}
