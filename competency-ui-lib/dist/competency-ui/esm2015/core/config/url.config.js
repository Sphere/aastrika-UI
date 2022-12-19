const ɵ0 = () => `${urlConfig.host}${urlConfig.apiSlug}`, ɵ1 = () => `${urlConfig.host}${urlConfig.apiProxy}`, ɵ2 = (id) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`, ɵ3 = () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`, ɵ4 = () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`;
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
    apiBasePath: ɵ0,
    apiBaseProxy: ɵ1,
    getEntityById: ɵ2,
    getAllEntity: ɵ3,
    getUserPassbook: ɵ4,
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZS8iLCJzb3VyY2VzIjpbImNvbmZpZy91cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQVdlLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQzdDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQzVDLENBQUMsRUFBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxPQUNqRixHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0NBQWdDLE9BQzdELEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxtQkFBbUI7QUFmdkU7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRztJQUN2Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFdBQVcsSUFBK0M7SUFDMUQsWUFBWSxJQUErQztJQUMzRCxhQUFhLElBQWtGO0lBQy9GLFlBQVksSUFBa0U7SUFDOUUsZUFBZSxJQUFzRDtDQUN0RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB1cmxDb25maWcgdG8gcmV0dXJuIHRoZSBhcGkgdXJsIFxuICpcbiAqIEBhdXRob3IgQW1hbiBLdW1hciBTaGFybWEgPGFtYW5rdW1hci5zaGFybWFAdGFyZW50by5jb20+XG4gKi9cbmV4cG9ydCBjb25zdCB1cmxDb25maWcgPSB7XG4gIC8vIGVuZHBvaW50IGNvbmZpZ3MuLi4hXG4gIC8vIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjMwMDInLFxuICBob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgYXBpU2x1ZzogJy9hcGlzL3Byb3RlY3RlZC92OCcsXG4gIGFwaVByb3h5OiAnL2FwaXMvcHJveGllcy92OCcsXG4gIGFwaUJhc2VQYXRoOiAoKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlTbHVnfWAsXG4gIGFwaUJhc2VQcm94eTooKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlQcm94eX1gLFxuICBnZXRFbnRpdHlCeUlkOiAoaWQ6bnVtYmVyKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRFbnRpdHlCeUlkLyR7aWR9YCxcbiAgZ2V0QWxsRW50aXR5OiAoKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVBhdGgoKX0vZW50aXR5Q29tcGV0ZW5jeS9nZXRBbGxFbnRpdHlgLFxuICBnZXRVc2VyUGFzc2Jvb2s6ICgpID0+IGAke3VybENvbmZpZy5hcGlCYXNlUHJveHkoKX0vdXNlci92MS9wYXNzYm9va2AsXG59Il19