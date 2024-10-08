import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja ze szczegółami kursu'
const icon = () => '📑'
const moduleIcon = () => '🎥'

export default defineField({
  name: 'CourseDetails',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: moduleIcon,
          fields: [
            {
              name: 'heading',
              type: 'markdown',
              title: 'Nazwa modułu',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'paragraph',
              type: 'markdown',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'video',
              type: 'file',
              title: 'Plik Wideo',
              options: {
                accept: 'video/mp4',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'showForm',
              type: 'boolean',
              title: 'Formularz widoczny?',
              initialValue: false,
            },
            {
              name: 'form',
              type: 'object',
              title: 'Formularz',
              hidden: ({ parent }) => !parent?.showForm,
              options: { collapsible: true, collapsed: false },
              validation: (Rule) =>
                Rule.custom((form, context) => {
                  return (context as { parent: { showForm: boolean } }).parent.showForm && !form
                    ? 'Wymagane'
                    : true
                }),
              fields: [
                defineField({
                  name: 'heading',
                  type: 'markdown',
                  title: 'Nagłówek formularza',
                  validation: (Rule) => Rule.required(),
                  initialValue: 'Pobierz próbkę, tego co Cię czeka',
                }),
                defineField({
                  name: 'paragraph',
                  type: 'markdown',
                  title: 'Paragraf formularza',
                  validation: (Rule) => Rule.required(),
                  initialValue: 'Pobierz pierwszą lekcję kursową za darmo juz dziś!',
                }),
                defineField({
                  name: 'cta',
                  type: 'string',
                  title: 'Wezwanie do działania - tekst',
                  validation: (Rule) => Rule.required(),
                  initialValue: 'Zapisz się',
                }),
              ],
            },
          ],
          preview: {
            select: {
              icon: 'icon',
              heading: 'heading',
              paragraph: 'paragraph',
            },
            prepare: ({ icon, heading, paragraph }) => ({
              icon,
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      title: 'Lista',
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    }),
    defineField({
      name: 'video',
      type: 'string',
      title: 'ID Wideo (Opcjonalne)',
      description:
        'Wideo pokazuje się po kliknięciu na zdjęcie (Wideo powinno mieć proporcje 9:16)',
    }),
    defineField({
      name: 'cta',
      type: 'fullCtaBox',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({ heading, media }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media,
    }),
  },
})
