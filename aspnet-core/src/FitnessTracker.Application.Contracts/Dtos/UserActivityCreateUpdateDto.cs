using System;

namespace FitnessTracker
{
    public class UserActivityCreateUpdateDto
    {
        public Guid UserProfileId { get; set; }
        public string Location { get; set; }
        public DateTime Started { get; set; }
        public DateTime Ended { get; set; }
        public double Distance { get; set; }
    }
}
