import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  const baseUrl = '/hazi04/'; // Mivel GitHub Pages-en ide van telepítve
  return (
    <Layout
      title="TechWriting Házi 4"
      description="Dokumentációs oldal Docusaurusszal, CI/CD-vel">
      <main style={{ padding: '2rem' }}>
        <h1>Üdvözöllek!</h1>
        <p>Itt található a házi feladathoz tartozó dokumentáció:</p>
        <ul>
          <li><a href={`${baseUrl}docs/tutorials/intro`}>Tutorialok</a></li>
          <li><a href={`${baseUrl}docs/guides/installation-guide`}>Guides</a></li>
          <li><a href={`${baseUrl}docs/petstore/list-all-pets`}>Petstore API</a></li>
        </ul>
      </main>
    </Layout>
  );
}