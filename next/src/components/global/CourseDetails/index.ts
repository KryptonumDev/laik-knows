import { CourseDataQuery, Email_Query } from '@/global/queries';
import { CtaDataQuery } from '@/components/ui/Button';
import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
import CourseDetails from './CourseDetails';

export default CourseDetails;
export type { CourseDetailsTypes } from './CourseDetails.types';

export const CourseDetails_Query = `
    _type == "CourseDetails" => {
        heading,
        video,
        cta {
            ${CtaDataQuery}
        },
        img {
            ${ImgDataQuery}
        },
        "course": ${CourseDataQuery}
        "email": ${Email_Query}
        list[] {
            heading,
            paragraph,
            video {
            ${VideoDataQuery}
            },
            showForm,
            form {
            heading,
            paragraph,
            cta
            },
        },
    },
`;
