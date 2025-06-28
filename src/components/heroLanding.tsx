import React from 'react';

type HeroSectionProps = {
  imageUrl: string;
  altText?: string;
  description: string;
};

export default function HeroSection({
  imageUrl,
  altText = "Hero image",
  description,
}: HeroSectionProps) {
  return (

    <div className="container my-5">
      <div className="row">
        {/* Image on the left */}
        <div className="col-md-6">
          <img
            src={imageUrl}
            alt={altText}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Description on the right */}
        <div className="col-md-6 d-flex align-items-center">
          <p className="lead">{description}</p>
        </div>
      </div>
    </div>
  );
}