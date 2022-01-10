import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/product';


describe('ProdctTitle', () => {
  test('debe mostrar el componente correctamente con el título personalizado', () => {
    
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className='custom-class'  />
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  test('debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  })
});
