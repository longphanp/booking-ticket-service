import configs from "configs";
import {
  ACCESS_TOKEN_EXPIRED_TIME,
  REFRESH_TOKEN_EXPIRED_TIME,
} from "constants/token";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import UserModel from "models/User";
import { CredentialDTO } from "types/CredentialDTO";

const oauthClient = new OAuth2Client();

export default async function login(data: CredentialDTO) {
  const ticket = await oauthClient.verifyIdToken({
    idToken: data.credential,
    audience: data.clientId,
  });

  const payload = ticket.getPayload();
  const { email, name } = payload!;

  const user = await UserModel.findOneAndUpdate(
    { email },
    { email, name },
    { upsert: true },
  ).lean();

  const accessToken = jwt.sign({ ...user }, configs.google.clientSecret, {
    expiresIn: ACCESS_TOKEN_EXPIRED_TIME,
  });

  const refreshToken = jwt.sign(
    {
      email: user.email,
    },
    configs.google.clientSecret,
    { expiresIn: REFRESH_TOKEN_EXPIRED_TIME },
  );

  return {
    accessToken,
    refreshToken,
  };
}
