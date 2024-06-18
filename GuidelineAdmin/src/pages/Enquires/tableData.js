/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { useGetEnquiry } from "queries/Query";
import { Avatar, Icon, Modal, Tooltip } from "@mui/material";
import { useState } from "react";

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
    { name: "course", align: "left" },
    { name: "email", align: "center" },
    { name: "message", align: "center" },
    { name: "postedon", align: "center" },
    { name: "Lastupdated", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    course: <Course name={item?.firstname} desc={item?.lastname} />,
    email: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        <a href={`mailto:${item?.email}`}>{item?.email}</a>
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
          {item?.message?.substring(0, 50)}
        </Typography>
      </Tooltip>
    ),
    postedon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Lastupdated: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.updatedAt).toDateString()}
      </Typography>
    ),
    action: (
      <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
        more_vert
      </Icon>
    ),
  }))
  return (
    <>
      {isLoading ? <>loading...</> : <Table columns={columns} rows={rows} />}
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
