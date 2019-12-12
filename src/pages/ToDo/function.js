export default {
    /**********************LifeCycle Components in Order **********************************/

    shouldComponentUpdate: function (nextProps, nextState) {
       
    },

    componentWillMount: function () {
       
    },

    /***********************Additonal Functions to be used within component ***************/
    addToDo: function(list) {
        let lists = [...this.state.lists, list]

        this.setState({
            lists: lists
        })
    },

    updateToDo: function(id, newTodo) {
        const items = this.state.lists
        
        items.map(item => {
            if (item.id === id) {
                item.content = newTodo;
                item.id=id
            }
            return item
        })

        this.setState({
            lists: items
        })

    },

    onChanged: function(e) {
        e.preventDefault();
        if(e.target.value !== '') {
            this.setState({
                content: e.target.value
            })
        }
    },

    deleteHandler: function(id) {
        const lists = this.state.lists.filter(list => {
            return list.id !== id
        });

        this.setState({
            lists: lists
        })
    },

    clearAll: function() {
        this.setState({
            lists: []
        })
    },

    /**********************Connecting and defining the Redux ******************************/
    mapStateToProps: function (state) {
        return {
        }
    },
    mapDispatchToProps: function (dispatch) {
        return {

        }
    },
}
// Local functions limitng to only this component