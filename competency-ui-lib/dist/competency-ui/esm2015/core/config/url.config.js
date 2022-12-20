const ɵ0 = () => `${urlConfig.host}${urlConfig.apiSlug}`, ɵ1 = () => `${urlConfig.host}${urlConfig.apiProxy}`, ɵ2 = () => `${urlConfig.host}${urlConfig.apiPublic}`, ɵ3 = (id) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`, ɵ4 = () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`, ɵ5 = () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`, ɵ6 = () => `${urlConfig.apiBasePublic()}/publicContent/v1/search`, ɵ7 = (identifier, hierarchyType) => `${urlConfig.apiBaseProxy()}/action/content/v3/hierarchy/${identifier}?hierarchyType=${hierarchyType}`;
/**
 * urlConfig to return the api url
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export const urlConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZS8iLCJzb3VyY2VzIjpbImNvbmZpZy91cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQVllLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQzdDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQzdDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQzlDLENBQUMsRUFBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxPQUNqRixHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0NBQWdDLE9BQzdELEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxtQkFBbUIsT0FDM0QsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLDBCQUEwQixPQUNuRCxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxnQ0FBZ0MsVUFBVSxrQkFBa0IsYUFBYSxFQUFFO0FBbkIxSjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QixXQUFXLElBQStDO0lBQzFELFlBQVksSUFBK0M7SUFDM0QsYUFBYSxJQUFnRDtJQUM3RCxhQUFhLElBQWtGO0lBQy9GLFlBQVksSUFBa0U7SUFDOUUsZUFBZSxJQUFzRDtJQUNyRSxTQUFTLElBQTZEO0lBQ3RFLGtCQUFrQixJQUFzSTtDQUV6SixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB1cmxDb25maWcgdG8gcmV0dXJuIHRoZSBhcGkgdXJsIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbmV4cG9ydCBjb25zdCB1cmxDb25maWcgPSB7XG4gIC8vIGVuZHBvaW50IGNvbmZpZ3MuLi4hXG4gIC8vIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjMwMDInLFxuICBob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgYXBpU2x1ZzogJy9hcGlzL3Byb3RlY3RlZC92OCcsXG4gIGFwaVByb3h5OiAnL2FwaXMvcHJveGllcy92OCcsXG4gIGFwaVB1YmxpYzogJy9hcGlzL3B1YmxpYy92OCcsXG4gIGFwaUJhc2VQYXRoOiAoKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlTbHVnfWAsXG4gIGFwaUJhc2VQcm94eTooKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlQcm94eX1gLFxuICBhcGlCYXNlUHVibGljOigpID0+IGAke3VybENvbmZpZy5ob3N0fSR7dXJsQ29uZmlnLmFwaVB1YmxpY31gLFxuICBnZXRFbnRpdHlCeUlkOiAoaWQ6bnVtYmVyKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRFbnRpdHlCeUlkLyR7aWR9YCxcbiAgZ2V0QWxsRW50aXR5OiAoKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRBbGxFbnRpdHlgLFxuICBnZXRVc2VyUGFzc2Jvb2s6ICgpID0+IGAke3VybENvbmZpZy5hcGlCYXNlUHJveHkoKX0vdXNlci92MS9wYXNzYm9va2AsXG4gIGdldFNlYXJjaDooKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVB1YmxpYygpfS9wdWJsaWNDb250ZW50L3YxL3NlYXJjaGAsXG4gIGdldEhpZXJhY2h5RGV0YWlsczooaWRlbnRpZmllciwgaGllcmFyY2h5VHlwZSkgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQcm94eSgpfS9hY3Rpb24vY29udGVudC92My9oaWVyYXJjaHkvJHtpZGVudGlmaWVyfT9oaWVyYXJjaHlUeXBlPSR7aGllcmFyY2h5VHlwZX1gLFxuXG59XG4iXX0=