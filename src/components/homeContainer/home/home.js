// @flow
import React from 'react';
import { Link } from 'react-router';
import DataStructure from '../../../structures/shelves';
import SeriesVideoList from '../parts/seriesVideoList/seriesVideoList';

const Home = ({ shelves }: DataStructure) => (
  <div className="home">
    <button type="button">
      <Link to="/">
        Back
      </Link>
    </button>
    <div>{shelves ? <SeriesVideoList shelves={shelves} /> : null}</div>
    <p>Home page</p>
  </div>
);

export default Home;
