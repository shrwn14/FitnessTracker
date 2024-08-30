using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FitnessTracker.Interfaces
{
    public interface IUserActivityService : IApplicationService, IRemoteService
    {
        Task<UserActivityDto> GetAsync(Guid id);
        Task<UserActivityDto> CreateAsync(UserActivityCreateUpdateDto input);
        Task<UserActivityDto> UpdateAsync(Guid id, UserActivityCreateUpdateDto input);
        Task DeleteAsync(Guid id);
        Task<PagedResultDto<UserActivityDto>> GetListAsync(PagedAndSortedResultRequestDto input);
    }
}
