import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { productElement1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el título personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" classNameProps="Custom Class" />
    );

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con el nombre del producto 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={productElement1}>
        {() => <ProductTitle />}
      </ProductCard>
    );

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
