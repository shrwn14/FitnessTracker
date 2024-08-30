using FitnessTracker.Samples;
using Xunit;

namespace FitnessTracker.EntityFrameworkCore.Domains;

[Collection(FitnessTrackerTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<FitnessTrackerEntityFrameworkCoreTestModule>
{

}
