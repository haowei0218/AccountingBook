import QueryTypeDefs from "./queryTypeDefs.js";
import MutationTypeDefs from "./mutationTypeDefs.js";
import { User, AuthUserResponse, ResponseLog } from "./typeDefs.js";
import { mergeTypeDefs } from '@graphql-tools/merge'

const MergeTypeDefs = mergeTypeDefs([QueryTypeDefs, MutationTypeDefs, User, AuthUserResponse, ResponseLog])


export default MergeTypeDefs