# Getting started

```sh
cd app
npm i
npm start
```

# Technical Assessment - Section Two: Methodology

### How do you test and validate your work to ensure you maintain a high standard of quality?

I really enjoy working in the tech industry. I also think to be curious and keep learning is an essential part of any developer's life. No-one ever knows it all and that's important to remember. I subscribe to various blog and video content creators. When using frameworks or libraries I always research best practice guidelines and tools to work smartly. Both from the communities around them and the authors themselves.

### Name and talk about your preferred use of a version control system. Include describing your forking, branching and cloning strategies.

There is a bunch of Git Hosting Services. I've personally worked on Bitbucket, GitHub and MS Azure Dev Ops. I'm really comfortible on any of those.
<br /><br />
Forking normally involves contibuting to a project, often open source and if you're not part of the dev team. Forking creates a copy of the entire repository for you to make any changes you like. From there you can create a new "Pull Request" for the original repository's authors.
<br /><br />
Branching can depend on the project. Some dev teams prefer new branches to be created for every single task (feature or bug) and some teams (generally smaller teams) just let you create a branch that you use for a while. I prefer the first option. This keeps commits manageable and also helps visibility on what gets done to project owners.
<br /><br />
Cloning repositories I generally just use the terminal using the 'git clone' command. You can however clone spesific directories, branches or something called "shallow cloning". Shallow cloning allows you to stipulate the "depth" of history of commits.

### Describe your optimal Go-Live process.

Go-Live is a big deal especially when deploying a web application expecting a lot of traffic. Business operations and user experience is crucial. Ideally there should have been through testing (functionality and supported browsers) during the development phase - ideally with some automation. Testing should include all fringe-cases, where you actually try to recreate any anomalies that might break the website. This could include resizing browser windows, filling in forms incorrectly with special characters and incorrect information. Slow internet connections should also be tested on different devices.
<br /><br />
After testing, script checks and data migration (if required) needs to be done from the existing environments to the new one. Things like .evn.local variables, database tables and build scripts with correct versions of server software and modules need to all be checked to ensure the web application will build correctly. It’s best to create a checklist for all these steps to ensure nothing gets left out.
<br /><br />
If that all checks out, have a contingency plan in place. Have backups of everything (code, config files and databases) so that in the event of some unforeseen issues, you can revert back to the previous system. You can now go ahead and deploy - preferably using the CI/CD process. Make sure everyone who might need to have input is aware of the deployment and is available if they need to action anything. That’s why typically it’s not a good idea to deploy on a Friday afternoon.
<br /><br />
After deployment, test and monitor the application. Go through key areas on the website, make sure things work as expected. Over the years I’ve seen assets and links still pointing to dev/staging environments causing issues with firewalls and SSL certificates. Depending on the size of the deployment, regression testing can also be done on live (prod).
<br /><br />
If all went well, documentation can be done and some key features signed off if required. Take a moment to admire what you’ve done and then start planning the next feature or task :)

### What frameworks do you prefer and why?

At the moment, React and NextJS. I guess because I know them well but also because I find them easy to work with, powerful and well documented and supported. NextJS is basically “the” React Framework and can be used for backend development as well, as it uses server components that are optionally cached on the server. Many more benefits and features around NextJS, can be discussed in more detail as well.
<br /><br />
Other JS frameworks have included NestJS and Express specifically for API creation.
<br /><br />
I have looked at VueJS, Angular and others, but have not invested much time in them yet. I found Angular very descriptive on how to do things and was aware of some backward compatibility issues when updates came out which made me a bit hesitant to adopt fully. Vue3 was good, but had a smaller community and subsequently less tools and libraries.
<br /><br />
Like I mentioned in my interview, I’ve been around PHP and MySQL (in various forms) for many years as well and can definitely help myself in those systems. I would love to get back into some PHP as I heard it’s changed a lot over the years.
