/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { useGetEnquiry } from "queries/Query";
import { Avatar, Icon, Modal, Tooltip } from "@mui/material";
import { useState } from "react";
import whatsapp from 'assets/images/whatsapp.svg'

function Course({ name, desc }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <Avatar src={'image'} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name} {desc}
        </Typography>
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetEnquiry({ pageNo: 1, pageCount: 100 });
  const [open, setOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleOpen = (message) => {
    setSelectedMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMessage('');
  };
  const columns = [
    { name: "user", align: "left" },
    { name: "phone", align: "center" },
    { name: "email", align: "center" },
    { name: "course", align: "center" },
    { name: "qualification", align: "center" },
    { name: "message", align: "center" },
    { name: "postedon", align: "center" },
    // { name: "Lastupdated", align: "center" },
    // { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    user: <Course name={item?.firstname} desc={item?.lastname} />,
    phone: (
      <Typography variant="caption" color="secondary" fontWeight="medium" sx={{ display: 'flex', alignItems: 'center' }}>
        {item?.phone && <><a target="_blank" rel="noreferrer" href={`tel:${item?.code}${item?.phone}`}>{item?.code} {item?.phone}</a>&nbsp;&nbsp;
          <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=${item?.code.substring(1)}${item?.phone}&text=Hi%C2%A0there,%C2%A0Let%27s%C2%A0have%C2%A0a%C2%A0talk`}><img src={whatsapp} height={20} width={20} /></a></>}
      </Typography>
    ),
    email: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        <a target="_blank" rel="noreferrer" href={`mailto:${item?.email}`}>{item?.email}</a>
      </Typography>
    ),
    course: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.course ?? '--'}
      </Typography>
    ),
    qualification: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.qualification ?? '--'}
      </Typography>
    ),
    message: (
      <Tooltip title={item?.message} arrow>
        <Typography
          variant="caption"
          color="secondary"
          fontWeight="medium"
          onClick={() => handleOpen(item?.message)}
          style={{ cursor: 'pointer' }}
        >
          {item?.message?.substring(0, 40)}
        </Typography>
      </Tooltip>
    ),
    postedon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    // Lastupdated: (
    //   <Typography variant="caption" color="secondary" fontWeight="medium">
    //     {new Date(item?.updatedAt).toDateString()}
    //   </Typography>
    // ),
    // action: (
    //   <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    //     more_vert
    //   </Icon>
    // ),
  }))
  return (
    <>
      {isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> : <Table columns={columns} rows={rows} />}
      <Modal open={open} onClose={handleClose} >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          maxHeight: '70vh',
          bgcolor: 'background.paper',
          // border: '2px solid #000', 
          boxShadow: 24,
          p: 4
        }}>
          <Typography variant="h6" component="h2">
            Full Message
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            {selectedMessage}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default TableData;
