using Volo.Abp.Modularity;

namespace FitnessTracker;

[DependsOn(
    typeof(FitnessTrackerDomainModule),
    typeof(FitnessTrackerTestBaseModule)
)]
public class FitnessTrackerDomainTestModule : AbpModule
{

}
