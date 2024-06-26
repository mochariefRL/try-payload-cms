import { CollectionConfig } from 'payload/types'

const TwoColumn: CollectionConfig = {
    slug: 'twoColumn',
    labels: {
        singular: 'Two Column Block',
        plural: 'Two Column Blocks',
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
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            options:[
                {
                    label: 'Default',
                    value: 'default',
                },
                {
                    label: 'Reverse',
                    value: 'reverse',
                }
            ]
        }
    ]
}

export default TwoColumn