import { Product } from './product.entity';
import { ProductService } from './product.service';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
