/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { GenericTokenExpiry } from './genericTokenExpiry';

export interface GenericToken {
  expiry?: GenericTokenExpiry;
  meta?: unknown;
  token?: string;
  tokenType?: unknown;
  user?: unknown;
  userEmail?: string;
  userId?: number;
}
