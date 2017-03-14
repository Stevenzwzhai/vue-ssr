/**
 * Created by Stevenzwzhai on 2017/3/14.
 */
import {app, store} from './app'

export default ({initialState}) => {
    initialState = store.state;
    return app;
}