import faker from "faker";
const bigList = [...Array(5000)].map(() => 
(
    {
        name: faker.name.findName(),
        email: faker.internet.email(),

        avatar: faker.internet.avatar()
    }
));