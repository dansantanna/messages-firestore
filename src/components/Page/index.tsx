import Messages from "components/Messages";
import Form from "components/Form";
import Logo from "components/Logo";
import { Container } from "./Page.styles";

const Page = () => {
  return (
    <Container>
      <Logo />
      <Form />
      <Messages />
    </Container>
  );
};

export default Page;
