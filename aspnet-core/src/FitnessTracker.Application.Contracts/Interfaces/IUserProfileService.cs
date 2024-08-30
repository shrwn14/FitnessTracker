using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;

namespace FitnessTracker
{
    public interface IUserProfileService : IApplicationService, IRemoteService
    {
        Task<UserProfileDto> GetAsync(Guid id);
        Task<UserProfileDto> CreateAsync(UserProfileCreateUpdateDto input);
        Task<UserProfileDto> UpdateAsync(Guid id, UserProfileCreateUpdateDto input);
    }
}
