using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FitnessTracker.Data;
using Volo.Abp.DependencyInjection;

namespace FitnessTracker.EntityFrameworkCore;

public class EntityFrameworkCoreFitnessTrackerDbSchemaMigrator
    : IFitnessTrackerDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreFitnessTrackerDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the FitnessTrackerDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<FitnessTrackerDbContext>()
            .Database
            .MigrateAsync();
    }
}
