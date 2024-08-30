using System.Linq;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace SwaggerSettingsDemo.Web.Filters;

public class CustomSwaggerFilter : IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        //remove paths those start with /api/abp prefix
        swaggerDoc.Paths
            .Where(x => !x.Key.ToLowerInvariant().StartsWith("/api/app"))
            .ToList()
            .ForEach(x => swaggerDoc.Paths.Remove(x.Key));
    }
}