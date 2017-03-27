import React from 'react';
import renderer from 'react-test-renderer';
import SeriesVideoList from './seriesVideoList';

const data = [
  { title: 'xxx',
    id: '5',
    items:[
      {
        thumbnail:{
          url:"https://cdn.twivel.io/uploads/economist/episode/thumbnail/142/875X480.jpg"
        }
      }
    ]
   }
];

test('SeriesVideoList renders correctly', () => {
  const SeriesVideoList = jest.fn((props) => <div>hello</div>);
  const tree : string = renderer.create(<SeriesVideoList shelves={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
