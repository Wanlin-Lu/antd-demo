import React from 'react'
import { Layout } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import ButtonPage from '../../example-pages/button'


const Content = () => {
  return (
    <Layout.Content>
      
      <ButtonPage />
      <div>
        <Layout.Header />
      </div>
    </Layout.Content>
  )
}

export default Content