using System;
using Volo.Abp;
using Volo.Abp.Auditing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Timing;
using Volo.Abp.Users;

namespace FitnessTracker
{
    public class FitnessTrackerAuditPropertySetter : IAuditPropertySetter, ITransientDependency
    {
        protected IGuidGenerator GuidGenerator;
        protected ICurrentUser CurrentUser { get; }
        protected ICurrentTenant CurrentTenant { get; }
        protected IClock Clock { get; }

        public FitnessTrackerAuditPropertySetter(
            IGuidGenerator guidGenerator,
            ICurrentUser currentUser,
            ICurrentTenant currentTenant,
            IClock clock)
        {
            GuidGenerator = guidGenerator;
            CurrentUser = currentUser;
            CurrentTenant = currentTenant;
            Clock = clock;
        }
        public virtual void SetCreationProperties(object targetObject)
        {
            SetId(targetObject);
            SetCreationTime(targetObject);
            SetCreatorId(targetObject);
            SetCreatedBy(targetObject);
            SetModificationProperties(targetObject);
        }

        public virtual void SetModificationProperties(object targetObject)
        {
            SetLastModificationTime(targetObject);
            SetLastModifierId(targetObject);
            SetLastModifiedBy(targetObject);
        }

        public virtual void SetDeletionProperties(object targetObject)
        {
            SetDeletionTime(targetObject);
            SetDeleterId(targetObject);
        }

        public virtual void IncrementEntityVersionProperty(object targetObject)
        {
            if (targetObject is IHasEntityVersion objectWithEntityVersion)
            {
                ObjectHelper.TrySetProperty(objectWithEntityVersion, x => x.EntityVersion, x => x.EntityVersion + 1);
            }
        }

        protected virtual void SetId(object targetObject)
        {
            if (!(targetObject is IEntity<Guid> objectWithId))
            {
                return;
            }

            if (objectWithId.Id == default)
            {
                ObjectHelper.TrySetProperty(objectWithId, x => x.Id, () => GuidGenerator.Create());
            }
        }

        protected virtual void SetCreationTime(object targetObject)
        {
            if (!(targetObject is IHasCreationTime objectWithCreationTime))
            {
                return;
            }

            if (objectWithCreationTime.CreationTime == default)
            {
                ObjectHelper.TrySetProperty(objectWithCreationTime, x => x.CreationTime, () => Clock.Now);
            }
        }

        protected virtual void SetCreatorId(object targetObject)
        {
            if (!CurrentUser.Id.HasValue)
            {
                return;
            }

            if (targetObject is IMultiTenant multiTenantEntity)
            {
                if (multiTenantEntity.TenantId != CurrentUser.TenantId)
                {
                    return;
                }
            }

            if (targetObject is IMayHaveCreator mayHaveCreatorObject)
            {
                if (mayHaveCreatorObject.CreatorId.HasValue && mayHaveCreatorObject.CreatorId.Value != default)
                {
                    return;
                }

                ObjectHelper.TrySetProperty(mayHaveCreatorObject, x => x.CreatorId, () => CurrentUser.Id);
            }
            else if (targetObject is IMustHaveCreator mustHaveCreatorObject)
            {
                if (mustHaveCreatorObject.CreatorId != default)
                {
                    return;
                }

                ObjectHelper.TrySetProperty(mustHaveCreatorObject, x => x.CreatorId, () => CurrentUser.Id.Value);
            }
        }

        protected virtual void SetLastModificationTime(object targetObject)
        {
            if (targetObject is IHasModificationTime objectWithModificationTime)
            {
                ObjectHelper.TrySetProperty(objectWithModificationTime, x => x.LastModificationTime, () => Clock.Now);
            }
        }

        protected virtual void SetLastModifierId(object targetObject)
        {
            if (!(targetObject is IModificationAuditedObject modificationAuditedObject))
            {
                return;
            }

            if (!CurrentUser.Id.HasValue)
            {
                ObjectHelper.TrySetProperty(modificationAuditedObject, x => x.LastModifierId, () => null);
                return;
            }

            if (modificationAuditedObject is IMultiTenant multiTenantEntity)
            {
                if (multiTenantEntity.TenantId != CurrentUser.TenantId)
                {
                    ObjectHelper.TrySetProperty(modificationAuditedObject, x => x.LastModifierId, () => null);
                    return;
                }
            }

            ObjectHelper.TrySetProperty(modificationAuditedObject, x => x.LastModifierId, () => CurrentUser.Id);
        }

        protected virtual void SetDeletionTime(object targetObject)
        {
            if (targetObject is IHasDeletionTime objectWithDeletionTime)
            {
                if (objectWithDeletionTime.DeletionTime == null)
                {
                    ObjectHelper.TrySetProperty(objectWithDeletionTime, x => x.DeletionTime, () => Clock.Now);
                }
            }
        }

        protected virtual void SetDeleterId(object targetObject)
        {
            if (!(targetObject is IDeletionAuditedObject deletionAuditedObject))
            {
                return;
            }

            if (deletionAuditedObject.DeleterId != null)
            {
                return;
            }

            if (!CurrentUser.Id.HasValue)
            {
                ObjectHelper.TrySetProperty(deletionAuditedObject, x => x.DeleterId, () => null);
                return;
            }

            if (deletionAuditedObject is IMultiTenant multiTenantEntity)
            {
                if (multiTenantEntity.TenantId != CurrentUser.TenantId)
                {
                    ObjectHelper.TrySetProperty(deletionAuditedObject, x => x.DeleterId, () => null);
                    return;
                }
            }

            ObjectHelper.TrySetProperty(deletionAuditedObject, x => x.DeleterId, () => CurrentUser.Id);
        }

        protected virtual void SetCreatedBy(object targetObject)
        {
            if (!CurrentUser.Id.HasValue)
            {
                return;
            }

            if (targetObject is IFitnessTrackerAuditedEntity auditEntity)
            {
                if (string.IsNullOrEmpty(auditEntity.CreatedBy))
                {
                    ObjectHelper.TrySetProperty(auditEntity, x => x.CreatedBy, () => CurrentUser.UserName ?? CurrentUser.Email);
                }
            }
        }

        protected virtual void SetLastModifiedBy(object targetObject)
        {
            if (!CurrentUser.Id.HasValue)
            {
                return;
            }

            if (targetObject is IFitnessTrackerAuditedEntity auditEntity)
            {
                ObjectHelper.TrySetProperty(auditEntity, x => x.LastModifiedBy, () => CurrentUser.UserName ?? CurrentUser.Email);
            }
        }
    }
}
