/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { FavouriteEntityCreatedAt } from './favouriteEntityCreatedAt';
import type { FavouriteEntityDeletedAt } from './favouriteEntityDeletedAt';
import type { FavouriteEntityUpdatedAt } from './favouriteEntityUpdatedAt';

export interface FavouriteEntity {
  _id?: number;
  createdAt?: FavouriteEntityCreatedAt;
  deletedAt?: FavouriteEntityDeletedAt;
  sneakerIds?: number[];
  updatedAt?: FavouriteEntityUpdatedAt;
  userId?: string;
}
