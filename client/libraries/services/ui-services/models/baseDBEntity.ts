/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { BaseDBEntityCreatedAt } from './baseDBEntityCreatedAt';
import type { BaseDBEntityDeletedAt } from './baseDBEntityDeletedAt';
import type { BaseDBEntityUpdatedAt } from './baseDBEntityUpdatedAt';

export interface BaseDBEntity {
  _id?: number;
  createdAt?: BaseDBEntityCreatedAt;
  deletedAt?: BaseDBEntityDeletedAt;
  updatedAt?: BaseDBEntityUpdatedAt;
}
