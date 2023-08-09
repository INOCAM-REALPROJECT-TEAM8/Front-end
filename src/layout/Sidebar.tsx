import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContainer className={isOpen ? 'open' : ''}>
      <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
        <ul>
          <Menu onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
            로그인하기
          </Menu>
          <Menu>메뉴2</Menu>
          <Menu>메뉴3</Menu>
        </ul>
      </SideBarWrap>
    </SideBarContainer>
  );
}

export default Sidebar;

const SideBarContainer = styled.div`
  position: fixed;
  padding: 0px auto;
  max-width: 800px;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  z-index: -1;

  &.open {
    z-index: 10;
  }
`;

const SideBarWrap = styled.div`
  z-index: 10;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: rgba(42, 18, 111, 0.8);
  height: 100%;
  width: 55%;
  right: -55%;
  top: 0;
  position: absolute;
  transition: 0.5s ease;

  &.open {
    position: absolute;
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  position: relative;
  margin: 30px 8px;
  color: white;
`;
