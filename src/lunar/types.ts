export type LunarDate = {
  /**
   * 农历年份
   */
  lunarYear: number;
  /**
   * 农历月份
   */
  lunarMonth: number;
  /**
   * 农历日
   */
  lunarDay: number;
};

/**
 * 时间类型
 */
export type DateType = Date | string;
