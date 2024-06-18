import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from 'react'
import PageLayout from 'layouts/PageLayout';
import toast from "react-hot-toast";
import Input from "components/Input";
import { useAddCourses } from "queries/Query";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
   const [data, setData] = useState({})
   const navigate = useNavigate()
   const handleChange = (e) => {
      setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
   };
   const { mutateAsync: addCourse, isLoading } = useAddCourses()

   const handleSubmit = () => {
      try {
         if (!data?.name) {
            return toast.error("name is required")
         }
         if (!data?.description) {
            return toast.error("description is required")
         }
         if (!data?.abbreviation) {
            return toast.error("abbreviation is required")
         }

         addCourse(data)
            .then((res) => {
               if (res) {
                  toast.success(res?.message ?? "Course added successfully");
                  navigate('/courses')
               }
            })
            .catch((err) => {
               toast.error(err?.message ?? "Something went wrong");
            });

      } catch (error) {
         console.error(error)
      }
   }
   return (
      <PageLayout
         title={'Add Course'}
      >
         <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent={'center'}>
            <Grid container spacing={2} maxWidth={600} py={5}>
               <Grid item xs={12} sm={6}>
                  <Input
                     required
                     placeholder="Course Name"
                     id="name"
                     name="name"
                     label="Course Name"
                     value={data?.name || ''}
                     onChange={handleChange}
                     fullWidth
                     autoComplete="name"
                     variant="outlined"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Input
                     required
                     placeholder="Abbreviation"
                     id="abbreviation"
                     name="abbreviation"
                     label="abbreviation"
                     value={data?.abbreviation || ''}
                     onChange={handleChange}
                     fullWidth
                     autoComplete="abbreviation"
                     variant="outlined"
                  />
               </Grid>
               <Grid item xs={12}>
                  <Input
                     id="description"
                     name="description"
                     placeholder="Course Description"
                     label="Course Description *"
                     value={data?.description || ''}
                     onChange={handleChange}
                     fullWidth
                     autoComplete="Description"
                     multiline
                     rows={4}
                     helperText="Short Description (about 10-20 words)"
                  />
               </Grid>
               <Grid item xs={12}>
                  <Button onClick={handleSubmit}>Add Course</Button>
               </Grid>
               <Grid item xs={12}>
                  <Alert color="primary" severity="info" sx={{ mt: 3, fontSize: 13 }}>
                     <ul style={{ margin: "0", padding: "0" }}>
                        <li>Abbreviations are used when course name is too long</li>
                        <li>Ensure that your abbreviation is less than 10 characters</li>
                        <li>Ensure that courses are not repeated</li>
                     </ul>
                  </Alert>
               </Grid>
            </Grid>
         </Box>

      </PageLayout>
   )
}

export default AddCourse