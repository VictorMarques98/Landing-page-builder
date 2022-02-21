import React from 'react';
import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Incidunt esse ullam aliquam maiores fuga a possimus nihil corrupti,
    enim nemo facere inventore eveniet eum dolore similique commodi
    repudiandae magnam harum.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
