using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FitnessTracker;

[Dependency(ReplaceServices = true)]
public class FitnessTrackerBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "FitnessTracker";
}
