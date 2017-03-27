// @flow
import React from 'react';
import Slider from 'react-slick';
import DataStructure from '../../../../structures/shelves';
import './seriesVideoList.css';

const settings = {
  className: 'center',
  infinite: true,
  centerMode: true,
  speed: 300,
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
    },
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 2,
      dots: true,
    },
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    },
  }],
};

const VideoItems = shelves => shelves.map((shelf) => {
  const imageUrl = shelf.items[0].thumbnail.url;
  return (
    <div>
      <div
        key={shelf.id}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3>{shelf.title}</h3>
      </div>
      <div>
        <p >Watch</p>
      </div>
    </div>
  );
});

const SeriesVideoList = ({ shelves }: DataStructure) => (
  <div className="containerX">
    {shelves ? <Slider {...settings}>{VideoItems(shelves)}</Slider> : null}
  </div>

);

export default SeriesVideoList;
