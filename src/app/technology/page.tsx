// src/app/technology/page.tsx

import { Metadata } from 'next';
import './technology.css';

export const metadata: Metadata = {
  title: 'Dental Technology | Dr. P. Skosana',
  description: 'Discover the advanced dental technologies and treatments offered by Dr. P. Skosana for optimal oral health.',
};

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <header className="technology-header">
        <h1>Advanced Dental Technology</h1>
        <p>
          At Dr. P. Skosana's practice, we utilize the latest dental technologies to provide our patients with the highest quality care.
        </p>
      </header>
      <section className="technology-features">
        <div className="feature">
          <h2>Digital X-Rays</h2>
          <p>
            Our digital X-ray system reduces radiation exposure and provides immediate, clear images for accurate diagnoses.
          </p>
        </div>
        <div className="feature">
          <h2>Intraoral Cameras</h2>
          <p>
            Intraoral cameras allow us to capture detailed images inside your mouth, enhancing patient education and treatment planning.
          </p>
        </div>
        <div className="feature">
          <h2>Laser Dentistry</h2>
          <p>
            Laser technology enables precise and minimally invasive treatments, promoting faster healing and reduced discomfort.
          </p>
        </div>
        <div className="feature">
          <h2>CAD/CAM Systems</h2>
          <p>
            Computer-Aided Design and Computer-Aided Manufacturing (CAD/CAM) systems allow for same-day restorations, improving convenience and efficiency.
          </p>
        </div>
      </section>
      <section className="technology-benefits">
        <h2>Benefits of Our Technology</h2>
        <ul>
          <li>Enhanced diagnostic accuracy</li>
          <li>Minimally invasive procedures</li>
          <li>Reduced treatment times</li>
          <li>Improved patient comfort</li>
          <li>Comprehensive patient education</li>
        </ul>
      </section>
    </div>
  );
}
