import React from 'react';
import MeuComponent from '.';

export default {
  title: 'MeuComponent',
  component: MeuComponent,
  args: {
    children: 'MeuComponent',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <MeuComponent {...args} />
    </div>
  );
};
