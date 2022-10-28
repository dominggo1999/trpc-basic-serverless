import React from 'react';
import { trpc } from 'client/utils/trpc';

const User = () => {
  const hello = trpc.getUser.useQuery();

  if (!hello.data) return <div>Loading...</div>;

  const posts = hello.data.users;

  return (
    <div>
      <h1>User List</h1>
      {
        posts?.length > 1 && posts.map((user: { id: number, name: string }) => {
          return (
            <div key={`user-${user.id}`}>
              <p>{user.name}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default User;
