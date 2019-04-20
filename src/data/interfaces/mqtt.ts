import { HandshakeTypeEnum } from './enum/handshake.enum';
import { NodeConfig, NodeDevice } from './node';
import { LogModel } from '../model/log.model';
import { PublisherEnum } from './enum/mqtt.enum';

interface MqttNodeConfigRequest extends NodeDevice {
  configReq: boolean;
}
interface MqttNodeConfigResponse extends MqttNodeConfigRequest, NodeConfig {}

interface MqttSignalingMessage {
  hash: string;
  handshake: HandshakeTypeEnum;
  publisher: PublisherEnum;
}

interface MqttMessage<T = any> extends MqttSignalingMessage {
  data: T;
}

interface MqttMessageWrapper<T = any> {
  data: T;
  topic: string;
}

interface MqttResponse extends MqttMessage {
  nodeId: string;
}
type MqttData = any;
interface MqttLogManager {
  doc: LogModel;
  err?: string;
}
export {
  MqttNodeConfigResponse,
  MqttNodeConfigRequest,
  MqttMessage,
  MqttMessageWrapper,
  MqttSignalingMessage,
  MqttResponse,
  MqttData,
  MqttLogManager
};
