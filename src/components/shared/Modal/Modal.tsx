import { useEffect } from 'react';
import ClientOnlyPortal from '../ClientOnlyPortal/ClientOnlyPortal';
import CloseIcon from '../Icons/Close';

type ModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  handleModalClose: () => void;
  onBackdropPress?: () => void;
  modalTitle: string;
};

export default function Modal({
  children,
  isVisible,
  handleModalClose,
  onBackdropPress,
  modalTitle = 'Modal',
}: ModalProps): JSX.Element {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.toggle('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isVisible]);
  return (
    <>
      {isVisible ? (
        <ClientOnlyPortal selector="#modal-container">
          <div
            className="backdrop"
            onClick={
              onBackdropPress
                ? onBackdropPress
                : () => {
                    return;
                  }
            }
          />
          <div className="modal">
            <div className="modal__header">
              <h3 id="modalTitle">{modalTitle}</h3>
              <button className="modal__close" onClick={handleModalClose}>
                <CloseIcon />
              </button>
            </div>
            <div className="modal__body">{children}</div>
          </div>
        </ClientOnlyPortal>
      ) : null}
    </>
  );
}
