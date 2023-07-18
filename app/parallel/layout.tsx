import React from 'react';

const layout = ({children, analytics, team}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) => {
  return (
    <div>
      {children}
      {analytics}
      {team}
    </div>
  );
};

export default layout;