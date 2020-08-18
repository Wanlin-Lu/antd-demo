import React from 'react'
import { Button } from 'antd'

const ButtonPage = () => {
  return (
    <React.Fragment>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </React.Fragment>
  )
}

export default ButtonPage