import { createContext, useReducer } from 'react';

interface State {
    sortBy: string;
    genre: string;
    query: string;
}

interface SearchAction {
    type: String;
    payload: string;
}

const INITIAL_STATE: State = {
    sortBy: 'popularity.desc',
    genre: '',
    query: '',
};

const SearchReducer = (state: State, action: SearchAction) => {
    switch (action.type) {
        case 'SORT_BY':
            return { ...state, sortBy: action.payload, query:""};
            break;
        case 'ADD_GENRE':
            return { ...state, genre: action.payload, query:"" };
            break;
        case 'ADD_QUERY':
            return { ...state, query: action.payload };
            break;
        default:
            return state;
    }
};

export const SearchContext = createContext<{
    state: State;
    dispatch: React.Dispatch<SearchAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

interface ProviderProps {
    children: React.ReactNode;
}
export const SearchContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
};

function Switch(type: string) {
    throw new Error('Function not implemented.');
}
