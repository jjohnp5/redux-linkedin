import C from './constants';
import storeFactory from './store';
import {suggestResortNames} from './actions'



const store = storeFactory()

store.dispatch(suggestResortNames('hea'))
