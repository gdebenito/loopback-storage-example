import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { FiledsDataSource } from '../datasources/fileds.datasource';
import { FileService } from '../services/file.service';

export class FileProvider implements Provider<FileService> {
	constructor(
		@inject('datasources.fileds')
		protected dataSource: juggler.DataSource = new FiledsDataSource(),
	) { }

	value(): Promise<FileService> {
		return getService(this.dataSource);
	}
}
