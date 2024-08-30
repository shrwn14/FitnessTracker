using FitnessTracker.Entities;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using System;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;

namespace FitnessTracker;

[DependsOn(
    typeof(FitnessTrackerApplicationModule),
    typeof(FitnessTrackerDomainTestModule)
)]
public class FitnessTrackerApplicationTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        base.ConfigureServices(context);
        /*
        var userPrfileRepo = Substitute.For<IRepository<UserProfile, Guid>>();
        context.Services.AddScoped(s => userPrfileRepo);

        var userActivityRepo = Substitute.For<IRepository<UserActivity, Guid>>();
        context.Services.AddScoped(s => userActivityRepo);
        */
    }
}
