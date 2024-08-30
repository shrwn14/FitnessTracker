using Volo.Abp.Modularity;

namespace FitnessTracker;

/* Inherit from this class for your domain layer tests. */
public abstract class FitnessTrackerDomainTestBase<TStartupModule> : FitnessTrackerTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
