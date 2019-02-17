import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigsModel, MqttNodeConfigRequest, MqttNodeConfig } from '../data';
import { NodeDeviceTypeEnum } from 'src/data/interfaces';
import { from, Observable } from 'rxjs';
import * as _ from 'lodash';
import { take } from 'rxjs/operators';
import { transformFromSchemaToModel } from 'src/shared/pipeables';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectModel('ConfigsModel')
    private readonly configsModel: Model<ConfigsModel>
  ) {}

  /**
   * Stores config, requested directly from network
   * @param config config object
   */
  storeConfig(config: MqttNodeConfigRequest) {}

  /**
   * Creates new configinterval
   * @param config config object
   */
  createConfig(config: MqttNodeConfig) {}

  /**
   * Updates config
   * @param config updated config
   */
  patchConfig(config: MqttNodeConfig) {}

  /**
   * TODO: here should probably type
   * Deletes config by node id
   * @param nodeId node id
   */
  deleteConfig(nodeType: NodeDeviceTypeEnum) {}

  /**
   * Gets all configs for requested node type
   * @param type node type
   */
  getAllConfigs(nodeType: NodeDeviceTypeEnum): Observable<any[] | any> {
    return from(
      this.configsModel
        .find({ node_type: nodeType })
        .lean()
        .exec()
    ).pipe(
      transformFromSchemaToModel(),
      take(1)
    );
  }

  getNodeConfig(nodeId: number): MqttNodeConfig {
    return;
  }

  /**
   * Returns config requested by network
   * @param config requeted config
   */
  getConfigForNetwork(config: MqttNodeConfigRequest): MqttNodeConfig {
    return;
  }
}
