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
    <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
      <ul>
        <Menu onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
          로그인하기
        </Menu>
        <Menu>메뉴2</Menu>
        <Menu>메뉴3</Menu>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;

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
