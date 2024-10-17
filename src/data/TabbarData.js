import CallListScreen from '../screen/CallListScreen';
import ChatListScreen from '../screen/ChatListScreen';
import StatusListScreen from '../screen/StatusListScreen';

export const TabBarData = [
  {
    id: 1,
    route: ChatListScreen,
    name: 'Chats',
  },
  {
    id: 2,
    route: StatusListScreen,
    name: 'Status',
  },
  {
    id: 3,
    route: CallListScreen,
    name: 'Calls',
  },
];
