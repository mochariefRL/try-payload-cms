import { CollectionConfig } from 'payload/types'

const Hero: CollectionConfig = {
    slug: 'hero',
    labels: {
        singular: 'Hero Block',
        plural: 'Hero Blocks',
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea',
            required: true,
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media',
        },
    ]
}

export default Hero