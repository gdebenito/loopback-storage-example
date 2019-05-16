import { FileService } from "../services/file.service";

// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { post, requestBody, get, ResponseObject, param } from "@loopback/rest";


const POST_RESPONSE: ResponseObject = {
  description: 'Post Container',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  }
}

export class ContainerController {
  constructor(
    @inject('file.provider') private fileService: FileService
  ) { }

  @get('/container')
  async getAllContainers() {
    return this.fileService.getContainers();
  }


  @get('/container/{containerid}')
  async getFiles(
    @param.path.string('containerid') containerName: string
  ) {
    return this.fileService.getFiles(containerName)
  }

  @get('/container/{containerid}/files/{fileid}')
  async getFile(
    @param.path.string('containerid') containerName: string,
    @param.path.string('fileid') fileName: string
  ) {
    return await this.fileService.downloadStream(containerName, fileName)
  }


  @post('/container')
  async postContainer(
    @requestBody(POST_RESPONSE) body: { name: string }
  ) {
    return new Promise(
      (resolve, reject) => {
        this.fileService.createContainer({ name: body.name }, (err: any) => {
          if (err) reject('Container Failed Creating');
          resolve('Container Created Successfully')
        });
      }
    )
  }
}
