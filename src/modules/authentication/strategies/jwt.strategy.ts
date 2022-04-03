import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import configurate from 'src/shared/config/configurate';
import { IDecodedToken } from '../interfaces';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configurate().jwt.secret,
    });
  }

  async validate(payload: IDecodedToken) {
    return { email: payload.email };
  }
}
