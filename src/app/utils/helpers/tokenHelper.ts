import { CommonHelper } from "./commonHelper";
// import { Token } from "../../../app/models";
// import { CommonConstant } from "../constants/commonConstant";

export class TokenHelper {
  public static decodeToken(token: string) {
    var jwt = require("jsonwebtoken");

    try {
      return jwt.decode(token);
    } catch {
      return null;
    }
  }

  public static isAccessTokenExpire(accessToken: string) {
    const decodedAccessToken = this.decodeToken(accessToken);
    const accessTokenExpireDateInMilli = decodedAccessToken.exp;
    const currentDateInMilli = CommonHelper.getCurrentDateInMilli();

    return currentDateInMilli > accessTokenExpireDateInMilli - 5;
  }

  public static isRefreshTokenExpire(refreshToken: string) {
    const decodedRefreshToken = this.decodeToken(refreshToken);
    const refreshTokenExpireDateInMilli = decodedRefreshToken.exp;
    const currentDateInMilli = CommonHelper.getCurrentDateInMilli();

    return currentDateInMilli > refreshTokenExpireDateInMilli;
  }
}
