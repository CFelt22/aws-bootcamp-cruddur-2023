import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
  const defaultImage = 'https://assets.cruddur.com/avatars/undefined.jpg';
  const backgroundImage = `url("https://assets.cruddur.cfelteau.ca/avatars/${props.id}.jpg"), url(${defaultImage})`;
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="profile-avatar"
      style={styles}
    ></div>
  );
}