import { StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ChatListItem from "../../components/ChatListItem";

import chats from '../../assets/data/chats.json';

export default function Chatscreens() {
    const chat = {
        id: "1",
        user: {
            image:
                "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
            name: "Lukas",
        },
        lastMessage: {
            text: "Oke",
            createdAt: "07:30",
        },
    };

  return (
      <FlatList
          style={styles.container}
          data={chats}
          renderItem={({ item }) => <ChatListItem chat={item} />}
      />
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

        paddingVertical: 50,
    }
});
