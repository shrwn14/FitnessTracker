using FitnessTracker.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace FitnessTracker.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(FitnessTrackerEntityFrameworkCoreModule),
    typeof(FitnessTrackerApplicationContractsModule)
    )]
public class FitnessTrackerDbMigratorModule : AbpModule
{
}
