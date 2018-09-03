import { OperationVariables } from 'react-apollo';
export interface IPlaceholder {
  placeholder: {}
}

export interface IApolloRequestErrorProps {
  refetch: () => void
  variables: OperationVariables
}
