import { abt } from '../../assest/images/img'

const aboutContent = {
    hero: {
        eyebrow: 'About our soap',
        stitle: 'Everyday',
        highlight: 'soap',
        etitle: 'rituals made effortless.',
        description:
            'Small-batch, plant-powered soap bars crafted for gentle daily care and lasting lather.',
    },
    story: {
        eyebrow: 'Our Journey',
        title1: 'Born from a bar.',
        title2: 'Made for daily comfort.',
        description:
            'It started with a single cold-processed bar and a promise to make soap that is thoughtful, effective, and kind to skin.',
        statValue: '12',
        statLabel: 'curated botanical ingredients',
    },
    mission: {
        eyebrow: 'Our Mission',
        title: 'Simple ingredients, honest care.',
        description:
            'We craft cold-processed soap bars using sustainably sourced oils and botanical extracts to deliver gentle, effective cleansing.',
    },
    values: {
        eyebrow: 'Our Values',
        title: 'How we make soap',
        description: 'Thoughtful sourcing, minimal fuss, and bars that perform—soft lather, balanced scents, and skin-first formulas.',
        items: [
            {
                number: '01',
                title: 'Full ingredient clarity',
                text: 'Complete ingredient lists and sourcing notes for every bar.',
            },
            {
                number: '02',
                title: 'Minimal formulas',
                text: 'We prioritize ingredients that work well together without unnecessary additives.',
            },
            {
                number: '03',
                title: 'Hand-finished quality',
                text: 'Small-batch production and thoughtful finishing for lasting bars.',
            },
        ],
    },
    impact: {
        eyebrow: 'Our Impact',
        title: 'Thoughtful ingredients. Cleaner routines.',
        stats: [
            { value: '24K', label: 'bars crafted' },
            { value: '38', label: 'small-batch partners' },
            { value: '1', label: 'shared planet initiative' },
            { value: '92%', label: 'reusable or recycled packaging' },
        ],
    },
    journal: {
        eyebrow: 'Soap Journal',
        title: 'Notes on soap, ingredients, and rituals.',
        description: 'Short reads about botanicals, bar profiles, and simple ways to elevate everyday care.',
    },
    blog: [
        {
            image: abt,
            title: 'Neem Grove',
            description: 'A gentle, herb-forward bar with cooling neem and soft lather.',
        },
        {
            title: 'Aloe Morning',
            description: 'A hydrating bar with aloe and bright citrus top notes.',
        },
        {
            title: 'Golden Ritual',
            description: 'A warm, spice-forward bar with turmeric and grounding oils.',
        },
    ],
}

export default aboutContent
export { aboutContent }
