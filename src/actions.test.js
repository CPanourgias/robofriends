import * as actions from './actions'
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware])

it('Should return action to search', () => {
    const text = 'OMG';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

describe('It should hande API requests', () => {

    it('requesting robots API pending', () => {

        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })

    // it('requesting robots API success', () => {
        
    //     const store = mockStore();
    //     return store.dispatch(actions.requestRobots())
    //         .then(() => {
    //             const actions = store.getActions();
    //             const expectedAction = {
    //                 type: REQUEST_ROBOTS_SUCCESS,
    //                 payload: data
    //             }
    //             expect(actions[0]).toEqual(expectedAction)
    //         })
    // })
})

