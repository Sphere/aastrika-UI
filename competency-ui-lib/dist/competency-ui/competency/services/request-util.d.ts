export declare class RequestUtil {
    formatedActivities: (data: any) => any;
    formatedActivitityByPostion: (data: any) => any[];
    formatedActivitityByRoleId: (data: any) => any[];
    formatedCompetency: (data: any) => any[];
    /**
   * util method to formate the gained competency
   * for user
   */
    formatedGainedCompetency(entity: any, passbook: any): any[];
    acquiredPassbookLogs(acquiredDetails: any): any[];
    acauiredChannelColourCode(acquiredDetails: any): {
        'color': string;
        'displayLevel': number;
        'selected': boolean;
    }[];
}
