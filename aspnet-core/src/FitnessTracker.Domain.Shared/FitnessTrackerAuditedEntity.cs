using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;

namespace FitnessTracker
{
    public interface IFitnessTrackerAuditedEntity : IHasCreationTime, IHasModificationTime
    {
        //[Required]
        [MaxLength(255)]
        string CreatedBy { get; set; } 
        [MaxLength(255)]
        string LastModifiedBy { get; set; }
    }

    [Serializable]
    public abstract class FitnessTrackerAuditedEntity<TKey> : Entity<TKey>, IFitnessTrackerAuditedEntity
    {
        //[Required]
        [MaxLength(255)]
        public string CreatedBy { get; set; } = string.Empty;
        [MaxLength(255)]
        public string LastModifiedBy { get; set; } = string.Empty;

        public DateTime CreationTime { get; protected set; } = DateTime.Now;
        public virtual DateTime? LastModificationTime { get; protected set; } = DateTime.Now;

        protected FitnessTrackerAuditedEntity()
        {

        }

        protected FitnessTrackerAuditedEntity(TKey id) : base(id) { }

    }
}
