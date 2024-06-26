/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { BrandEnitiy } from './brandEnitiy';
import type { MixedClassColour } from './mixedClassColour';
import type { MixedClassCreatedAt } from './mixedClassCreatedAt';
import type { MixedClassDeletedAt } from './mixedClassDeletedAt';
import type { MixedClassExpiry } from './mixedClassExpiry';
import type { MixedClassReleaseDate } from './mixedClassReleaseDate';
import type { SneakerEntity } from './sneakerEntity';
import type { SneakerImageEntity } from './sneakerImageEntity';
import type { MixedClassSneakerSize } from './mixedClassSneakerSize';
import type { MixedClassTitle } from './mixedClassTitle';
import type { GenericTokenEntity } from './genericTokenEntity';
import type { MixedClassType } from './mixedClassType';
import type { MixedClassUpdatedAt } from './mixedClassUpdatedAt';

export interface MixedClass {
  _id?: number;
  brand?: BrandEnitiy;
  brandId?: number;
  categoryIds?: number[];
  colour?: MixedClassColour;
  createdAt?: MixedClassCreatedAt;
  deletedAt?: MixedClassDeletedAt;
  description?: string;
  dob?: unknown;
  email?: string;
  expiry?: MixedClassExpiry;
  firstName?: string;
  imageUrl?: string;
  lastName?: string;
  meta?: unknown;
  name?: string;
  password?: string;
  phoneNumber?: string;
  price?: unknown;
  quantityInStock?: number;
  releaseDate?: MixedClassReleaseDate;
  sneaker?: SneakerEntity;
  sneakerId?: number;
  sneakerIds?: number[];
  sneakerImages?: SneakerImageEntity[];
  sneakers?: SneakerEntity[];
  sneakerSize?: MixedClassSneakerSize;
  title?: MixedClassTitle;
  token?: string;
  tokens?: GenericTokenEntity[];
  tokenType?: unknown;
  type?: MixedClassType;
  updatedAt?: MixedClassUpdatedAt;
  user?: unknown;
  userEmail?: string;
  userId?: string;
}
