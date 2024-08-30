using System.Threading.Tasks;

namespace FitnessTracker.Data;

public interface IFitnessTrackerDbSchemaMigrator
{
    Task MigrateAsync();
}
