using FitnessTracker.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace FitnessTracker.Data
{
    public class UserProfileDataSeed : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<UserProfile, Guid> _repo;
        private readonly IRepository<IdentityUser, Guid> _userRepo;
        public UserProfileDataSeed(IRepository<UserProfile, Guid> repo, IRepository<IdentityUser, Guid> userRepo)
        {
            _repo = repo;
            _userRepo = userRepo;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _repo.GetCountAsync() <= 0)
            {
                var username = "admin";
                var user = await _userRepo.GetAsync(x => x.UserName == username);
                var id = user?.Id ?? Guid.NewGuid();

                await _repo.InsertAsync(new UserProfile(id)
                {
                    Name = "John Doe",
                    Weight = 80,
                    Height = 182,
                    Birthdate = new DateTime(1990, 07, 14),
                    CreatedBy = username,
                    LastModifiedBy = username,
                    UserActivities = new List<UserActivity>
                    {
                        new UserActivity(Guid.Empty)
                        {
                            UserProfileId = id,
                            Location = "Rizal Park, Manila",
                            Started = new DateTime(2024, 8 ,28, 6, 0, 0),
                            Ended = new DateTime(2024, 8 ,28, 15, 0, 0),
                            Distance = 100
                        }
                    }
                }, autoSave: true); ;

            }
        }
    }
}
