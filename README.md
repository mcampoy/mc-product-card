# MC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Matías Campoy

## Ejemplo


```js
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
```

```js
  <ProductCard
    product={ product }
    initialValues={{
      count: 3,
      maxCount: 10
    }}
  >
    {
      ({
        reset,
        increaseBy,
        count,
        maxCount,
        isMaxCountReached
      }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )
    }
  </ProductCard>
```