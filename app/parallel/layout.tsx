import React from 'react';

const layout = ({children, analytics, team}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) => {
  return (
    <div>
      {children}
      {team}
    </div>
  );
};

export default layout;