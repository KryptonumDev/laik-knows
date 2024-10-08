import { defineField, defineType } from 'sanity'

const title = 'Uczestniczki'
const icon = () => '👸'

export default defineType({
  name: 'Participant_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagram',
      type: 'object',
      title: 'Instagram',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'url',
          type: 'url',
          title: 'Link do konta',
          validation: (Rule) =>
            Rule.required()
              .uri({ scheme: ['https'] })
              .error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
        }),
        defineField({
          name: 'username',
          type: 'string',
          title: 'Nazwa użytkownika',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'review',
      type: 'object',
      title: 'Recenzja',
      fields: [
        defineField({
          name: 'visible',
          type: 'boolean',
          title: 'Czy recencja widoczna?',
          description: 'Zaznacz, jeśli recenzja ma być widoczna na stronie.',
          validation: (Rule) => Rule.required(),
          initialValue: false,
        }),
        defineField({
          name: 'content',
          type: 'markdown',
          title: 'Recenzja',
          hidden: ({ parent }) => !parent?.visible,
          validation: (Rule) =>
            Rule.custom((content, context) => {
              if ((context.parent as { visible: boolean })?.visible && !content) {
                return 'Recenzja jest wymagana jeśli jest widoczna.'
              }
              return true
            }),
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'string',
      title: 'ID Wideo (Opcjonalne)',
      description:
        'Wideo pokazuje się po kliknięciu na zdjęcie kursantki. (Wideo powinno mieć proporcje 9:16)',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      instagramUsername: 'instagram.username',
      image: 'image',
    },
    prepare: ({ name, instagramUsername, image }) => {
      return {
        title: name,
        subtitle: instagramUsername,
        media: image,
      }
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
