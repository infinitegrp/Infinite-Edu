import Button from 'components/Button';
import { Link } from 'react-router-dom';
import PageLayout from "layouts/PageLayout";
import TableData from "./tableData";

function Institutions() {
  return (
    <PageLayout
      title={'Institutions'}
      action={
        <Button component={Link} to={`/institutions`}>Add Institution</Button>
      }
    >
      <TableData/>
    </PageLayout>
  );
}

export default Institutions;
