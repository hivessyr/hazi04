import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="TechWriting Házi 4"
      description="Dokumentációs oldal Docusaurusszal, CI/CD-vel">
      <main style={{ padding: '2rem' }}>
        <h1>Üdvözöllek!</h1>
        <p>Itt található a házi feladathoz tartozó dokumentáció:</p>
        <ul>
          <li><Link to="/docs/tutorials/intro">Tutorialok</Link></li>
          <li><Link to="/docs/guides/installation-guide">Guides</Link></li>
          <li><Link to="/docs/petstore/list-all-pets">Petstore API</Link></li>
        </ul>
      </main>
    </Layout>
  );
}