import './banner.scss'



const Banner = ({ title, imageSrc }) => {
    return (
      <div className="banner-container">
        <img className="banner-image" src={imageSrc} alt={title} />
        <div className="banner-title">{title}</div>
      </div>
    );
  };

  Banner.defaultProps = {
    title: '',
  };

  export default Banner 