import Typography from '@mui/material/Typography';
const AboutPage: React.FC = () => (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <Typography gutterBottom variant="h4">
            General Info
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            SWAPI: Return of the Jedi is the newest iteration of the Star Wars
            API. I've built it from the ground up independently. The only thing
            I used from a previous implementation is the json data, which I've
            since heavily modified and added onto. This new version is built
            using modern technologies and is designed to be more scalable,
            maintainable, and user-friendly than its predecessor.
        </Typography>

        <Typography gutterBottom variant="h4">
            Technologies Used
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            The front-end of the application is built in React with Typescript
            and MaterialUI, while the back-end is built in FastAPI with Python,
            coupled with a SQLite database. This application is containerized
            with Docker and deployed to AWS. For front-end testing I use
            Cypress, and for backend testing I use PyTest.
        </Typography>

        <Typography gutterBottom variant="h4">
            Why I built another SWAPI app
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            A long time ago, in a galaxy actually pretty much the same as this
            one, I was given a take home assignment for a job interview. The
            task was to create a front-end for (the original) SWAPI, with
            certain functionality. During the completion of that task, I
            encountered some API behavior I found rather frustrating. Over the
            years, I made small updates to that front-end as a portfolio
            project, migrating to the newer swapi.tech . After being laid off
            twice in 2024 (ouch, bummer I know) I attacked that front-end applet
            with a renewed vigor - I needed some solid work in my portfolio.
            While plugging away at the front end and trying to design around the
            api behavior I disagreed with, it dawned on me. Why not recreate the
            API itself? You are a full-stack developer afterall,it really only
            makes sense. And here I am, almost a year later with that darlind
            project of mine in open beta.
        </Typography>

        <Typography gutterBottom variant="h4">
            What about swapi.tech?
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            swapi.tech is still available, and I hope always will be. Preferring
            to work with a JS API, monolitic architecture, or the known
            stability/history of the application are all good reasons to
            continue using it. Without Swapi.tech and all the work that Ryan
            Curtis did, my own application wouldn't exist. To him I owe both my
            gratitude and appreciation.
        </Typography>

        <Typography gutterBottom variant="h4">
            Thank you / credit due
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            A large thank you to Paul Hallett, the creator of the original SWAPI
            we've all used over the years. A larger thank you still to Ryan
            Curtis, the creator of SWAPI:A New Hope, who kept the API alive and
            well after the old site went down.
        </Typography>

        <Typography gutterBottom variant="h4">
            About Me
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
            I'm Tyren Rhinehart, a full-stack software engineer.Professionally,
            I've worked the last 6 years building web and mobile applications
            for a diverse set of clients including startups, law enforcement,
            enterprise businesses,schools,scientific organizations, and more.
            After a year of studying and working on portfolio projects, I am
            once again on the hunt for a job. If you have any leads please
            contact me! In my free time I enjoy music, martial arts, cars, my
            dog, and all things nerdy.
        </Typography>
    </div>
);
export default AboutPage;
