import request from "utils/request";

const addCourses = async (data) => request(`/enquiry`, 'POST', {
  firstname: 'Roshan', lastname: 'Jacob', email: 'roshan@gmail.com', message: 'Session/Transaction: A MongoDB session with a transaction is used to ensure atomicity, meaning all operations succeed or fail together. Balance Calculation: The balance for the new transaction must be calculated based on the existing balances.You need to ensure the balance for the new transaction is correct before inserting it. Error Handling: Proper error handling ensures the transaction is aborted if any error occurs during the process.'})
// const addCourses = async (data) => request(`/courses`, 'POST', data)
const editCourse = async (data) => request(`/courses`, 'PATCH', data)
const deleteCourse = async (data) => request(`/courses/${data?._id}`, 'DELETE', data)
const addCollege = async (data) => request(`/college`, 'POST', data)
const addBlogs = async (data) => request(`/blogs`, 'POST', data)
const editBlogs = async (data) => request(`/blogs`, 'PATCH', data)
const deleteBlogs = async (data) => request(`/blogs/${data?._id}`, 'DELETE', data)
const getCourses = async (data) => request(`/courses?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getCourseById = async (data) => request(`/courses/${data?.id}`, 'GET', data)
const getCollege = async (data) => request(`/college?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogs = async (data) => request(`/blogs?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogsById = async (data) => request(`/blogs/${data?.id}`, 'GET', data)
const getEnquiry = async (data) => request(`/enquiry?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)

export {
    addCourses,
    editCourse,
    deleteCourse,
    addCollege,
    addBlogs,
    editBlogs,
    deleteBlogs,
    getCourses,
    getCourseById,
    getCollege,
    getBlogs,
    getBlogsById,
    getEnquiry
  };
