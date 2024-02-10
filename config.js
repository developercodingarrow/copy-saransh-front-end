import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PEODUCTION
  ? "http://sranshindia.in"
  : "http://localhost:8000/api/v1/saranshrealtorsindia";

export const App_NAME = publicRuntimeConfig.App_NAME;
