using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FitnessTracker.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class FitnessTrackerDbContextFactory : IDesignTimeDbContextFactory<FitnessTrackerDbContext>
{
    public FitnessTrackerDbContext CreateDbContext(string[] args)
    {
        FitnessTrackerEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<FitnessTrackerDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new FitnessTrackerDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../FitnessTracker.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
