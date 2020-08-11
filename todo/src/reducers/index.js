export const toDo = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action )=>{
    switch(action.type) {
        case 'add':
            return [...state,
                        {
                        item: action.payload[0],
                        id: Date.now(),
                        completed: false
                    }]

        case 'toggle':
            return state.map(item =>{
                if(item.id === action.payload) {
                    return {
                        ...item, 
                        completed: !item.completed
                    }
                }
                return item
            })

            case 'clear':
                return state.filter(item => !item.completed)

                default:

                return state;
    }
}