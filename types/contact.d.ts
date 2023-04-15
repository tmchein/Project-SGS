export interface MailchimpContact {
  name: string;
  value: Value;
  subHooks: any[];
  hookSource: HookSource;
}

export interface HookSource {
  lineNumber: number;
  functionName: string;
  fileName: string;
  columnNumber: number;
}

export interface Value {
  members: Member[];
  total_items: number;
}

export interface Member {
  id: string;
  email_address: string;
  unique_email_id: string;
  contact_id: string;
  full_name: string;
  web_id: number;
  email_type: EmailType;
  status: Status;
  consents_to_one_to_one_messaging: boolean;
  merge_fields: MergeFieldsClass;
  stats: StatsClass | StatsEnum;
  ip_signup: string;
  timestamp_signup: string;
  ip_opt: IPOpt;
  timestamp_opt: Date;
  member_rating: number;
  last_changed: Date;
  language: string;
  vip: boolean;
  email_client: string;
  location: LocationClass | LocationEnum;
  source: Source;
  tags_count: number;
  tags: any[] | TagsEnum;
  list_id: ListID;
  _links: Link[] | LinksEnum;
}

export interface Link {
  rel: string;
  href: string;
  method: string;
  targetSchema?: string;
  schema?: string;
}

export enum LinksEnum {
  Empty = "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]",
}

export enum EmailType {
  HTML = "html",
}

export enum IPOpt {
  The18123414166 = "181.234.14.166",
  The1812344671 = "181.234.46.71",
}

export enum ListID {
  Aab7D9B7D0 = "aab7d9b7d0",
}

export interface LocationClass {
  latitude: number;
  longitude: number;
  gmtoff: number;
  dstoff: number;
  country_code: string;
  timezone: string;
  region: string;
}

export enum LocationEnum {
  CountryCodeDstoff0Gmtoff0Latitude = '{country_code: "", dstoff: 0, gmtoff: 0, latitude: …}',
}

export interface MergeFieldsClass {
  FNAME: string;
  LNAME: string;
  SR_ID: string;
  VSTR_ATTR: string;
  SR_DATE: string;
  EMAIL_DATE: string;
  VSTR_DATE: string;
  ADDRESS1: string;
  ADDRESS2: string;
  CITY: string;
  ZIP: string;
  STATE: string;
  COUNTRY: string;
  PHONE: string;
  PHONE_DATE: string;
}

export enum Source {
  APIGeneric = "API - Generic",
  Import = "Import",
}

export interface StatsClass {
  avg_open_rate: number;
  avg_click_rate: number;
}

export enum StatsEnum {
  AvgClickRate0AvgOpenRate0 = "{avg_click_rate: 0, avg_open_rate: 0}",
}

export enum Status {
  Subscribed = "subscribed",
}

export enum TagsEnum {
  Empty = "[]",
}
