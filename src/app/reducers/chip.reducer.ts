import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { Chip } from 'app/models/payload/chip/Chip';
import { ChipAction } from 'app/actions/chip.action';

const initialState: RootState.ChipState = new Array<Chip>();

export const chipReducer = handleActions<RootState.ChipState, Chip[]>(
    {
        [ChipAction.Type.SET_CHIP]: (state, action: Action<Chip[]>) => {
            return action.payload;
        },
        [ChipAction.Type.REMOVE_CHIP]: (state, action: Action<Chip[]>) => {
            let findRemove = action.payload.pop();
            return state.filter((filter) => { 
                return filter.id !== findRemove.id
            });
        },
        [ChipAction.Type.CLEAR_CHIP]: () => {
            return new Array<Chip>();
        },
    },
    initialState
);