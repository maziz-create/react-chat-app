import { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi';
import { useChat } from '../context/ChatContext';

// Bu componentin amacı app.js ' i biraz rahat bırakmaktır.

function Container() {
    const { messages, setMessages } = useChat();

    useEffect(() => {
        init(); //didMount anında backende bağlanalım.
        subscribeInitialMessages((messages) => setMessages(messages))
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message: message }])
        });
    }, []) //didMount anı

    return (
        <div className="App">
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container
