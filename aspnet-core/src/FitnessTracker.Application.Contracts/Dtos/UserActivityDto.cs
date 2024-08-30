using System;
using System.Collections.Generic;

namespace FitnessTracker
{
    public class UserActivityDto : BaseEntityDto
    {
        public Guid UserProfileId { get; set; }
        public string Location { get; set; }
        public DateTime Started { get; set; }
        public DateTime Ended { get; set; }
        public double Distance { get; set; }
        public double Duration => Math.Round((Ended - Started).TotalMinutes, 2);
        public double AveragePace => Distance < 1 ? 0 : Math.Round(Duration / Distance, 2);

        public string HumanizedDuration
        {
            get
            {
                TimeSpan duration = Ended - Started;
                var parts = new List<string>();

                if (duration.Hours > 0)
                    parts.Add($"{duration.Hours} hr{(duration.Hours > 1 ? "s" : string.Empty)}");

                if (duration.Minutes > 0)
                    parts.Add($"{duration.Minutes} min{(duration.Minutes > 1 ? "s" : string.Empty)}");

                if (duration.Seconds > 0 && duration.Hours == 0) 
                    parts.Add($"{duration.Seconds} sec{(duration.Seconds > 1 ? "s" : string.Empty)}");

                return parts.Count > 0 ? string.Join(" and ", parts) : "less than a min";
            }
        }
    }
}
