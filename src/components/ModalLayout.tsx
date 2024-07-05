import React from 'react';
import { ConfigProvider, Modal } from "antd";
import { useTheme } from 'next-themes';

interface ModalLayoutProps {
   open: boolean;
   title: string;
   bgcolor?: string;
   width: number;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ title, open = false, width, setOpen, children, bgcolor }) => {
   const { theme } = useTheme()
   return (
      <ConfigProvider
         theme={{
            token: {
               borderRadius: 20,
               // colorBgMask:'#fff',
               // colorBgContainer: '#f6ffed',
            },
            components: {
               Modal: {
                  contentBg: bgcolor ? bgcolor : theme === 'light' ? '#fff' : '#212227',
               },
            },
         }}
      >
         <Modal zIndex={9999} className="modal-head" rootClassName="p-16" width={width} footer={false} title={title} centered open={open} onCancel={() => setOpen(false)}>
            {children}
         </Modal>
      </ConfigProvider>
   );
};

export default ModalLayout;
