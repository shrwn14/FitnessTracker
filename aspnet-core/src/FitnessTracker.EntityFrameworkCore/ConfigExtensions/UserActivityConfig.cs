using FitnessTracker.Entities;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FitnessTracker.ConfigExtensions
{
    public static class UserActivityConfig
    {
        public static void ConfigureUserActivity(this ModelBuilder builder)
        {
            builder.Entity<UserActivity>(b => {
                b.ToTable("UserActivities");
                b.ConfigureByConvention();
                b.Property(x => x.Id).ValueGeneratedOnAdd();
                b.Property(x => x.UserProfileId).IsRequired();
                b.Property(x => x.Location).IsRequired().HasMaxLength(255);
                b.Property(x => x.Distance).IsRequired().HasPrecision(6, 2);
                b.Property(x => x.Started).IsRequired();
                b.Property(x => x.Ended).IsRequired();

                b.HasOne(x => x.UserProfile).WithMany(x => x.UserActivities).HasForeignKey(f => f.UserProfileId);
            });
        }
    }
}
