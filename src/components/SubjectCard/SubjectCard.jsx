import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCard.css';

function SubjectCard({ id, name, description, professor, progress = 0, materialsCount = 12 }) {
  return (
    <div className="subject-card">
      <div className="materials-count">
        <span>{materialsCount} Materiais</span>
      </div>
      <h2>{name}</h2>
      <div className="card-meta">
        <span>Professor: {professor}</span>
      </div>
      <p className="description">{description}</p>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <Link to={`/subject/${id}`} className="view-button">
        Continuar
      </Link>
    </div>
  );
}

export default SubjectCard;