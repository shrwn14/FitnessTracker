using FitnessTracker.Tests;
using Xunit;

namespace FitnessTracker.EntityFrameworkCore.Applications;

[Collection(FitnessTrackerTestConsts.CollectionDefinitionName)]
public class EfCoreUserProfileAppServiceTests : UserProfileAppServiceTests<FitnessTrackerEntityFrameworkCoreTestModule>
{

}
