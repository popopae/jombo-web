import { handleActions } from 'redux-actions';
import { RootState } from './state';

const initialState: any =
{
    default: (state:any, action:any) => {
        return {
            ...state,
        };
    }
};

export const defaultReducer = handleActions<RootState>(
    {
        'persist/REHYDRATE': (state, action) => {            
            return {
                ...state
            };
        }
    },
    initialState
);

