import { useState } from "react";
import logo from "./assets/logo.svg";
import useMessages from "./hooks/useMessages";
import formatDateTime from "utils/formatDateTime";

const App = () => {
  const { messages, addMessage } = useMessages();
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = () => {
    addMessage(messageInput);
    setMessageInput("");
  };

  return (
    <div>
      <img src={logo} />
      <h2>Digite um texto abaixo</h2>
      <input
        placeholder="Insira sua mensagem*"
        value={messageInput}
        onChange={(evt) => setMessageInput(evt.currentTarget.value)}
      />
      <button disabled={!messageInput} onClick={handleSubmit}>
        Enviar
      </button>
      <h2>Mensagens enviadas</h2>
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            width: "328px",
            height: "96px",
            borderRadius: "12px",
            marginBottom: 16,
          }}
        >
          <p>{message.text}</p>
          <p>
            <i>{formatDateTime(message.createdAt?.toDate())}</i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
