import request from "utils/request";

const addCourses = async (data) => request(`/courses`, 'POST', data)
const editCourse = async (data) => request(`/courses`, 'PATCH', data)
const deleteCourse = async (data) => request(`/courses/${data?._id}`, 'DELETE', data)
const addCollege = async (data) => request(`/college`, 'POST', data)
const addBlogs = async (data) => request(`/blogs`, 'POST', data)
const editBlogs = async (data) => request(`/blogs`, 'PATCH', data)
const deleteBlogs = async (data) => request(`/blogs/${data?._id}`, 'DELETE', data)
const getCourses = async (data) => request(`/courses?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getCourseById = async (data) => request(`/courses/${data?.id}`, 'GET', data)
const getCollege = async (data) => request(`/college?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogs = async (data) => request(`/blogs?page=${data?.pageNo}&perpageitems=${data?.pageCount}&isAdmin=true`, 'GET', data)
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
