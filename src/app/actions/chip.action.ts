import { createAction } from 'redux-actions';

import { Chip } from 'app/models/payload/chip/Chip';

export namespace ChipAction {
    export enum Type {
        SET_CHIP = 'set_chip',
        REMOVE_CHIP = 'remove_chip',
        CLEAR_CHIP = 'clear_chip'
    }

    export const setChip = createAction<Chip[]>(Type.SET_CHIP);
    export const removeChip = createAction<Chip>(Type.REMOVE_CHIP);
    export const clearChip = createAction(Type.CLEAR_CHIP);
    
    export function set(request: Chip[]) {
        return (dispatch: any) => {
            dispatch(setChip(request));
        }
    }

    export function remove(request: Chip) {
        return (dispatch: any) => {
            dispatch(removeChip(request));
        }
    }

    export function clear() {
        return (dispatch: any) => {
            dispatch(clearChip());
        }
    }
}

export type ChipAction = Omit<typeof ChipAction, 'Type'>;
