import {
  neem,
  alovera,
  abthero,
  cta,
  tulsi,
  mint,
  turmeric,
} from '../../assest/images/img';

const homePage = {
  hero: {
    eyebrow: 'Handmade Soaps',
    title: 'Simple soaps inspired  by everyday nature.',
    description:
      'Small-batch soap made with simple plant ingredients: Neem, Aloe Vera, Turmeric, and more. Each bar gives a gentle lather, a light natural scent, and is made for everyday care.',
    buttonText: 'Shop the collection',
    backgroundVideo: '/videos/organic-video.mp4',
  },

  category: [
    { id: 'neem', name: 'Neem', image: neem, className: 'bg-green-100 text-green-900' },
    { id: 'aloe', name: 'Tulsi', image: tulsi, className: 'bg-emerald-100 text-emerald-900' },
    { id: 'turmeric', name: 'Aloe Vera', image: alovera, className: 'bg-yellow-100 text-yellow-900' },
    { id: 'coffee', name: 'Mint', image: mint, className: 'bg-amber-100 text-amber-900' },
    { id: 'oat', name: 'Turmeric', image: turmeric, className: 'bg-orange-100 text-orange-900' },
  ],

  about: {
    label: 'Handmade in small batches',
    heading: 'Simple ingredients. Gentle results.',
    description:
      'We make small batches that highlight one main ingredient. From the fresh feel of Aloe Vera to the warm touch of Turmeric, each bar shows its texture and scent and is made for simple daily care.',
    badge: 'Rooted from nature',
    details: [
      {
        number: '01',
        title: 'Neem Grove',
        text: 'Earthy and grounded—rooted in traditional care and everyday use.',
      },
      {
        number: '02',
        title: 'Aloe Morning',
        text: 'Fresh and light—made for gentle daily routines.',
      },
      {
        number: '03',
        title: 'Golden Turmeric',
        text: 'Warm and calm—inspired by traditional beauty rituals.',
      },
    ],
  },

  values: {
    label: 'Our values',
    heading: 'How we make things',
    buttonText: 'Learn more',
    items: [
      {
        title: 'Ritual',
        description: 'Slow, thoughtful daily care.',
      },
      {
        title: 'Gathering',
        description: 'Ingredients chosen with care.',
      },
      {
        title: 'Makers',
        description: 'Small teams crafting each bar.',
      },
      {
        image: abthero,
        title: 'Simplicity',
        description: 'Straightforward ingredients, honest labels.',
      },
    ],
  },

  stats: {
    label: 'By the numbers',
    heading: 'Small scale. Big care.',
    items: [
      { value: '24K', label: 'trees supported' },
      { value: '38', label: 'maker partners' },
      { value: '1', label: 'shared planet' },
      { value: '92%', label: 'reusable packing' },
    ],
    backgroundImage: abthero,
  },

  contact: {
    title: 'Find a bar you love',
    description:
      'Discover small-batch soaps made with clear, simple ingredients and soft natural scents. Choose a bar that fits your daily routine.',
    buttonText: 'Shop now',
    backgroundImage: cta,
  },
};

export default homePage;
