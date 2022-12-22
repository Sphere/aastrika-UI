const ɵ0 = () => `${urlConfig.host}${urlConfig.apiSlug}`, ɵ1 = () => `${urlConfig.host}${urlConfig.apiProxy}`, ɵ2 = () => `${urlConfig.host}${urlConfig.apiPublic}`, ɵ3 = (id) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`, ɵ4 = () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`, ɵ5 = () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`, ɵ6 = () => `${urlConfig.apiBasePublic()}/publicContent/v1/search`, ɵ7 = (identifier, hierarchyType) => `${urlConfig.apiBaseProxy()}/action/content/v3/hierarchy/${identifier}?hierarchyType=${hierarchyType}`;
/**
 * urlConfig to return the api url
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export const urlConfig = {
    host: window.location.protocol + "//" + window.location.host || 'https://sphere.aastrika.org',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYXN0cmlrYV9ucG1qcy9jb21wdGVuY3kvY29yZS8iLCJzb3VyY2VzIjpbImNvbmZpZy91cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQVVlLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQzdDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQzdDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQzlDLENBQUMsRUFBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxPQUNqRixHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0NBQWdDLE9BQzdELEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxtQkFBbUIsT0FDM0QsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLDBCQUEwQixPQUNuRCxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxnQ0FBZ0MsVUFBVSxrQkFBa0IsYUFBYSxFQUFFO0FBakIxSjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksNkJBQTZCO0lBQzdGLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLFdBQVcsSUFBK0M7SUFDMUQsWUFBWSxJQUErQztJQUMzRCxhQUFhLElBQWdEO0lBQzdELGFBQWEsSUFBa0Y7SUFDL0YsWUFBWSxJQUFrRTtJQUM5RSxlQUFlLElBQXNEO0lBQ3JFLFNBQVMsSUFBNkQ7SUFDdEUsa0JBQWtCLElBQXNJO0NBRXpKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHVybENvbmZpZyB0byByZXR1cm4gdGhlIGFwaSB1cmwgXG4gKlxuICogQGF1dGhvciBBbWFuIEt1bWFyIFNoYXJtYSA8YW1hbmt1bWFyLnNoYXJtYUB0YXJlbnRvLmNvbT5cbiAqL1xuZXhwb3J0IGNvbnN0IHVybENvbmZpZyA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgfHwgJ2h0dHBzOi8vc3BoZXJlLmFhc3RyaWthLm9yZycsXG4gIGFwaVNsdWc6ICcvYXBpcy9wcm90ZWN0ZWQvdjgnLFxuICBhcGlQcm94eTogJy9hcGlzL3Byb3hpZXMvdjgnLFxuICBhcGlQdWJsaWM6ICcvYXBpcy9wdWJsaWMvdjgnLFxuICBhcGlCYXNlUGF0aDogKCkgPT4gYCR7dXJsQ29uZmlnLmhvc3R9JHt1cmxDb25maWcuYXBpU2x1Z31gLFxuICBhcGlCYXNlUHJveHk6KCkgPT4gYCR7dXJsQ29uZmlnLmhvc3R9JHt1cmxDb25maWcuYXBpUHJveHl9YCxcbiAgYXBpQmFzZVB1YmxpYzooKSA9PiBgJHt1cmxDb25maWcuaG9zdH0ke3VybENvbmZpZy5hcGlQdWJsaWN9YCxcbiAgZ2V0RW50aXR5QnlJZDogKGlkOm51bWJlcikgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQYXRoKCl9L2VudGl0eUNvbXBldGVuY3kvZ2V0RW50aXR5QnlJZC8ke2lkfWAsXG4gIGdldEFsbEVudGl0eTogKCkgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQYXRoKCl9L2VudGl0eUNvbXBldGVuY3kvZ2V0QWxsRW50aXR5YCxcbiAgZ2V0VXNlclBhc3Nib29rOiAoKSA9PiBgJHt1cmxDb25maWcuYXBpQmFzZVByb3h5KCl9L3VzZXIvdjEvcGFzc2Jvb2tgLFxuICBnZXRTZWFyY2g6KCkgPT4gYCR7dXJsQ29uZmlnLmFwaUJhc2VQdWJsaWMoKX0vcHVibGljQ29udGVudC92MS9zZWFyY2hgLFxuICBnZXRIaWVyYWNoeURldGFpbHM6KGlkZW50aWZpZXIsIGhpZXJhcmNoeVR5cGUpID0+IGAke3VybENvbmZpZy5hcGlCYXNlUHJveHkoKX0vYWN0aW9uL2NvbnRlbnQvdjMvaGllcmFyY2h5LyR7aWRlbnRpZmllcn0/aGllcmFyY2h5VHlwZT0ke2hpZXJhcmNoeVR5cGV9YCxcblxufVxuIl19