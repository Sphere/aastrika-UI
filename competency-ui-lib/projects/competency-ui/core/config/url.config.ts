/**
 * urlConfig to return the api url 
 *
 * @author Aman Kumar Sharma <amankumar.sharma@tarento.com>
 */
export const urlConfig = {
  host: window.location.protocol + "//" + window.location.host || 'https://sphere.aastrika.org',
  mobileHost: 'https://sphere.aastrika.org',
  authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTNHNNVFdjZUZqYkxUWGxiczkzUzk4dmFtODBhdkRPUiJ9.nPOCY0-bVX28iNcxxnYbGpihY3ZzfNwx0-SFCnJwjas`,
  apiSlug: '/apis/protected/v8',
  apiProxy: '/apis/proxies/v8',
  apiPublic: '/apis/public/v8',
  apiBasePath: () => `${urlConfig.host}${urlConfig.apiSlug}`,
  apiBaseProxy:() => `${urlConfig.host}${urlConfig.apiProxy}`,
  apiBasePublic:() => `${urlConfig.host}${urlConfig.apiPublic}`,

  getUserPassbook: () => `${urlConfig.apiBaseProxy()}/user/v1/passbook`,
  getSearch:() => `${urlConfig.apiBasePublic()}/publicSearch/getCourses`,
  getHierachyDetails:(identifier, hierarchyType) => `${urlConfig.apiBaseProxy()}/action/content/v3/hierarchy/${identifier}?hierarchyType=${hierarchyType}`,
  getUserdetailsFromRegistry:(wid: string)=> `${urlConfig.apiBaseProxy()}/api/user/v2/read/${wid}`,
  getContentProgress: (id) => `${urlConfig.apiBaseProxy()}/read/content-progres/${id}`,
  
  getUserPassbookMobile: () => `${urlConfig.mobileHost}/apis/public/v8/mobileApp/kong/user/v1/passbook`,
  getUserdetailsMobile:(wid: string)=> `${urlConfig.mobileHost}/apis/public/v8/mobileApp/kong/user/v2/read/${wid}`,
  getSearchMobile: () => `${urlConfig.mobileHost}${urlConfig.apiPublic}/publicSearch/getCourses`,
  getContentProgressMobile: () => `${urlConfig.mobileHost}/apis/public/v8/mobileApp/kong/course/v1/content/state/read`,
  
  // FRAC service: full Position hierarchy (Roles → Activities → Competencies with levels).
  // Replaces the deprecated static competencyAssets role/competency JSON.
  getEntityHierarchy:() => `${urlConfig.apiBaseProxy()}/entity/v1/hierarchy`,
  // FRAC service: flat entity search. Used to resolve competency code → numeric
  // entityId (the id courses / passbook / progress match on).
  getEntitySearch:() => `${urlConfig.apiBaseProxy()}/entity/v1/search`

}
