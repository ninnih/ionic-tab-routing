import React, { FC } from 'react'

interface ComponentProps {
  prop: string
}

const TestComponent: FC<ComponentProps> = ({ prop }) => {
  return (
    <div>TestComponent { prop }</div>
  )
}
export default TestComponent