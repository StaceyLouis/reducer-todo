export const initialToDo = {
    list: [
        {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
        }
    ]}


export const reducer = (state, action )=>{
    switch(action.type) {
        case 'add':

            return{
                list: [...state.list,
                        {
                        item: action.payload,
                        id: Date.now(),
                        completed: false
                    }]}

        case 'toggle':
            return {
               list: state.list.map((item,id) =>{
                   if( id=== action.id){
                       return {
                           ...item, completed:!item.completed
                       }
                   } else {
                       return item
                   }
               })
            }

            case 'clear':
                return {
                    list: state.list.filter(item => item.completed === false)
                }
            

                default:

                return state;
    }
}