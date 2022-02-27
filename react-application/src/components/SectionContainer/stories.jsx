import React from 'react';
import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, alias accusantium ex placeat dolores
          molestias fugit fuga pariatur necessitatibus dolorum obcaecati maxime totam et blanditiis iste. Reiciendis eum
          quisquam ullam!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
