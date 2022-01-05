import React from 'react';
import type { FC } from 'react'
import Layout from '@theme/Layout';
import Admonition from '@theme/Admonition';
const AboutMe: FC<any> = ({ }) => {

  return (
    <Layout
      title={`Hello from`}
      description="Description will go into a meta tag in <head />">
      <div
        className="container"
      >
        
        <Admonition type="info">
          <p>Some information</p>
        </Admonition>

        <Admonition type="tip" icon="💡" title="Did you know...">
          <p>
            Use plugins to introduce shorter syntax for the most commonly used JSX
            elements in your project.
          </p>
        </Admonition>

      </div>
    </Layout>
  )
}

export default AboutMe