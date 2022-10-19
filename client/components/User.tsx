import React from 'react';
import { trpc } from 'client/utils/trpc';
import tw, { styled } from 'twin.macro';

export const Title = styled.h1`
  ${tw`
    text-3xl
    font-semibold
  `}
`;

const User = () => {
  const hello = trpc.getUser.useQuery();

  if (!hello.data) return <div>Loading...</div>;

  const posts = hello.data.users as [];

  return (
    <div>
      <Title>User List</Title>
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
