using FitnessTracker.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FitnessTracker.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class FitnessTrackerController : AbpControllerBase
{
    protected FitnessTrackerController()
    {
        LocalizationResource = typeof(FitnessTrackerResource);
    }
}
