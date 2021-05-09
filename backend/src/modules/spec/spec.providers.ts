import { Spec } from './spec.entity';

export const specProviders = [
  {
    provide: 'SPEC_REPOSITORY',
    useValue: Spec,
  },
];
