import perkAnimation1 from '../../images/illustrations/career-1/data.json'
import perkAnimation2 from '../../images/illustrations/career-2/data.json'
import perkAnimation3 from '../../images/illustrations/career-3/data.json'
import perkAnimation4 from '../../images/illustrations/career-4/data.json'


export const content = {
    title : 'Careers',
    subtitle: 'We’re on a mission to change the way that blockchains and decentralized applications are built—making them more secure, sovereign and scalable.',
    text: 'Join our team of leading engineers, researchers and entrepreneurs in pioneering the first modular blockchain design.',
    button: {
        text: 'Current openings',
        url: 'https://jobs.lever.co/celestia'
    },
    perks:{
        title: 'Perks',
        perks: [{
                title: 'Employment benefits',
                image: 'careers/careers-1.svg',
                animation: perkAnimation1
            },{
                title: '4 weeks annual vacation',
                image: 'careers/careers-2.svg',
                animation: perkAnimation2
            },{
                title: 'A share of the initial token supply',
                image: 'careers/careers-3.svg',
                animation: perkAnimation3
            },{
                title: 'Flexible and remote work environment',
                image: 'careers/careers-4.svg',
                animation: perkAnimation4
            }
        ]
    }
}

export const FooterBoxes = [
    {
        title: 'Join our growing community',
        text: 'Be part of our growing community of developers and innovators who are helping build the Celestia network.',
        button: {
            text: 'Help build Celestia',
            href: '/join-our-community',
            id: 'operator',
            type: 'simple'
        }
    },
    {
        title: 'Build on our developer beta',
        text: 'Build on Celestia and be the first to explore the benefits of its novel architecture.',
        button: {
            text: 'Join the waitlist',
            href: '#',
            id: 'developer',
            type: 'modal'
        }
    }
]
