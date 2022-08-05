import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";
import { useAuth } from "../../helpers/hooks/useAuth";
import { Container, Content, HamburgerButton, Menu, Overlay, RightContainer, SettingsButton } from "./styles";

export const Header = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState();

  const handleOpenMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const handleCloseMenuClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <Container onClick={handleCloseMenuClick}>
      <Content>
        <HamburgerButton onClick={handleOpenMenuClick}>
          <div />
          <div />
          <div />
        </HamburgerButton>

        <RightContainer>
          <SettingsButton>{user?.email}</SettingsButton>
          <LogoutButton />
        </RightContainer>

        {/* IF MENU OPENS */}
        {isMenuOpen && (
          <Menu className={isMenuOpen ? 'show' : ''}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Criar novo cadastro</Link>
              </li>
            </ul>
          </Menu>
        )}
      </Content>

      {/* IF MENU OPENS */}
      {isMenuOpen && (
        <Overlay onClick={handleCloseMenuClick} />
      )}
    </Container>
  );
};