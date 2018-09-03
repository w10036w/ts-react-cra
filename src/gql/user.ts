import { DocumentNode } from 'apollo-link';
import gql from 'graphql-tag';
import { IGqlProps } from '~type'

export const USER_FIELDS = `
id
username
displayName
email
avatar
role
bio
hidden
createAt
updateAt
`
export function queryUsers(
  props: IGqlProps = {
    fields: USER_FIELDS,
    operationName: 'queryUsers',
    args: '',
  }
): DocumentNode {
  return gql`query ${props.operationName}{
    users${props.args} {
      ${props.fields}
    }
  }`
}
export const QUserList = queryUsers({
  fields: 'id,username,displayName,role,avatar,createAt,updateAt',
  operationName: 'QUserList',
  args: '',
})
export function QUser(
  props: IGqlProps = {
    fields: USER_FIELDS,
    operationName: 'queryUser',
  }
): DocumentNode {
  return gql`query ${props.operationName}{
    user${props.args} {
      ${props.fields || USER_FIELDS}
    }
  }`
}
export function MCreateUser(fields?: TemplateStringsArray): DocumentNode {
  return gql`
    mutation createUser($userInput: UserInput) {
      createUser(input: $userInput) {
        ${fields || USER_FIELDS}
      }
    }`
}
export function updateUser(fields?: TemplateStringsArray): DocumentNode {
  return gql`
    mutation updateUser($id: ID, $userInput: UserInput) {
      updateUser(id: $id, input: $userInput) {
        ${fields || USER_FIELDS}
      }
    }`
}
