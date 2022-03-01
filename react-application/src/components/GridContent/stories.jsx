import React from 'react';
import GridContent from '.';
import mock from './__test__/mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
