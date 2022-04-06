const pages = [
    {
        title: 'Home',
        priority: 1,
    },
    {
        title: 'About',
        priority: 5,

    },
    {
        title: 'Services',
        priority: 10,

    },
    {
        title: 'Products',
        priority: 15,

    },
    {
        title: 'Contact',
        priority: 20,

    },
];

const categories = [
    {
        title: 'Nulla fermentum tellus',
        content: 'Curae quis ultrices risus vivamus et nascetur penatibus. Montes consectetur fames et aliquet malesuada adipiscing dictumst tincidunt.',
        Product: {
            create: [
                {
                    title: 'Aenean sagittis elit lorem finibus',
                    content: 'Dictumst ut magnis accumsan nascetur. Libero auctor a curabitur etiam si dui. Interdum libero lacinia mi lacus nulla. Integer dolor nostra habitant id quam. Torquent parturient porta eleifend tortor vitae mauris faucibus ut. Pharetra curabitur feugiat turpis euismod nulla ullamcorper blandit non magnis enim diam.',
                    Image: {
                        create: [
                            {
                                src: 'https://randomwordgenerator.com/img/picture-generator/54e7d7404853a914f1dc8460962e33791c3ad6e04e507440752972d29e4bc3_640.jpg',
                                alt: 'Picture1',
        
                            },
                            {
                                src: 'https://randomwordgenerator.com/img/picture-generator/57e2d54b4853ad14f1dc8460962e33791c3ad6e04e507441722872d7964dc6_640.jpg',
                                alt: 'Picture2',
        
                            }

                        ]
                    }
                }
            ],
        }
    }
]
                
                

module.exports = {
    pages,
    categories,
}