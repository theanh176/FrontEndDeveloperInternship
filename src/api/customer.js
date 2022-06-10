import axiosClient from "./axiosClient";

const END_POINT ={
    CUSTOMER: "customer"
}

export const getCustomerAPI =()=>{
    return axiosClient.get(`${END_POINT.CUSTOMER}`);
}