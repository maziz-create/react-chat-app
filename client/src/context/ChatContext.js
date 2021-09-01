import { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const values = {
        messages,
        setMessages
    };
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
}

//alttaki bizim kendi hookumuz. kolaylıkla context'e bağlanılması için.
export const useChat = () => useContext(ChatContext);