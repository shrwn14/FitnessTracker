using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FitnessTracker.Data;

/* This is used if database provider does't define
 * IFitnessTrackerDbSchemaMigrator implementation.
 */
public class NullFitnessTrackerDbSchemaMigrator : IFitnessTrackerDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
