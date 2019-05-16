import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './fileds.datasource.json';

export class FiledsDataSource extends juggler.DataSource {
  static dataSourceName = 'fileds';

  constructor(
    @inject('datasources.config.fileds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
