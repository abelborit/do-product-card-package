import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { productElement2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://img.jpg" title="Custom Tittle" />
    );

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto 2', () => {
    const wrapper = renderer.create(
      <ProductCard product={productElement2}>
        {() => (
          <ProductImage
            img={productElement2.img}
            title={productElement2.title}
          />
        )}
      </ProductCard>
    );

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
