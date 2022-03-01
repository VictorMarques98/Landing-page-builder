import React from 'react';
import GridTwoColumns from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
     praesentium modi maxime exercitationem corporis rem dignissimos
     ullam libero nisi cumque ex distinctio ducimus doloremque voluptatibus
     ad omnis deleniti totam atque.`,
    image: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
