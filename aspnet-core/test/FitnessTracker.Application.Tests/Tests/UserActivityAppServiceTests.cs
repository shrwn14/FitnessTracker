using FitnessTracker.Entities;
using FitnessTracker.Interfaces;
using FitnessTracker.Mocks;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Xunit;

namespace FitnessTracker.Tests;

public abstract class UserActivityAppServiceTests<TStartupModule> : FitnessTrackerApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    private readonly IUserActivityService _userActivityService;
    private readonly IIdentityUserAppService _userAppService;

    public UserActivityAppServiceTests()
    {
        _userActivityService = GetRequiredService<IUserActivityService>();
        _userAppService = GetRequiredService<IIdentityUserAppService>();
    }

    [Fact]
    public async Task Initial_Data_Should_Contain_A_List()
    {
        //Arrange
        var user = (await _userAppService.GetListAsync(new GetIdentityUsersInput())).Items.FirstOrDefault();
        var id =  user.Id;

        //Act
        var result = await _userActivityService.GetListAsync(new PagedAndSortedResultRequestDto());

        //Assert
        result.TotalCount.ShouldBeGreaterThan(0);
        result.Items.ShouldContain(b => b.Location.Contains("Rizal"));

    }

    [Fact]
    public async Task Should_Create_A_Valid_UserActivity()
    {
        //Arrange
        var user = (await _userAppService.GetListAsync(new GetIdentityUsersInput())).Items.FirstOrDefault();
        var id = user.Id;

        //Act
        var result = await _userActivityService.CreateAsync(
            new UserActivityCreateUpdateDto
            {
                UserProfileId = id,
                Location = "Philippine Arena, Bulacan",
                Started = new DateTime(2024, 8 ,28, 6, 0, 0),
                Ended = new DateTime(2024, 8 ,28, 15, 0, 0),
                Distance = 100
            }
        );

        //Assert
        result.Id.ShouldNotBe(Guid.Empty);
        result.Location.Contains("Philippine Arena");
        result.Duration.ShouldBe(540);
        result.AveragePace.ShouldBe(5.4);
    }
}
