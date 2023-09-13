# Do product card package

Este es un paquete de pruebas de despliegue en NPM.

## Ejemplo

```js
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'do-product-card-package';
```

```js
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
```
