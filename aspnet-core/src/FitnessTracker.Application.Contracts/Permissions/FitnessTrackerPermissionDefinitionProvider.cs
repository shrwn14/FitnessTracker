using FitnessTracker.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FitnessTracker.Permissions;

public class FitnessTrackerPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(FitnessTrackerPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(FitnessTrackerPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<FitnessTrackerResource>(name);
    }
}
