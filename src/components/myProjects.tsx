import React from 'react';

type projectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

export default function Projects({ name, description, imageUrl }: projectProps) {
  return (
    <div
  className="project-card card mx-auto text-light mb-5 animate__animated animate__zoomIn"
  style={{
    width: '400px',
    height: '400px',
    borderRadius: '15px',
    backgroundColor: '#2a2a72', 
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={`${name} project`}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      />

      <div className="card-body text-center px-4" style={{ flexGrow: 1 }}>
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>

      <div className="text-center pb-3">
        <button
          className="btn btn-outline-dark"
          style={{
            width: '70%',
            backgroundColor: '#2a2a72',
            color: 'white',
            transition: 'all 0.3s ease',
          }}
          onClick={() => window.open('https://github.com/Honorine-Ishimwe', '_blank')}
        >
          View Project
        </button>
      </div>
    </div>
  );
}