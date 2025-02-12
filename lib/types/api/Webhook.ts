import { Common } from '@mailjet/types/api/Common';

export namespace Webhook {
  export enum EventType {
    Open = 'open',
    Click = 'click',
    Bounce = 'bounce',
    Spam = 'spam',
    Blocked = 'blocked',
    UnSub = 'unsub',
    Sent = 'sent',
  }

  export enum EventTypeValue {
    Click = 1,
    Bounce = 2,
    Spam = 3,
    Blocked = 4,
    Unsubscribe = 5,
    Open = 6,
    Sent = 7,
  }

  export enum Status {
    Dead = 'dead',
    Alive = 'alive'
  }

  export type Version = 1 | 2;

  export interface EventCallbackUrl {
    ID: number;
    EventType: EventType;
    IsBackup: boolean;
    Status: Status;
    APIKeyID: number;
    Version: Version;
    Url: string;
  }

  // REQUEST PART
  export type PostEventCallbackUrlBody = {
    Url: string;
    EventType?: EventType;
    IsBackup?: boolean;
    Status?: Status;
  }

  export type PutEventCallbackUrlBody = Partial<PostEventCallbackUrlBody>

  export type GetEventCallbackUrlQueryParams = Partial<Common.Pagination> & {
    Backup?: boolean;
    EventType?: EventTypeValue;
    Status?: string;
    Version?: Version;
  }

  // RESPONSE PART
  type EventCallbackUrlResponse = {
    Count: number;
    Total: number;
    Data: EventCallbackUrl[];
  };

  export type PostEventCallbackUrlResponse = EventCallbackUrlResponse
  export type PutEventCallbackUrlResponse = EventCallbackUrlResponse
  export type GetEventCallbackUrlResponse = EventCallbackUrlResponse
}
