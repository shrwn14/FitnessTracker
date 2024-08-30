using System;
using System.Collections.Generic;

namespace FitnessTracker.Entities
{
    public class UserProfile : FitnessTrackerAuditedEntity<Guid>
    {
        public string Name { get; set; }
        public double Weight { get; set; }
        public double Height { get; set; }
        public DateTime Birthdate { get; set; }

        public IList<UserActivity> UserActivities { get; set; } = [];

        public UserProfile()
        {
                
        }

        public UserProfile(Guid id)
        {
            Id = id;       
        }
    }
}
