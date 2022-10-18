import axios from "axios";
import logger from "./log.service"
import { toast } from "react-toastify";

axios.interceptors.response.use(
    (res) => res,
    function (error) {
        console.log("Interceptor");

        const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

        if (!expectedErrors) {
            logger.log(error);
            toast.info("Something was wrong. Try it later");
            toast.error("Something was wrong. Try it later");
            toast("Unexpected Error");
        }
        return Promise.reject(error)
    }
);

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default httpService;
