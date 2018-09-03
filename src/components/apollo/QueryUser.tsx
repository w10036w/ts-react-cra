import { Button } from 'antd';
import * as React from 'react';
import { graphql } from 'react-apollo';
import Lazyload from 'react-lazyload';
import { queryUsers } from '~gql'
import { IUser } from '~type'
import { minGif } from '~const'

class QueryUser extends React.PureComponent<any> {
  public render() {
    const {
      data: { users, loading, error, refetch },
    } = this.props
    return (
      <div className="apollo-query-user">
        <div className="query-users">
          <h3>Query Users</h3>
          <ul>
            {loading && 'Loading'}
            {error && (
              <div>
                {error.networkError.statusCode ? (
                  <p>Error Code: {error.networkError.statusCode}</p>
                ) : (
                  <p>Server down or forbidden</p>
                )}

                <Button type="primary" onClick={() => refetch()}>
                  Refetch
                </Button>
              </div>
            )}
            {users &&
              users.map((e: IUser) => (
                <li key={e.id}>
                  <Lazyload height={40} placeholder={<img src={minGif} width={40} height={40} />}>
                    <img width={40} height={40} src={e.avatar} />
                  </Lazyload>
                  {e.username} {e.displayName}
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

const node = queryUsers({
  fields: 'id,username,displayName,role,avatar',
})
export default graphql(node)(QueryUser)
