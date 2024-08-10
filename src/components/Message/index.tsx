import Text from "components/Text";
import { IMessage } from "hooks/useMessages/types";
import formatDateTime from "utils/formatDateTime";
import { Container } from "./Message.styles";

const Message = ({ text, createdAt }: IMessage) => {
  return (
    <Container className="message-container">
      <Text>{text}</Text>
      <Text isSmallText>
        {createdAt ? formatDateTime(createdAt?.toDate()) : "Salvando..."}
      </Text>
    </Container>
  );
};

export default Message;
