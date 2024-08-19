import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import ContactForm from "./ContactForm";

interface WhyGuidelineProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bgcolor?: string;
}

const WhyGuidelinePopup: React.FC<WhyGuidelineProps> = ({
  open,
  setOpen,
  bgcolor
}) => {
  const [openContact, setopenContact] = useState(false);

  return (
    <>
      <ModalLayout open={open} setOpen={setOpen} title='' width={1000} bgcolor="">
        <div className="h-[70vh] w-full gap-2 md:gap-5 flex flex-col items-center justify-between ">
            
        </div>
      </ModalLayout>
      <ContactForm open={openContact} setOpen={setopenContact} />
    </>
  );
};

export default WhyGuidelinePopup;