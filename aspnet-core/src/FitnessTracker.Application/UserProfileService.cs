using FitnessTracker.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace FitnessTracker
{
    public class UserProfileService : ApplicationService, IUserProfileService
    {
        private readonly IRepository<UserProfile, Guid> _repo;

        public UserProfileService(IRepository<UserProfile, Guid> repo)
        {
                _repo = repo;
        }
        public async Task<UserProfileDto> CreateAsync(UserProfileCreateUpdateDto input)
        {
            var model = ObjectMapper.Map<UserProfileCreateUpdateDto, UserProfile>(input);
            var result = await _repo.InsertAsync(model, true);

            return ObjectMapper.Map<UserProfile, UserProfileDto>(result);
        }

        public async Task<UserProfileDto> GetAsync(Guid id)
        {
            var result = await _repo.GetAsync(id, true);
            return ObjectMapper.Map<UserProfile, UserProfileDto>(result);
        }

        public async Task<UserProfileDto> UpdateAsync(Guid id, UserProfileCreateUpdateDto input)
        {
            var data = await _repo.GetAsync(id);
            var model = ObjectMapper.Map(input, data);
            var result = await _repo.UpdateAsync(model, true);

            return ObjectMapper.Map<UserProfile, UserProfileDto>(result);
        }
    }
}
