import keys from './keys';

let CheckList = localStorage.CheckList;
if(CheckList) CheckList = JSON.parse(CheckList);
else CheckList = {CheckList: []};

export default (state= CheckList, action) => {
  const {type, payload} =  action;
  switch (type) {
    case keys.ADD:
      const index = state.CheckList.indexOf(payload);
      if(index !== -1){
        state.CheckList.splice(index, 1);
      } else {
        state.CheckList.push(payload);
      }
      localStorage.CheckList = JSON.stringify(state);
      return {...state};
    default:
      return {...state};
  }
}