import { Request } from "express";
import { Strategy } from "passport-jwt";

export const extractTokenFromReq = (req: Request): string | undefined => {
  return req?.headers?.authorization?.replace('Bearer ', '');
};

export const jwtStrategy = (secret: string): Strategy => {
  const jwtOptions = {
    jwtFromRequest: (req: Request): string | null => {
      const token = extractTokenFromReq(req);
      return token || null;
    },
    secretOrKey: secret,
    passReqToCallback: true,
  }
  return new Strategy(jwtOptions, (jwtPayload, done) => {
    done(null, jwtPayload);
  });
};
