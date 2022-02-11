const initialState = {
    laps:[],
}

const lapReducer = (state = initialState,action)=>{
      //action will give me payload and type of action
      switch(action.type){
          case 'ADDLAP':
              return {
                  ...state,
                  laps:action.payload,
              }
            case 'DROPLAP':
                return{
                    ...state,
                    laps:[]
                }
            default: return state;
            }
}

export default lapReducer;