import React, { useState, useEffect, useCallback } from 'react';
import './ProfileAvatar.css';

const defaultImage = 'https://assets.cruddur.cfelteau.ca/avatars/undefined.jpg';

export default function ProfileAvatar(props) {
  const [imageSource, setImageSource] = useState(`https://assets.cruddur.cfelteau.ca/avatars/${props.id}.jpg`);

  const handleImageError = useCallback(() => {
    setImageSource(defaultImage);
  }, []);

  useEffect(() => {
    setImageSource(`https://assets.cruddur.cfelteau.ca/avatars/${props.id}.jpg`);
  }, [props.id]);

  return (
    <div className="profile-avatar">
      <img src={imageSource} alt="Profile Avatar" onError={handleImageError} />
    </div>
  );
}
