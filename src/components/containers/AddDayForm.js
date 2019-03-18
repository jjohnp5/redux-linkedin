import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import {addDay, suggesResortNames, clearSuggestions, suggestResortNames} from '../../actions';

const mapStateToProps = (state, props) => {
    return {
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching,
        router: props.router
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewDay({resort, date, powder, backcountry}){
            dispatch(addDay(resort, date, powder, backcountry))
        },
        onChange(value){
            if(value){
                dispatch(suggestResortNames(value))
            }else{
                dispatch(clearSuggestions())
            }
        },
        onClear(){
            dispatch(clearSuggestions())
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)