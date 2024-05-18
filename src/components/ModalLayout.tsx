import React from 'react';
import { Modal } from "antd";

interface ModalLayoutProps {
    open: boolean;
    title: string;
    width: number;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ title, open = false, width, setOpen, children }) => {
    return (
        <Modal zIndex={9999} className="modal-head" rootClassName="p-16" width={width} footer={false} title={title} centered open={open} onCancel={() => setOpen(false)}>
            {children}
        </Modal>
    );
};

export default ModalLayout;
