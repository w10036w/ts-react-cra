import * as React from 'react';
import * as Loadable from 'react-loadable';
import Loading from '~comp/common/placeholder/Loading'

// todo: loader: () => import('/path/')
const asyncHoc = (loader: any, loading = Loading, delay = 300) => {
  const LoadableComponent = Loadable({
    loader,
    loading,
    delay,
  })
  return () => <LoadableComponent />
}
// function asyncHoc(loader: any, loading = Loading, delay = 300): () => Loadable.LoadableComponent {
//   const LoadableComponent = Loadable({
//     loader,
//     loading,
//     delay,
//   })
//   return () => <LoadableComponent />
// }

export default asyncHoc
