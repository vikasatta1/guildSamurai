import {combineReducers, createStore} from 'redux'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./redux/app-reducer";
import {postsReducer} from "./redux/posts-reducer";
import {blogsReducer} from "./redux/blogs-reducer";
import {authReducer} from "./redux/auth-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth:authReducer,
    posts: postsReducer,
    blogs: blogsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;