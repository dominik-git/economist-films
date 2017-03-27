import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';

const data = [
  { title: 'xxx',
    id: '5',
    items:[
      {
        thumbnail:{
          url:'https://cdn.twivel.io/uploads/economist/episode/thumbnail/142/875X480.jpg'
        }
      }
    ],
   }
];

test('Home renders without data', () => {
  const tree : string = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Home renders with data', () => {
  const Home = jest.fn((props) => <div>hello</div>);
  const tree : string = renderer.create(<Home shelves={data}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
