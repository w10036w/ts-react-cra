import * as React from 'react';
import {
  Mutation as ApolloMutation,
  MutationFn,
  MutationProps,
  MutationResult
  } from 'react-apollo';
import Loading from '~comp/common/placeholder/Loading'

interface IMutationProps extends MutationProps {
  displayName: string
  loadingType?: string
  children: any
}
interface IRenderErrorProps {
  error: MutationResult['error']
  called: MutationResult['called']
}
interface IRenderDataProps {
  mutate: MutationFn
  data: MutationResult['data']
  client: MutationResult['client']
  children: any
}

class Mutation extends React.PureComponent<IMutationProps> {
  public renderLoading() {
    return (
      <div className={`gql--loading gql__${this.props.displayName}--loading`}>
        <Loading type={this.props.loadingType} />
      </div>
    )
  }
  // error handler
  public renderError({ error, called }: IRenderErrorProps) {
    return (
      <div className={`gql--error gql__${this.props.displayName}--error`}>
        <p>Error: {error || 'Server down or forbidden'}</p>
        <p>Called: {called}</p>
      </div>
    )
  }
  public renderData({ mutate, data, client, children }: IRenderDataProps) {
    const content = children({ mutate, data, client })
    return <div className={`gql--content gql__${this.props.displayName}--content`}>{content}</div>
  }
  public render() {
    const { displayName, loadingType, children, ...props } = this.props
    return (
      <ApolloMutation {...props}>
        {(mutate: MutationFn, { loading, error, data, called, client }: MutationResult) => (
          <div id={`gql__${displayName}`}>
            {loading && this.renderLoading()}
            {error && this.renderError({ error, called })}
            {data &&
              this.renderData({
                mutate,
                data,
                client,
                children,
              })}
          </div>
        )}
      </ApolloMutation>
    )
  }
}

export default Mutation
