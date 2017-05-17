import * as types from './types'

export const setMenuIndexState = ({commit}, boolean) => {
  commit(types.MENUITYINDEXSTATE, boolean);
}
export const setCommunityIndexState = ({commit}, boolean) => {
  commit(types.COMMUNITYINDEXSTATE, boolean);
}
export const setShopIndexState = ({commit}, boolean) => {
  commit(types.SHOPINDEXSTATE, boolean);
}
export const setListTitle = ({commit}, title) => {
  commit(types.SETLISTTITLE, title);
}
export const setFootState = ({commit}, boolean) => {
  commit(types.SETFOOTSTATE, boolean);
}
