import { model, property, Model } from '@loopback/repository';

@model({ settings: {} })
export class Container extends Model {

  constructor(data?: Partial<Container>) {
    super(data);
  }
}
