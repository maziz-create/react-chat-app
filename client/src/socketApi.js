import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log("Sunucuya bağlanılıyor...");
    //backend nerede ise oranın portu verilir.
    socket = io('http://localhost:3000', {
        transports: ["websocket"],
    })

    socket.on("connect", () => {
        console.log("sunucuya bağlantı başarılı!");
    })
}

export const sendMessage = (message) => {
    //veri bekleyen new-messageye gönderdik.
    //bunun socket tanımı varsa ? =>
    if (socket) socket.emit("new-message", message);
}

//mesajları dinleyecek olan kanalı yapacağız.
//cb => callbackFn
export const subscribeChat = (cb) => {
    if (!socket) return;

    socket.on("receive-message", (message) => {
        console.log("Yeni mesaj var!!", message);
        cb(message);
    })
}

export const subscribeInitialMessages = (cb) => {
    if (!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Initial messages => ", messages);
        cb(messages);
    })
}