import Button from 'components/Button';
import { Link } from 'react-router-dom';
import PageLayout from "layouts/PageLayout";
import TableData from "./tableData";

function Courses() {
  return (
    <PageLayout
      title={'Courses'}
      action={
        <Button component={Link} to={`/courses/addCourse`}>Add Courses</Button>
      }
    >
      <TableData/>
    </PageLayout>
  );
}

export default Courses;
