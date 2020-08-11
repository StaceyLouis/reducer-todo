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
               list: state.list.map(item =>{
                   if(item.id=== action.payload){
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
                    list: state.list.filter(item => !item.completed
                )
            }

                default:

                return state;
    }
}