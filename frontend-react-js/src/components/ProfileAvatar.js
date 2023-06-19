import './ProfileAvatar.css';
import React from 'react';

export default function ProfileAvatar(props) {
  const [imageSrc, setImageSrc] = `https://assets.cruddur.cfelteau.ca/avatars/${props.id}.jpg`;
  const fallbackSrc = `https://assets.cruddur.cfelteau.ca/avatars/undefined.jpg`;
  const backgroundImage = `url("https://assets.cruddur.cfelteau.ca/avatars/${props.id}.jpg")`
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  React.useEffect(()=>{
    const checkImage = async () => {
      try {
        const response = await fetch(imageSrc);
        if (response.status === 403) {
          setImageSrc(fallbackSrc);
        }
      } catch (error) {
        console.error('Error checking image:', error);
        setImageSrc(fallbackSrc);
      }
    };

    checkImage();
  }, [imageSrc]);

  return (
    <div className="profile-avatar" style={styles}></div>
  );
}