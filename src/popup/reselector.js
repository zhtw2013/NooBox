import {createSelector} from 'reselect';

export const nooboxSelector      = (state) => state.noobox;
export const overviewSelector    = (state) => {
  const overview  = state.overview;
  // console.log(overview);
  let autoRefresh = {
    ifRefresh: overview.ifRefresh,
    refreshInterval:overview.refreshInterval,
    refreshElapsed:overview.refreshElapsed,
  }
  return{
    inited:overview.inited,
    tabId: overview.tabId,
    showImageSearch:overview.showImageSearch,
    showAutoRefresh:overview.showAutoRefresh,
    showHtml5Video: overview.showHtml5Video,
    autoRefresh,
  }
};
export const optionsSelector     = (state) => state.options;
export const userHistorySelector = (state) => state.userHistory;
export default createSelector(
  [nooboxSelector,overviewSelector,userHistorySelector,optionsSelector],
  (noobox,overview,userHistory,options)=>{
  return{
    noobox,
    overview,
    userHistory,
    options,
  }
})