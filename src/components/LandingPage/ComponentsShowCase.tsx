import React from 'react';
import { Input } from '../../registry/components/input/Input';

function ComponentsShowCase() {
  return (
    <div className="h-screen w-full">
      <Input
        theme={'dark'}
        placeholder="Enter your name..."
      />
    </div>
  );
}

export default ComponentsShowCase;
