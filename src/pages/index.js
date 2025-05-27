import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="TechWriting Házi 4"
      description="Dokumentációs oldal Docusaurusszal, CI/CD-vel">
      <main style={{ padding: '2rem' }}>
        <h1>Üdvözöllek!</h1>
        <p>Itt található a házi feladathoz tartozó dokumentáció:</p>
        <ul>
          <li><a href={useBaseUrl('/docs/tutorials/intro')}>Tutorialok</a></li>
          <li><a href={useBaseUrl('/docs/guides/installation-guide')}>Guides</a></li>
          <li><a href={useBaseUrl('/docs/petstore/list-all-pets')}>Petstore API</a></li>
        </ul>
      </main>
    </Layout>
  );
}