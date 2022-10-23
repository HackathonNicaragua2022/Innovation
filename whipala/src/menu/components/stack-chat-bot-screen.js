import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatBot from './../../chat-bot/components/chat-bot-component';

const ChatBotStack = createStackNavigator();

function ChatBotStackScreen() {
    return (
     <ChatBotStack.Navigator>
          <ChatBotStack.Screen
            name = "ChatBot" 
            component={ ChatBot }
            options = {{
              headerShown: false
            }}
        />
      </ChatBotStack.Navigator>
    );
}

export default ChatBotStackScreen;