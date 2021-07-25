
export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    } 
}
export const deleteTodo=(elementId)=>{
        return{
            type:"DELETE_TODO",
            payload:{
                elementId:elementId
            }
           
        
    }
}
export const removeTodo=()=>{
    return{
        type:"REMOVE_TODO"
    }
}

