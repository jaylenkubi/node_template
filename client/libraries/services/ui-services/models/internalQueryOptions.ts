/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * thecube
 * Platform API
 * OpenAPI spec version: 1.0.0
 */
import type { InternalQueryOptionsRelations } from './internalQueryOptionsRelations';
import type { InternalQueryOptionsSelect } from './internalQueryOptionsSelect';
import type { InternalQueryOptionsWhere } from './internalQueryOptionsWhere';

export interface InternalQueryOptions {
  cache?: boolean;
  order?: unknown;
  relations?: InternalQueryOptionsRelations;
  select?: InternalQueryOptionsSelect;
  skip?: number;
  take?: number;
  where?: InternalQueryOptionsWhere;
}