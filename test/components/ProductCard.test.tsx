import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { productElement1 } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('debe mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={productElement1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={productElement1}>
        {({ count, increaseOrDecreaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseOrDecreaseBy(2)}>+2</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('2');
  });
});
