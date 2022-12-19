var ɵ0 = function () { return "" + urlConfig.host + urlConfig.apiSlug; }, ɵ1 = function () { return "" + urlConfig.host + urlConfig.apiProxy; }, ɵ2 = function (id) { return urlConfig.apiBasePath() + "/entityCompetency/getEntityById/" + id; }, ɵ3 = function () { return urlConfig.apiBasePath() + "/entityCompetency/getAllEntity"; }, ɵ4 = function () { return urlConfig.apiBaseProxy() + "/user/v1/passbook"; };
/**
 * urlConfig to return the api url
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export var urlConfig = {
    // endpoint configs...!
    // host: 'http://localhost:3002',
    host: 'http://localhost:3000',
    apiSlug: '/apis/protected/v8',
    apiProxy: '/apis/proxies/v8',
    apiBasePath: ɵ0,
    apiBaseProxy: ɵ1,
    getEntityById: ɵ2,
    getAllEntity: ɵ3,
    getUserPassbook: ɵ4,
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYS9jb21wdGVuY3kvY29yZS8iLCJzb3VyY2VzIjpbImNvbmZpZy91cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQVdlLGNBQU0sT0FBQSxLQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQVMsRUFBdkMsQ0FBdUMsT0FDN0MsY0FBTSxPQUFBLEtBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBVSxFQUF4QyxDQUF3QyxPQUM1QyxVQUFDLEVBQVMsSUFBSyxPQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsd0NBQW1DLEVBQUksRUFBakUsQ0FBaUUsT0FDakYsY0FBTSxPQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsbUNBQWdDLEVBQTFELENBQTBELE9BQzdELGNBQU0sT0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLHNCQUFtQixFQUE5QyxDQUE4QztBQWZ2RTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsV0FBVyxJQUErQztJQUMxRCxZQUFZLElBQStDO0lBQzNELGFBQWEsSUFBa0Y7SUFDL0YsWUFBWSxJQUFrRTtJQUM5RSxlQUFlLElBQXNEO0NBQ3RFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogdXJsQ29uZmlnIHRvIHJldHVybiB0aGUgYXBpIHVybCBcclxuICpcclxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cclxuICovXHJcbmV4cG9ydCBjb25zdCB1cmxDb25maWcgPSB7XHJcbiAgLy8gZW5kcG9pbnQgY29uZmlncy4uLiFcclxuICAvLyBob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAyJyxcclxuICBob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICBhcGlTbHVnOiAnL2FwaXMvcHJvdGVjdGVkL3Y4JyxcclxuICBhcGlQcm94eTogJy9hcGlzL3Byb3hpZXMvdjgnLFxyXG4gIGFwaUJhc2VQYXRoOiAoKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlTbHVnfWAsXHJcbiAgYXBpQmFzZVByb3h5OigpID0+IGAke3VybENvbmZpZy5ob3N0fSR7dXJsQ29uZmlnLmFwaVByb3h5fWAsXHJcbiAgZ2V0RW50aXR5QnlJZDogKGlkOm51bWJlcikgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQYXRoKCl9L2VudGl0eUNvbXBldGVuY3kvZ2V0RW50aXR5QnlJZC8ke2lkfWAsXHJcbiAgZ2V0QWxsRW50aXR5OiAoKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRBbGxFbnRpdHlgLFxyXG4gIGdldFVzZXJQYXNzYm9vazogKCkgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQcm94eSgpfS91c2VyL3YxL3Bhc3Nib29rYCxcclxufSJdfQ==