import React from 'react';
import type { FC } from 'react'
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import Admonition from '@theme/Admonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const AboutMe: FC<any> = ({ }) => {

  return (
    <Layout
      title={`Hello from`}
      description="Description will go into a meta tag in <head />">
      <div
        className="container"
      >
        {/* <img src="/img/docusaurus.png" alt="" /> */}
        {/* <img style={{ width: '50%' }} src="img/aboutme/code.png" alt="" />
        <img style={{ width: '50%' }} src="img/aboutme/code1.png" alt="" /> */}

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