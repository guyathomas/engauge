import { Query } from './Query'
import { auth } from './Mutation/auth'
import { study } from './Mutation/study'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...study,
  },
  AuthPayload,
}
