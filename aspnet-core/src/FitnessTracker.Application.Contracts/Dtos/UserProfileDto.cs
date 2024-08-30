using System;
using System.Collections.Generic;

namespace FitnessTracker
{
    public class UserProfileDto : BaseEntityDto
    {
        public string Name { get; set; }
        public double Weight { get; set; }
        public double Height { get; set; }
        public DateTime Birthdate { get; set; }

        public int Age
        {
            get
            {
                var today = DateTime.Today;
                var age = today.Year - Birthdate.Year;
                if (Birthdate > today.AddYears(-age))
                {
                    // Adjust if birthday hasn't occurred this year
                    age--;
                }

                return age;
            }
        }

        public double BMI
        {
            get
            {
                if (Height < 1)
                {
                    return 0;
                }

                double heightInMeters = Height / 100.0; // Convert height from cm to meters
                return Math.Round( Weight / (heightInMeters * heightInMeters), 2);
            }
        }


        public IList<UserActivityDto> UserActivities { get; set; } = [];
    }
}
