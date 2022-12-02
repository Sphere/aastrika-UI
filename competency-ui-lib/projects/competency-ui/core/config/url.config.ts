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
  apiBasePath: () => `${urlConfig.host}${urlConfig.apiSlug}`,
  apiBaseProxy:() => `${urlConfig.host}${urlConfig.apiProxy}`,
  getEntityById: (id:number) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`,
  getAllEntity: () => `${urlConfig.apiBasePath()}/entityCompetency/getAllEntity`,
  getUserPassbook: () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`,
}