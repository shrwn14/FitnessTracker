using Xunit;

namespace FitnessTracker.EntityFrameworkCore;

[CollectionDefinition(FitnessTrackerTestConsts.CollectionDefinitionName)]
public class FitnessTrackerEntityFrameworkCoreCollection : ICollectionFixture<FitnessTrackerEntityFrameworkCoreFixture>
{

}
