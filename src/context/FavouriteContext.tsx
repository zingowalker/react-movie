import { createContext, useReducer } from 'react';

export interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

interface State {
    favourites: Movie[];
}

interface FavouriteAction {
    type: String;
    payload: Movie;
}

const INITIAL_STATE: State = {
    favourites: [],
};

const FavouriteReducer = (state: State, action: FavouriteAction) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return { favourites: [...state.favourites, action.payload] };
            break;
        case 'REMOVE_MOVIE':
            return {
                favourites: [...state.favourites.filter((item) => item.id !== action.payload.id)],
            };
            break;
        default:
            return state;
    }
};

export const FavouriteContext = createContext<{
    state: State;
    dispatch: React.Dispatch<FavouriteAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

interface ProviderProps {
    children: React.ReactNode;
}
export const FavouriteContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(FavouriteReducer, INITIAL_STATE);

    return (
        <FavouriteContext.Provider value={{ state, dispatch }}>
            {children}
        </FavouriteContext.Provider>
    );
};

function Switch(type: string) {
    throw new Error('Function not implemented.');
}
