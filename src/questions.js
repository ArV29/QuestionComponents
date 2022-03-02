const comments = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec ultricies lectus eu risus tristique fermentum.Donec tempus quam non tellus sodales posuere.Nullam pretium mi quis arcu porttitor, elementum volutpat sapien posuere. Fusce lacinia leo ac odio efficitur hendrerit.",
  "Quisque a sem venenatis, congue felis ac, cursus tortor.Nullam quis leo maximus sapien eleifend semper sed nec urna.",
  "Pellentesque a lorem a mauris dapibus accumsanNam non dolor suscipit, ultricies quam venenatis, tristique nulla. Integer eget diam at orci consequat tempus.",
  "Nam quis ipsum ac sapien fermentum venenatis. Praesent porttitor nibh et nulla finibus tincidunt quis mollis leo.",
  "Etiam at velit varius, blandit erat ultricies, interdum turpis. Nam blandit diam ut venenatis finibus.",
  "Vestibulum pulvinar ipsum vitae placerat egestas.",
  "Vivamus venenatis mauris a neque lacinia, id interdum dolor euismod. Donec euismod justo a magna sollicitudin, a tincidunt quam consequat.",
  "Ut blandit purus pretium ante scelerisque, vitae mollis lectus tincidunt.",
  "Fusce mattis lacus vitae nisl consectetur ultricies at a risus. Vivamus sodales enim et est efficitur semper.",
  "Morbi et lectus aliquet, facilisis leo tincidunt, fermentum augue. Proin id ex semper, eleifend libero ut, convallis eros.",
];
const questions = {
  1: {
    id: 1,
    question: "What should I do to keep my personal data safe? ",
    answer:
      "I need help on what all protocols I should follow to keep my personal data safe from scammers and hackers.Is there any way to find out if my data has been leaked?",
    votes: 1000,
    numberOfComments: 50,
    comments: comments,
  },
  2: {
    id: 2,

    question: "Encountered a scammer on OLX",
    answer:
      "While trying to sell goods on OLX I came across a scammer who tried to trick me into paying him via UPI instead  of him paying me.I have his bank details and want to know what could be done with those.",
    votes: 5000,
    numberOfComments: 50,
    comments: comments,
  },
  3: {
    id: 3,

    question: "My Social Media account has been hacked",
    answer:
      "I believe that my social media account has been hacked. I have noticed logins from unknown places and have received OTP’s when even though I never requested for them.What should I do?",
    votes: 2000,
    numberOfComments: 100,
    comments: comments,
  },
  4: {
    id: 4,

    question: "Fraud in online payment, what to do?",
    answer:
      "There is no guaranteed method for payment fraud prevention. By taking certain precautions however, you can minimize the damage they cause and make sure you hav the best chance to thrive despite them.",
    votes: 750,
    numberOfComments: 10,
    comments: comments,
  },
  5: {
    id: 5,

    question: "Helpline number of cybersecurity?",
    answer:
      "cybercrime-chd@nic.in  is the official email address of cyber security cell chandigarh",
    votes: 200,
    numberOfComments: 5,
    comments: comments,
  },
  6: {
    id: 6,

    question: "How can I keep my google history safe?",
    answer:
      "Your Google account is protected both by a password and two-factor authentication if you’ve switched that on (we recommend you do). That should minimize the risk of anyone else being able to log into your Google account and take a peek at what you’ve been searching for.However, if you’re on a computer where you’re regularly logged into Google, your browser has your password saved, and other people(maybe housemates or colleagues) are likely to be wandering past, you might feel like an additional layer of security is required. That’s perhaps why Google has introduced an extra password step just for your search history.Even if someone makes it to your Google account page, they’ll need your password to enter the search history section. You can enable this by going to your Google account page, then clicking Data & personalization, Web & App Activity, Manage activity, and Manage my activity verification.Choose Require extra verification, then click Save.",
    votes: 3200,
    numberOfComments: 21,
    comments: comments,
  },
  7: {
    id: 7,

    question: "Where to report phishing mails?",
    answer:
      "If you receive an e-mail or find a website you think is pretending to be of Income Tax Department, forward the e-mail or website URL to webmanager@incometax.gov.in​​​​​​​​​​​​​​​​​​. A copy may also be forwarded to incident@cert-in.org.in. Or\nOn a computer, go to Gmail. · Open the message. · Next to Reply Reply , click More More . · Click Report phishing.",
    votes: 2000,
    numberOfComments: 34,
    comments: comments,
  },
  8: {
    id: 8,

    question: "Should I allow cookies?",
    answer:
      "s accepting cookies a bad thing? It depends on the website. It depends on who will gain access to your data and what they will do with it, along with whether declining cookies will affect your ability to use that site. Keep in mind not all cookies are the same.Some cookies are placed by first parties like the sites you visit, while others are placed by third parties like advertisers.",
    votes: 230,
    numberOfComments: 17,
    comments: comments,
  },
  9: {
    id: 9,

    question: "How safe is two step verification?",
    answer:
      "he answer is a sure yes. However, it is not foolproof. There should be additional measures to further prevent hackers from infiltrating the user’s accounts.Google offers a set of backup codes that should be kept in a safe place.These backup codes are used to log into Gmail accounts.Facebook and Apple also offer effective backup processes. ",
    votes: 419,
    numberOfComments: 71,
    comments: comments,
  },
};

export default questions;