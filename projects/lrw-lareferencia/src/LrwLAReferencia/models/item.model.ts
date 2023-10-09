export interface Item {
  id?:           string;
  uuid?:         string;
  name?:         string;
  handle?:       string;
  metadata?:     { [key: string]: Metadatum[] };
  inArchive?:    boolean;
  discoverable?: boolean;
  withdrawn?:    boolean;
  lastModified?: Date;
  entityType?:   string;
  type?:         string;
  _links?:       Links;
}

export interface Links {
  accessStatus?:      link;
  bundles?:           link;
  identifiers?:       link;
  mappedCollections?: link;
  owningCollection?:  link;
  relationships?:     link;
  version?:           link;
  templateItemOf?:    link;
  thumbnail?:         link;
  self?:              link;
}

export interface link {
  href?: string;
}

export interface Metadatum {
  value?:      string;
  language?:   null | string;
  authority?:  null | string;
  confidence?: number;
  place?:      number;
}
