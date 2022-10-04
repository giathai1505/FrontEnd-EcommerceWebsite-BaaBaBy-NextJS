import { client } from "@common/config/graphql";
import { apiProvider } from "src/apiCaller";

const apiService = apiProvider(client);

export default apiService;
