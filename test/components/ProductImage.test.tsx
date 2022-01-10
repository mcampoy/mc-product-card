import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/product';

describe('ProdctImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {

    const wrapper = renderer.create(
      <ProductImage img="https://hola.jpg" />
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product2 }>
        {
          () => (
            <ProductImage img={product2.img} />
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  })
});
