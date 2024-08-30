using System;
using System.ComponentModel.DataAnnotations;

namespace FitnessTracker
{
    public class BaseEntityDto
    {
        public Guid Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string CreatedBy { get; set; }
        [MaxLength(255)]
        public string LastModifiedBy { get; set; }

        public DateTime CreationTime { get; set; }
        public virtual DateTime? LastModificationTime { get; set; }
    }
}
