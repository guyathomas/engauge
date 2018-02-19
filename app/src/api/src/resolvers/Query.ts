import { getUserId, Context } from '../utils'

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info)
  },
  user(parent, { id, email }, ctx: Context, info) {
    let where = {};
    if ( id ) { where = { ...where, id }; }
    if ( email ) { where = { ...where, email }; }
    const query = { where };
    return ctx.db.query.user(query, info)
  },
  users(parent, args, ctx: Context, info) {
    return ctx.db.query.users(args, info)
  },
  study(parent, { shortCode, id }, ctx: Context, info) {
    let where = {};
    if ( shortCode ) { where = { ...where, shortCode }; }
    if ( id ) { where = { ...where, id }; }
    const query = { where };
    return ctx.db.query.study( query, info)
  },
  studies(parent, { email }, ctx: Context, info) {
    let where = {};
    if ( email ) { where = { ...where, owner: { email }}; }
    const query = { where };
    return ctx.db.query.studies( query, info)
  },
  session(parent, args, ctx: Context, info) {
    return ctx.db.query.session( args, info)
  },
  sessions(parent, args, ctx: Context, info) {
    return ctx.db.query.sessions( args, info)
  },
};