import { useCallback, useEffect } from 'react';
import * as StompJs from '@stomp/stompjs';
import { useDispatch, useSelector } from 'react-redux';
import { connectSocket, disconnectSocket } from '../redux/modules/socket';
import { SelectState } from '../redux/config/configStore';

interface ObjectType {
  [key: string]: any;
}

let stompClient: StompJs.Client;
let subscriptions: {
  [key: string]: StompJs.StompSubscription;
} = {};

const useStomp = (config: StompJs.StompConfig, callback?: () => void) => {
  const { isConnected } = useSelector((state: SelectState) => state.socket);
  const dispatch = useDispatch();
  const connect = useCallback(() => {
    if (!stompClient) {
      stompClient = new StompJs.Client(config);
      stompClient.activate();
    }
    stompClient.onConnect = function (frame) {
      dispatch(connectSocket());
      callback && callback();
    };
  }, []);
  const send = useCallback(
    (path: string, body: ObjectType, headers: ObjectType) => {
      stompClient.publish({
        destination: path,
        headers: headers,
        body: JSON.stringify(body),
      });
    },
    [stompClient],
  );
  const subscribe = useCallback(<T>(path: string, callback: (msg: T) => void) => {
    if (!stompClient) return;
    if (subscriptions[path]) return;
    const subscription = stompClient.subscribe(path, function (message) {
      console.log(message);
      const body = JSON.parse(message.body);
      callback(body);
    });
    subscriptions[path] = subscription;
  }, []);
  const unsubscribe = useCallback((path: string) => {
    subscriptions[path].unsubscribe();
    delete subscriptions[path];
  }, []);
  var disconnect = useCallback(() => {
    stompClient.deactivate();
    dispatch(disconnectSocket());
  }, [stompClient]);

  useEffect(() => {
    connect();
  }, []);

  return {
    disconnect,
    subscribe,
    unsubscribe,
    subscriptions,
    send,
    isConnected,
  };
};

export default useStomp;
