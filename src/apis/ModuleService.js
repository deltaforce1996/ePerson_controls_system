import axiosBase from "./AxiosConfig";
const getModuleAll = async (offset = 0, limit = 1000, sort_by = "id:desc") => {
  return await axiosBase({
    method: "get",
    url: `/master/get-modules?offset=${offset}&limit=${limit}&sort-by=${sort_by}`,
    data: {},
  });
};
export default {
    getModuleAll,
};
