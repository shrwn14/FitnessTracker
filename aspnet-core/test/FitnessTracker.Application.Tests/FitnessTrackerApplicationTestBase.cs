using Volo.Abp.Modularity;

namespace FitnessTracker;

public abstract class FitnessTrackerApplicationTestBase<TStartupModule> : FitnessTrackerTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
