using FitnessTracker.Entities;
using FitnessTracker.Mocks;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Xunit;

namespace FitnessTracker.Tests;

public abstract class UserProfileAppServiceTests<TStartupModule> : FitnessTrackerApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    private readonly IUserProfileService _userProfileService;
    private readonly IIdentityUserAppService _userAppService;

    public UserProfileAppServiceTests()
    {
        _userProfileService = GetRequiredService<IUserProfileService>();
        _userAppService = GetRequiredService<IIdentityUserAppService>();
    }

    [Fact]
    public async Task Initial_Data_Should_Contain_A_Record()
    {
        //Arrange
        var user = (await _userAppService.GetListAsync(new GetIdentityUsersInput())).Items.FirstOrDefault();
        var id =  user.Id;

        //Act
        var result = await _userProfileService.GetAsync(id);

        //Assert
        result.ShouldNotBeNull();

    }

    [Fact]
    public async Task Should_Create_A_Valid_UserProfile()
    {
        //Act
        var result = await _userProfileService.CreateAsync(
            new UserProfileCreateUpdateDto
            {
                Name = "Mary Smith",
                Weight = 50,
                Height = 150,
                Birthdate = new DateTime(2000,1,1)
            }
        );

        //Assert
        result.Id.ShouldNotBe(Guid.Empty);
        result.Name.ShouldBe("Mary Smith");
        result.BMI.ShouldBe(22.22);
    }

    [Fact]
    public async Task Should_Update_A_Valid_UserProfile()
    {
        //Arrange
        var user = (await _userAppService.GetListAsync(new GetIdentityUsersInput())).Items.FirstOrDefault();
        var id = user.Id;

        //Act
        var result = await _userProfileService.UpdateAsync(
            id,
            new UserProfileCreateUpdateDto
            {
                Name = "Mary Johnson",
                Weight = 50,
                Height = 160,
                Birthdate = new DateTime(2000, 1, 1)
            }
        );

        //Assert
        result.Name.ShouldBe("Mary Johnson");
        result.BMI.ShouldBe(19.53);
    }
}
