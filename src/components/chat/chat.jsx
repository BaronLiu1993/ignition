import React from 'react'
import { useState } from 'react';
import './chat.css'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";
const systemMessage = {
    role: "system",
    content: "Explain all concepts like I am a grade 12 IB physics SL student."
}

function Chat() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
        message: "Hello I Am ChatGPT",
        sender: "ChatGPT",
        direction: "outgoing"
    }
  ])
  const handleSend = async (message) => {
    const newMessage = {
        message: message,
        sender: "user"
    }

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if(messageObject.sender == "ChatGPT") {
            role = "assistant"
        } else {
            role = "user"
        }
        return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
            systemMessage,
            ...apiMessages
        ]
    }
    await fetch("https://api.openai.com/v1/chats/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    }).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
    })
  }


  return (
    <div>
        <div style = {{ position: "relative", height: "800px", width: "700px"}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList typingIndicator = {typing ? <TypingIndicator content = 'Ethan is Thinking...'/>: null}>
                        {messages.map((message, i) => {
                            return <Message key={i} model = {message} />
                        })}
                    </MessageList>
                    <MessageInput placeholder = 'Ask Me Anything' onSend = {handleSend}></MessageInput>
                </ChatContainer>
            </MainContainer>
        </div>
    </div>
  )
}

export default Chat