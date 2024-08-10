import Heading from "components/Heading";
import useMessages from "hooks/useMessages";
import { Container } from "./Messages.styles";
import Message from "components/Message";

const Messages = () => {
  const { messages } = useMessages();

  return (
    <Container>
      <Heading>Mensagens enviadas</Heading>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Container>
  );
};

export default Messages;
