/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { BrandEnitiy } from './brandEnitiy';
import type { SneakerEntityColour } from './sneakerEntityColour';
import type { SneakerEntityCreatedAt } from './sneakerEntityCreatedAt';
import type { SneakerEntityDeletedAt } from './sneakerEntityDeletedAt';
import type { SneakerEntityReleaseDate } from './sneakerEntityReleaseDate';
import type { SneakerImageEntity } from './sneakerImageEntity';
import type { SneakerEntityUpdatedAt } from './sneakerEntityUpdatedAt';

export interface SneakerEntity {
  _id?: number;
  brand?: BrandEnitiy;
  brandId?: number;
  categoryIds?: number[];
  colour?: SneakerEntityColour;
  createdAt?: SneakerEntityCreatedAt;
  deletedAt?: SneakerEntityDeletedAt;
  description?: string;
  name?: string;
  releaseDate?: SneakerEntityReleaseDate;
  sneakerImages?: SneakerImageEntity[];
  updatedAt?: SneakerEntityUpdatedAt;
}
