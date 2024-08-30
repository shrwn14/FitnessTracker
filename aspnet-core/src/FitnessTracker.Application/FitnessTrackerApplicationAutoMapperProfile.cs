using AutoMapper;
using FitnessTracker.Entities;

namespace FitnessTracker;

public class FitnessTrackerApplicationAutoMapperProfile : Profile
{
    public FitnessTrackerApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */

        CreateMap<UserProfile, UserProfileDto>(MemberList.None);
        CreateMap<UserProfileCreateUpdateDto, UserProfile>(MemberList.None);

        CreateMap<UserActivity, UserActivityDto>(MemberList.None);
        CreateMap<UserActivityCreateUpdateDto, UserActivity>(MemberList.None);
    }
}
