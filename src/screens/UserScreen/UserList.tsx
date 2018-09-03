import { Button } from 'antd';
import * as React from 'react';
import Lazyload from 'react-lazyload';
import { QUserList } from '~gql'
// import { queryUser, QUserList, USER_FIELDS } from '../../gql';
import Query from '~comp/apollo/Query'
import Mutation from '~comp/apollo/Mutation'
import { IUser } from '~type'

interface IResultProps {
  data: { users: {}[] }
  renderEmpty: any
  client?: any
}

class UserScreen extends React.PureComponent {
  public showDetails = () => {
    //
    console.log('clicked')
  }
  public render() {
    // const queryUserTest = queryUser({
    //   args: '(id:"5b423900e12829a3ccb3bf9e")',
    //   operationName: 'QUserSchemaStitichTest',
    //   fields: USER_FIELDS,
    // })
    return (
      <div className="screen screen-user">
        <Query query={QUserList} displayName="QUserList">
          {({ data, renderEmpty }: IResultProps) => (
            <div className="content-wrapper">
              <h3>Query User List Demo</h3>
              {data.users && data.users.length ? (
                <ul>
                  {data.users.map((e: IUser) => (
                    <li key={e.id} onClick={this.showDetails}>
                      <Lazyload height={40}>
                        <img width={40} height={40} src={e.avatar} />
                      </Lazyload>
                      {e.username} {e.displayName}
                    </li>
                  ))}
                </ul>
              ) : (
                renderEmpty()
              )}
            </div>
          )}
        </Query>
        <Mutation displayName="MCreateUser" mutation={MCreateUser()} variables={}>
          {(createUser, { data }) => (
            <Button type="primary" onclick={this.createUser}>
              Create User
            </Button>
          )}
        </Mutation>
        {/* <Query query={queryUserTest} displayName="QUserSchemaStitichTest">
          {({ loading, error, data, refetch, variables }: QueryResult) => (
            <div id="gql--QUserSchemaStitichTest">
              <div className="query-users">
                <h3>Query User Item Demo</h3>
                {loading && this.renderLoading()}
                {error && this.renderError({ error, refetch, variables })}
                {data.user && (
                  <div className="gql--content QUserList--content">
                    <p>user ID: {data.user.id}</p>
                    <p>user displayName: {data.user.displayName}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </Query> */}
      </div>
    )
  }
}

export default UserScreen
