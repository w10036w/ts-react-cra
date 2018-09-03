import * as React from 'react';

const UserDetails = ({ match }: { match: any }) => {
  return <div className="screen screen-user__details">{match.params.username}</div>
}

export default UserDetails
