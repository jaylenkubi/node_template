/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { AccessToken } from './accessToken';

export interface TokenSchema {
  access: AccessToken;
  emailVerificationToken: string;
  refresh: AccessToken;
}
