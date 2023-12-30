
interface Member {
    id: number;
    name: string;
    email: string;
    organisation_id: number;
  }
  // Now, I'll rename the interface in the `ProjectList` component from `State`
  // to `ProjectsState`. And I'll also export the interface. 

  export interface MembersState {
    members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  } 
  // Next, I'll comment the `Action` interface
  
  // interface Action {
  //   type: string;
  //   payload?: any;
  // }
  
  // Then I'll define a new type called `ProjectsActions` 
  // for all possible combimations of action objects.
  
  export type MembersActions = 
    | { type: 'FETCH_MEMBERS' }
    | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_MEMBERS_ERROR'; payload: string }
    | { type: 'ADD_MEMBER'; payload: Member }
    | { type: 'DELETE_MEMBER'; payload: Member }

  
 
  export const initialStateMember: MembersState = {
    members: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };
  // export const reducer = (state: State, action: Action): State => {
  

  export const reducer = (state: MembersState = initialStateMember, action: MembersActions): MembersState => {
    switch (action.type) {
      case "FETCH_MEMBERS":
        return {
          ...state,
          isLoading: true
        };   
      case "FETCH_MEMBERS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          members: action.payload,
        };      
      case "FETCH_MEMBERS_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true, 
          errorMessage: action.payload
        };   
      case 'ADD_MEMBER':
        return { ...state, members: [...state.members, action.payload] };        
      case 'DELETE_MEMBER':
        return { ...state,members: [...state.members]};        
      default:
        return state;
    }
  }
