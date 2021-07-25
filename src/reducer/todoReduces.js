
const initialData={
    list:[]
}

const  todoReducers=(state=initialData,action)=>{
 switch(action.type){
    case "ADD_TODO":
         const {id,data}=action.payload;
         return{
             ...state,
             list:[
                 ...state.list,
                 {
                    id:id,
                     data:data,
                 }
             ]
         }
    case "DELETE_TODO":
        const {elementId} = action.payload;
        const New = state.list.filter((elem)=>elem.id !== elementId)
        return{
            ...state,
              list:New
    }
    case "REMOVE_TODO":return{
        ...state,
        list:[]
    }
    default :return state;
 }
}
export default todoReducers;