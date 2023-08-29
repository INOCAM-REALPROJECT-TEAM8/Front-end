import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

interface ModalConfig {
  coverExist: boolean;
  exitByOuterClick: boolean;
}

function useModal<OpenerElementType>({ coverExist, exitByOuterClick }: ModalConfig) {
  const openerRef = useRef<OpenerElementType>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ModalTemplate = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
      const outerOnClick = (event: MouseEvent) => {
        if (!event.target) return;

        if (
          !modalRef.current?.contains(event.target as Node) &&
          !(openerRef as unknown as React.RefObject<HTMLElement>).current?.contains(event.target as Node)
        )
          closeModal();
        return;
      };

      if (exitByOuterClick) {
        document.addEventListener('click', outerOnClick);
      }

      return () => {
        if (exitByOuterClick) document.removeEventListener('click', outerOnClick);
      };
    }, []);

    return coverExist ? (
      <ViewportCover>
        <div ref={modalRef}>{children}</div>
      </ViewportCover>
    ) : (
      <div style={{ width: '0px', height: '0px' }} ref={modalRef}>
        {children}
      </div>
    );
  };

  return {
    Modal: isOpen ? ModalTemplate : () => <></>,
    openerRef,
    openModal,
    closeModal,
    isOpen,
  };
}

const ViewportCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);

  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default useModal;
