import { urlConfig } from './url.config';

/**
 * Guards the FRAC endpoint wiring, in particular that the mobile app has its own
 * public mobileApp/kong variants (the protected proxy is unreachable in the
 * mobile webview). See getEntitySearchMobile / getEntityHierarchyMobile.
 */
describe('urlConfig FRAC endpoints', () => {

  it('web FRAC endpoints go through the protected proxy', () => {
    expect(urlConfig.getEntitySearch()).toContain(urlConfig.apiProxy);
    expect(urlConfig.getEntitySearch()).toContain('/entity/v1/search');
    expect(urlConfig.getEntityHierarchy()).toContain(urlConfig.apiProxy);
    expect(urlConfig.getEntityHierarchy()).toContain('/entity/v1/hierarchy');
  });

  it('mobile FRAC endpoints go through the public mobileApp/kong gateway on the mobile host', () => {
    const search = urlConfig.getEntitySearchMobile();
    const hierarchy = urlConfig.getEntityHierarchyMobile();

    expect(search).toBe(`${urlConfig.mobileHost}/apis/public/v8/mobileApp/kong/entity/v1/search`);
    expect(hierarchy).toBe(`${urlConfig.mobileHost}/apis/public/v8/mobileApp/kong/entity/v1/hierarchy`);
  });

  it('mobile FRAC endpoints never point at the protected proxy', () => {
    expect(urlConfig.getEntitySearchMobile()).not.toContain(urlConfig.apiProxy);
    expect(urlConfig.getEntityHierarchyMobile()).not.toContain(urlConfig.apiProxy);
  });
});
