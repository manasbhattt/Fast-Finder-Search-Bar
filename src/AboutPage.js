import React from 'react';
import './AboutPage.css'; // Optional CSS for AboutPage styling

function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>About This App</h1>
      <p>This app allows you to search for countries and capitals. Enter the name of a country or capital to get detailed information about it.</p>
      <p><strong>How to Use:</strong></p>
      <ul>
        <li>Type the name of a country or capital in the search bar.</li>
        <li>As you type, suggestions will appear. Select a suggestion to view more details.</li>
        <li><strong>Click on any country name in the search results</strong> to be redirected to the corresponding Wikipedia page for that country.</li>
      </ul>
    </div>
  );
}

export default AboutPage;
