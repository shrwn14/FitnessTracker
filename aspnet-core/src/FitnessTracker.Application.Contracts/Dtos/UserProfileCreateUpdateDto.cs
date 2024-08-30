using System;

namespace FitnessTracker
{
    public class UserProfileCreateUpdateDto
    {
        public string Name { get; set; }
        public double Weight { get; set; }
        public double Height { get; set; }
        public DateTime Birthdate { get; set; }
    }
}
