import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Graphics from '../../Assets/Graphics.png'
import Developers from '../../Assets/Developers.png'
import Social from '../../Assets/Social.png'
import Media from '../../Assets/Media.png'
import Lawyers from '../../Assets/Lawyers.png'
import Property from '../../Assets/Property.png'
import styled from 'styled-components';

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <StyledSlider {...settings}>
        <SlideMargin>
            <Card>
                <h2>GRAPHIC DESIGNERS</h2>
                <p style={{ color: '#6b6a68' }}>Our designers are experts in creating visual identities that are not only beautiful but also meaningful and aligned with your brand's values.</p>
                <img src={Graphics} alt='founder' />
            </Card>
        </SlideMargin>
        <SlideMargin>
            <Card>
                <h2>WEB DEVELOPERS</h2>
                <p style={{ color: '#6b6a68' }}>The architect of innovation. Shyni brings a blend of creativity and strategic thinking that turns potential into success. Under her guidance, ideas transform into tangible results that exceed expectations.</p>
                <img src={Developers} alt='founder' />
            </Card>
        </SlideMargin>
        <SlideMargin>
            <Card>
                <h2>SEO EXPERTS</h2>
                <p style={{ color: '#6b6a68' }}>They don't just boost your website's visibility; they make sure you're the star of search engine parties. Climbing the ranks, one keyword at a time.</p>
                <img src={Social} alt='founder' />
            </Card>
        </SlideMargin>
        <SlideMargin>
            <Card>
                <h2>SOCIAL MEDIA MANAGERS</h2>
                <p style={{ color: '#6b6a68' }}>They navigate the wilds of social platforms, strategically planting your flag where the digital crowds gather. Watch them turn likes into loyalty.</p>
                <img src={Media} alt='founder' />
            </Card>
        </SlideMargin>
        <SlideMargin>
            <Card>
                <h2>CORPORATE LAWYERS</h2>
                <p style={{ color: '#6b6a68' }}>Our legal experts handle all compliance and regulatory matters, ensuring your business operates smoothly and legally.</p>
                <img src={Lawyers} alt='founder' />
            </Card>
        </SlideMargin>
        <SlideMargin>
            <Card>
                <h2>INTELLECTUAL PROPERTY SPECIALISTS</h2>
                <p style={{ color: '#6b6a68' }}>They protect your creative assets, managing copyrights and trademarks to secure your brand's unique elements like modern-day knights.</p>
                <img src={Property} alt='founder' />
            </Card>
        </SlideMargin>
      </StyledSlider>
    </div>
  );
}

export default Responsive;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1c1c1a;
  min-height: 500px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  justify-content: space-between;
  align-items: center;
  padding: 15px;
 
  @media (min-width: 768px) {
    min-height: 400px;
    width: 80%;
  }
`;

const SlideMargin= styled.div`
padding: 20px;
`

const StyledSlider= styled(Slider)`
margin:20px
`