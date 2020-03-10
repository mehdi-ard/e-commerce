import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

it('renders default', () => {
  expect(renderer.create(<Button>Hello Button</Button>).toJSON()).toMatchSnapshot();
});

it('renders primary', () => {
  expect(renderer.create(<Button color="primary">primary</Button>).toJSON()).toMatchSnapshot();
});

it('renders primary with variant', () => {
  expect(
    renderer
      .create(
        <Button color="primary" variant="contained">
          primary with variant
        </Button>
      )
      .toJSON()
  ).toMatchSnapshot();
});
