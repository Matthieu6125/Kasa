import './banner.scss'



const Banner = ({ title, imageSrc }) => {
    return (
      <div className="banner-container">
        <img className="banner-image" src={imageSrc} alt={title} />
        <h1 className="banner-title">{title}</h1>
      </div>
    );
  };

  Banner.defaultProps = {
    title: '',
  };

  export default Banner 