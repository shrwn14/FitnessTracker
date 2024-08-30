using FitnessTracker.Entities;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FitnessTracker.ConfigExtensions
{
    public static class UserProfileConfig
    {
        public static void ConfigureUserProfile(this ModelBuilder builder)
        {
            builder.Entity<UserProfile>(b => {
                b.ToTable("UserProfiles");
                b.ConfigureByConvention();
                b.Property(x => x.Id).ValueGeneratedOnAdd();
                b.Property(x => x.Name).IsRequired().HasMaxLength(160);
                b.Property(x => x.Weight).IsRequired().HasPrecision(4, 2);
                b.Property(x => x.Height).IsRequired().HasPrecision(4, 2);
                b.Property(x => x.Birthdate).IsRequired();

                b.HasMany(x => x.UserActivities).WithOne(x => x.UserProfile).HasForeignKey(f => f.UserProfileId);
            });
        }
    }
}
