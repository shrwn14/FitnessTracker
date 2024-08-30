using FitnessTracker.Entities;
using FitnessTracker.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace FitnessTracker
{
    public class UserActivityService : ApplicationService, IUserActivityService
    {
        private readonly IRepository<UserActivity, Guid> _repo;

        public UserActivityService(IRepository<UserActivity, Guid> repo)
        {
                _repo = repo;
        }
        public async Task<UserActivityDto> CreateAsync(UserActivityCreateUpdateDto input)
        {
            var model = ObjectMapper.Map<UserActivityCreateUpdateDto, UserActivity>(input);
            var result = await _repo.InsertAsync(model, true);

            return ObjectMapper.Map<UserActivity, UserActivityDto>(result);
        }

        public async Task DeleteAsync(Guid id)
        {
            await _repo.DeleteAsync(id);
        }

        public async Task<UserActivityDto> GetAsync(Guid id)
        {
            var result = await _repo.GetAsync(id, true);
            return ObjectMapper.Map<UserActivity, UserActivityDto>(result);
        }

        public async Task<PagedResultDto<UserActivityDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            if (input.Sorting.IsNullOrEmpty())
            {
                input.Sorting = $"{nameof(UserActivityDto.LastModificationTime)} DESC";
            }

            var queryResult = await _repo.GetPagedListAsync(input.SkipCount, input.MaxResultCount, input.Sorting);
            var data = ObjectMapper.Map<List<UserActivity>, List<UserActivityDto>>(queryResult);
            var count = await _repo.GetCountAsync();

            return new PagedResultDto<UserActivityDto>(count, data);
        }

        public async Task<UserActivityDto> UpdateAsync(Guid id, UserActivityCreateUpdateDto input)
        {
            var data = await _repo.GetAsync(id);
            var model = ObjectMapper.Map(input, data);
            var result = await _repo.UpdateAsync(model, true);

            return ObjectMapper.Map<UserActivity, UserActivityDto>(result);
        }
    }
}
