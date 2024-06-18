import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCourses,
  addCollege,
  getCourses,
  getCollege,
  getBlogs,
  addBlogs,
  getEnquiry,
  getBlogsById,
  editBlogs,
  deleteBlogs,
  deleteCourse,
  editCourse,
  getCourseById,
} from "./urls";

const useGetCourses = (data) => {
  return useQuery(["get_courses", data], () => getCourses(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetCourseById = (data) => {
  return useQuery(["get_courses", data], () => getCourseById(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetBlogs = (data) => {
  return useQuery(["get_blogs", data], () => getBlogs(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetBlogsById = (data) => {
  return useQuery(["get_blogs", data], () => getBlogsById(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetEnquiry = (data) => {
  return useQuery(["get_enquiry", data], () => getEnquiry(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetCollege = (data) => {
  return useQuery(["get_Colleges", data], () => getCollege(data), {
    // staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};


const useAddCourses = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => addCourses(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_courses");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

const useEditCourse = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => editCourse(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_courses");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => deleteCourse(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_courses");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};
const useAddCollege = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => addCollege(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_colleges");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

const useAddBlogs = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => addBlogs(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_blogs");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

const useEditBlogs = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => editBlogs(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_blogs");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

const useDeleteBlogs = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => deleteBlogs(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_blogs");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};

export {
  useGetCourses,
  useGetCourseById,
  useGetCollege,
  useGetBlogs,
  useGetBlogsById,
  useGetEnquiry,
  useAddCourses,
  useEditCourse,
  useDeleteCourse,
  useAddCollege,
  useAddBlogs,
  useEditBlogs,
  useDeleteBlogs
};
