var ɵ0 = function () { return "" + urlConfig.host + urlConfig.apiSlug; }, ɵ1 = function () { return "" + urlConfig.host + urlConfig.apiProxy; }, ɵ2 = function () { return "" + urlConfig.host + urlConfig.apiPublic; }, ɵ3 = function (id) { return urlConfig.apiBasePath() + "/entityCompetency/getEntityById/" + id; }, ɵ4 = function () { return urlConfig.apiBasePath() + "/entityCompetency/getAllEntity"; }, ɵ5 = function () { return urlConfig.apiBaseProxy() + "/user/v1/passbook"; }, ɵ6 = function () { return urlConfig.apiBasePublic() + "/publicContent/v1/search"; }, ɵ7 = function (identifier, hierarchyType) { return urlConfig.apiBaseProxy() + "/action/content/v3/hierarchy/" + identifier + "?hierarchyType=" + hierarchyType; };
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
    apiPublic: '/apis/public/v8',
    apiBasePath: ɵ0,
    apiBaseProxy: ɵ1,
    apiBasePublic: ɵ2,
    getEntityById: ɵ3,
    getAllEntity: ɵ4,
    getUserPassbook: ɵ5,
    getSearch: ɵ6,
    getHierachyDetails: ɵ7,
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZS8iLCJzb3VyY2VzIjpbImNvbmZpZy91cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQVllLGNBQU0sT0FBQSxLQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQVMsRUFBdkMsQ0FBdUMsT0FDN0MsY0FBTSxPQUFBLEtBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBVSxFQUF4QyxDQUF3QyxPQUM3QyxjQUFNLE9BQUEsS0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFXLEVBQXpDLENBQXlDLE9BQzlDLFVBQUMsRUFBUyxJQUFLLE9BQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSx3Q0FBbUMsRUFBSSxFQUFqRSxDQUFpRSxPQUNqRixjQUFNLE9BQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxtQ0FBZ0MsRUFBMUQsQ0FBMEQsT0FDN0QsY0FBTSxPQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsc0JBQW1CLEVBQTlDLENBQThDLE9BQzNELGNBQU0sT0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLDZCQUEwQixFQUF0RCxDQUFzRCxPQUNuRCxVQUFDLFVBQVUsRUFBRSxhQUFhLElBQUssT0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLHFDQUFnQyxVQUFVLHVCQUFrQixhQUFlLEVBQXRHLENBQXNHO0FBbkIxSjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QixXQUFXLElBQStDO0lBQzFELFlBQVksSUFBK0M7SUFDM0QsYUFBYSxJQUFnRDtJQUM3RCxhQUFhLElBQWtGO0lBQy9GLFlBQVksSUFBa0U7SUFDOUUsZUFBZSxJQUFzRDtJQUNyRSxTQUFTLElBQTZEO0lBQ3RFLGtCQUFrQixJQUFzSTtDQUV6SixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB1cmxDb25maWcgdG8gcmV0dXJuIHRoZSBhcGkgdXJsIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbmV4cG9ydCBjb25zdCB1cmxDb25maWcgPSB7XG4gIC8vIGVuZHBvaW50IGNvbmZpZ3MuLi4hXG4gIC8vIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjMwMDInLFxuICBob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgYXBpU2x1ZzogJy9hcGlzL3Byb3RlY3RlZC92OCcsXG4gIGFwaVByb3h5OiAnL2FwaXMvcHJveGllcy92OCcsXG4gIGFwaVB1YmxpYzogJy9hcGlzL3B1YmxpYy92OCcsXG4gIGFwaUJhc2VQYXRoOiAoKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlTbHVnfWAsXG4gIGFwaUJhc2VQcm94eTooKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlQcm94eX1gLFxuICBhcGlCYXNlUHVibGljOigpID0+IGAke3VybENvbmZpZy5ob3N0fSR7dXJsQ29uZmlnLmFwaVB1YmxpY31gLFxuICBnZXRFbnRpdHlCeUlkOiAoaWQ6bnVtYmVyKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRFbnRpdHlCeUlkLyR7aWR9YCxcbiAgZ2V0QWxsRW50aXR5OiAoKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRBbGxFbnRpdHlgLFxuICBnZXRVc2VyUGFzc2Jvb2s6ICgpID0+IGAke3VybENvbmZpZy5hcGlCYXNlUHJveHkoKX0vdXNlci92MS9wYXNzYm9va2AsXG4gIGdldFNlYXJjaDooKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVB1YmxpYygpfS9wdWJsaWNDb250ZW50L3YxL3NlYXJjaGAsXG4gIGdldEhpZXJhY2h5RGV0YWlsczooaWRlbnRpZmllciwgaGllcmFyY2h5VHlwZSkgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQcm94eSgpfS9hY3Rpb24vY29udGVudC92My9oaWVyYXJjaHkvJHtpZGVudGlmaWVyfT9oaWVyYXJjaHlUeXBlPSR7aGllcmFyY2h5VHlwZX1gLFxuXG59XG4iXX0=