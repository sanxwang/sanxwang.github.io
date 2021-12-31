import React from 'react';
import type { FC } from 'react'
import Layout from '@theme/Layout';

const AboutMe: FC<any> = ({ }) => {

  return (
    <Layout
      title={`Hello from`}
      description="Description will go into a meta tag in <head />">
      <div className="container">
        <img src="/img/docusaurus.png" alt="" />
      </div>
    </Layout>
  )
}

export default AboutMe