using System;
using System.Collections.Generic;
using System.Text;
using FitnessTracker.Localization;
using Volo.Abp.Application.Services;

namespace FitnessTracker;

/* Inherit your application services from this class.
 */
public abstract class FitnessTrackerAppService : ApplicationService
{
    protected FitnessTrackerAppService()
    {
        LocalizationResource = typeof(FitnessTrackerResource);
    }
}
