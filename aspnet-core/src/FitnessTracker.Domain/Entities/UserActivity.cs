using System;

namespace FitnessTracker.Entities
{
    public class UserActivity : FitnessTrackerAuditedEntity<Guid>
    {
        public Guid UserProfileId { get; set; }
        public string Location { get; set; }
        public DateTime Started { get;set; }
        public DateTime Ended { get; set; }
        public double Distance { get; set; }

        public virtual UserProfile UserProfile { get; set; }

        public UserActivity()
        {
                
        }

        public UserActivity(Guid id)
        {
            Id = id;
        }
    }
}
