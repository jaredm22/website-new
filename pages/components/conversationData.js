const conversations = [
    {   
        conversationId: 0,
        name: "Jared Min",
        description: "",
        initials: "JM",
        clicked: true,
        numMessages: 7,
        lastSentMessageIndex: 5,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "My name is Jared and I'm a software developer."},
            {sent: false, message: "I built this website as a place where people could come learn more about me. It mimics the Apple iMessage app in both (basic) functionality and look, so feel free to try and type a message."},
            {sent: true, message: "Very cool. Anything I need to know about navigating the site?"},
            {sent: false, message: "Nope! If you are a MacOS user than you should be pretty familiar with this site already. If not then kudos to you for not spending 4.8 gazillion on the new Macbook Pro. But the site basically functions like any other site, where each of the conversations essentially equates to a tab. So just click between the different tabs to learn about what you're looking for."},
            {sent: true, message: "Awesome! I'll check it out."},
            {sent: false, message: "Cool beans."}
        ]
    },
    {   
        conversationId: 1,
        name: "About Me",
        description: "Learn more about me!",
        initials: "AM",
        clicked: false,
        numMessages: 3,
        lastSentMessageIndex: -1,
        messages: [
            {sent: false, message: "Hey there, thanks for stopping by. What would you like to know about me?"},
            {sent: true, message: "Where are you from?"},
            {sent: false, message: "Hi! Welcome to my website."}
        ]
    },
    {   
        conversationId: 2,
        name: "About This Website",
        description: "Learn a bit about this site",
        initials: "AM",
        clicked: false,
        numMessages: 6,
        lastSentMessageIndex: 4,
        messages: [
            {sent: false, message: "Thanks again for stopping by. What would you like to know about the site?"},
            {sent: true, message: "What was the inspiration behind the design?"},
            {sent: false, message: "I've always appreciated the design of Apple products, and when I first started to learn how to code my very first idea for a personal project was to build an iMessage like app where I could talk about myself in almost a conversation-like manner (I've been told I'm a good texter). I did succeed in building what I envisioned, only about 12x uglier than I wanted. So thankfully I've burned the source code for that. The second iteration of my website was one that mimicked not only iMessage but other MacOS apps like Spotify as well (https://jaredmin.netlify.app/). Unfortunately, trying to turn a desktop clone into a mobile app wasn't as easy as I envisioned so I had to scrap that too. The link is above though if you'd like to check that out."},
            {sent: false, message: "As I've gotten better at programming my personal goal has always been to get to the point where I could build the iMessage personal site that I've always wanted. And this is that site. So I hope you like it!"},
            {sent: true, message: "That's really neat. What did you use to build the site?"},
            {sent: false, message: "I built the site using ReactJS and a lot of blood sweat and tears. Just kidding. Just Javascript. Which I guess does cause some tears on occasion."},

        ]
    },
    {   
        conversationId: 3,
        name: "Projects",
        description: "Check out my projects!",
        initials: "P",
        clicked: false,
        numMessages: 4,
        lastSentMessageIndex: -1,
        messages: [
            {sent: false, message: "RPOD Tracker", image: "RPOD"},
            {sent: false, message: "RPOD Tracker"},
            {sent: false, message: "This is an app I made for my friends. An RPOD is a random player of the day, which is any player from any sport that we deem to be 'random'. What exactly does it mean to be random? We're not sure. Which is the purpose of this app. To vote on players and try and find what players we think are random, then eventually do some data analysis and figure out the numbers behind a 'random' player. Will that actually happen? Not sure. But the app is fun."},
            {sent: false, message: "The app was built using ReactJS, with a backend built using ExpressJS, and MongoDB."},
            
        ]
    },
    {   
        conversationId: 4,
        name: "Contact Me",
        description: "In case you'd like to reach out",
        initials: "CM",
        clicked: false,
        numMessages: 3,
        lastSentMessageIndex: -1,
        messages: [
            {sent: false, message: ""},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."}
        ]
    }
]

export default conversations