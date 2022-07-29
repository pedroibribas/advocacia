import { useAuth } from "../../helpers/hooks/useAuth";
import { LogoutButton } from "./LogoutButton";
import { Container, Content, SettingsButton } from "./styles";

export const Header = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <SettingsButton>
          {user?.email}
        </SettingsButton>
        <LogoutButton />
      </Content>
    </Container>
  );
};