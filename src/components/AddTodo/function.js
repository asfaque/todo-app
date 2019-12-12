import uuid from 'uuid';

export default {
    /**********************LifeCycle Components in Order **********************************/

    shouldComponentUpdate: function (nextProps, nextState) {
       
    },

    componentWillMount: function () {
       
    },

    /***********************Additonal Functions to be used within component ***************/
    onHandleChange: function(e){
        e.preventDefault();
        if(e.target.value !== '') {
            this.setState({
                content: e.target.value
            })
        }
    },

    handleSubmit: function(e){
        e.preventDefault();
        if(this.state.content !== '') {
            this.props.addToDo(this.state);
            this.setState({
                content: '',
                id: uuid()
            })
        }
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