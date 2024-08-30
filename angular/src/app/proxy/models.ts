import type { Entity } from './volo/abp/domain/entities/models';

export interface PayrollCenterAuditedEntity<TKey> extends Entity<TKey> {
  createdBy: string;
  lastModifiedBy?: string;
  creationTime?: string;
  lastModificationTime?: string;
}
