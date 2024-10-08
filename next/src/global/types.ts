export type FormStatusTypes = {
  sending: boolean;
  success: boolean | undefined;
};

export type CourseDataTypes = {
  fullPrice: number;
  discountPrice: number;
  smallestPrice: number;
  saleFinishDate: string;
};

export type ContactFormTypes = { heading: string; paragraph?: string; cta: string };
