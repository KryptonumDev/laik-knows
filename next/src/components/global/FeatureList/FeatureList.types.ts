import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/CtaButtonRow/CtaButtonRow.types';
import { ImgDataTypes } from '@/components/ui/image';

export type FeatureListTypes = {
  index: number;
  heading: string;
  paragraph: string;
  list: string[];
  imgSm: ImgDataTypes;
  imgLg: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
};
