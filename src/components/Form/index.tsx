import Button from "components/Button";
import Heading from "components/Heading";
import useMessages from "hooks/useMessages";
import { useState } from "react";
import { Container } from "./Form.style";
import Input from "components/Input";

const Form = () => {
  const [messageInput, setMessageInput] = useState("");
  const { addMessage } = useMessages();

  const handleSubmit = () => {
    addMessage(messageInput);
    setMessageInput("");
  };

  return (
    <Container onSubmit={(evt) => evt.preventDefault()}>
      <Heading>Digite um texto abaixo</Heading>
      <Input
        id="message"
        placeholder="Insira sua mensagem*"
        value={messageInput}
        onChange={(evt) => setMessageInput(evt.currentTarget.value)}
      />
      <Button disabled={!messageInput} onClick={handleSubmit}>
        Enviar
      </Button>
    </Container>
  );
};

export default Form;
