import { Button } from 'antd';
import * as React from 'react';
import { Query as ApolloQuery, QueryProps, QueryResult } from 'react-apollo';
import Loading from '~comp/common/placeholder/Loading'

interface IQueryProps extends QueryProps {
  // * proxied QueryProps: https://www.apollographql.com/docs/react/essentials/queries.html
  allowRefetch?: boolean
  loadingType?: string
  children: any
}
interface IRenderErrorProps {
  error: QueryResult['error']
  refetch: QueryResult['refetch']
  variables: QueryResult['variables']
}
interface IRenderRefetchProps {
  refetch: QueryResult['refetch']
  variables?: QueryResult['variables']
}
interface IRenderEmptyProps {
  allowRefetch?: boolean
  refetch?: QueryResult['refetch']
  variables?: QueryResult['variables']
  render?: any // todo type
}
interface IRenderDataProps {
  allowRefetch?: boolean
  data: QueryResult['data']
  refetch: QueryResult['refetch']
  variables: QueryResult['variables']
  client: QueryResult['client']
  renderEmpty: any
  children: any // todo type
}

class Query extends React.PureComponent<IQueryProps> {
  public renderLoading() {
    return (
      <div className={`gql--loading gql__${this.props.displayName}--loading`}>
        <Loading type={this.props.loadingType} />
      </div>
    )
  }
  public renderError({ error, refetch, variables }: IRenderErrorProps) {
    const message = error && error.networkError
    return (
      <div className={`gql--error gql__${this.props.displayName}--error`}>
        <p>Error: {message || 'Server down or forbidden'}</p>
        {this.renderRefetch({ refetch, variables })}
      </div>
    )
  }
  // refetch Component
  public renderRefetch({ refetch, variables }: IRenderRefetchProps) {
    return (
      <div className={`gql--refetch gql__${this.props.displayName}--refetch`}>
        <Button type="primary" onClick={() => refetch(variables)}>
          Refetch
        </Button>
      </div>
    )
  }
  public renderEmpty(
    { allowRefetch = false, refetch, variables, render }: IRenderEmptyProps = {
      allowRefetch: false,
    }
  ) {
    return (
      <div className={`gql--empty gql__${this.props.displayName}--empty`}>
        {render ? render : <p>No result found</p>}
        {allowRefetch && refetch && this.renderRefetch({ refetch, variables })}
      </div>
    )
  }
  public renderData({
    allowRefetch,
    data,
    refetch,
    variables,
    renderEmpty,
    client,
    children,
  }: IRenderDataProps) {
    const content = allowRefetch
      ? children({ data, refetch, variables, renderEmpty, client })
      : children({ data, renderEmpty, client })
    return <div className={`gql--content gql__${this.props.displayName}--content`}>{content}</div>
  }

  public render() {
    const { displayName, allowRefetch = false, loadingType, children, ...props } = this.props
    return (
      <ApolloQuery displayName={displayName} {...props}>
        {({ loading, error, data, refetch, variables, client }: QueryResult) => (
          <div id={`gql__${displayName}`}>
            {loading && this.renderLoading()}
            {error && this.renderError({ error, refetch, variables })}
            {data &&
              this.renderData({
                data,
                allowRefetch,
                refetch,
                variables,
                client,
                renderEmpty: this.renderEmpty,
                children,
              })}
          </div>
        )}
      </ApolloQuery>
    )
  }
}
export default Query
