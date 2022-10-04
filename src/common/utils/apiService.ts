import { client } from "@common/config/graphql";
import { apiProvider } from "src/apiCaller";
const apiService = apiProvider(client as any);
export default apiService;
