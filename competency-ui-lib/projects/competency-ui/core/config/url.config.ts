export const urlConfig = {
  // endpoint configs...!
  // host: 'http://localhost:3002',
  host: 'https://sphere.aastrika.org',
  apiSlug: '/apis/protected/v8',
  apiBasePath: () => `${urlConfig.host}${urlConfig.apiSlug}`,
  getEntityById: (id:number) => `${urlConfig.apiBasePath()}/entityCompetency/getEntityById/${id}`,
}