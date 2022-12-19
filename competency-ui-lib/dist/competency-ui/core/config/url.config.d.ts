/**
 * urlConfig to return the api url
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export declare const urlConfig: {
    host: string;
    apiSlug: string;
    apiProxy: string;
    apiBasePath: () => string;
    apiBaseProxy: () => string;
    getEntityById: (id: number) => string;
    getAllEntity: () => string;
    getUserPassbook: () => string;
};
