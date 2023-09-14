import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const productElement = {
  id: '1',
  title: 'Coffee Mug - Card!',
  // img: '/coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={productElement}
        initialValues={{
          quantity: 4,
          maxQuantity: 10,
        }}
      >
        {/* pasar una función como un children y esta función retorna un JSX Element */}
        {({ reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />

            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
