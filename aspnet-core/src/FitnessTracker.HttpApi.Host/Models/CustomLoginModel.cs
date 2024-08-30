using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Pages.Abp.MultiTenancy;

using System;
using System.Threading.Tasks;
using Volo.Abp.Account.Web;
using Volo.Abp.Account.Web.Pages.Account;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Users;

namespace PayrollCenter.Models;

public class CustomLoginModel : LoginModel
{
    public readonly IRepository<Volo.Abp.Identity.IdentityUser, Guid> _userRepo;
    private readonly AbpAspNetCoreMultiTenancyOptions _options;
    public CustomLoginModel(
        IRepository<Volo.Abp.Identity.IdentityUser, Guid> userRepo,
        IOptions<AbpAspNetCoreMultiTenancyOptions> options,
        IAuthenticationSchemeProvider schemeProvider,
        IOptions<AbpAccountOptions> accountOptions,
        IOptions<IdentityOptions> identityOptions,
        IdentityDynamicClaimsPrincipalContributorCache identityDynamicClaimsPrincipalContributorCache)
        : base(schemeProvider,accountOptions,identityOptions,identityDynamicClaimsPrincipalContributorCache)
    {
        _userRepo = userRepo;
        _options = options.Value;
    }

    public override async Task<IActionResult> OnPostAsync(string action)
    {
        if (action == "Login")
        {
            AbpMultiTenancyCookieHelper.SetTenantCookie(HttpContext, null, _options.TenantKey);
            var user = await _userRepo.FirstOrDefaultAsync(x => (x.UserName == LoginInput.UserNameOrEmailAddress || x.Email == LoginInput.UserNameOrEmailAddress) && !x.IsDeleted);
            if (user != null)
            {
                using (CurrentTenant.Change(user?.TenantId))
                {
                    var tenantId = user?.TenantId != null ? (Guid?)CurrentTenant.GetId() : null;
                    AbpMultiTenancyCookieHelper.SetTenantCookie(HttpContext, tenantId, _options.TenantKey);
                    return await base.OnPostAsync(action);
                }
            }
        }
        return await base.OnPostAsync(action);
    }
}