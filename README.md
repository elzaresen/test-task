# A test task for EVOTYM client


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Hello! Here are the answers to the questions provided

### PWA Experience:

- **Q: Describe any experience you have with developing Progressive Web Applications (PWAs).**

- A: Recently I've created a PWA that utilized user's phone camera to scan tickets QR codes at a concert.

- **Discuss your conclusions, including the pros and cons of using PWAs.**

- A: PWAs are great to hide browser's interface, they can be installed as apps. has access to device hardware (as long there is a browser API for that). Cons: still a browser,

### Supabase Experience:

- **Q: Detail any experience you have working with Supabase.**
- A: I have a little experience using it as a prototyping tool for the recent project I had. I found it quite dev friendly

- **Q: Share your thoughts on the advantages and disadvantages of using Supabase in web development projects.**
- A: It allows developers not to worry about backend setting and deployment.  Some does Firebase, but it's open-source. Great tool for small and middle projects. Not sure how it scales to larger projects though. The only disadvantage I can think of now is that you still don't *own* the backend. If someone in supabase flops, your entire database may be leaked. But same may happen to a self-hosted solutions. It really depends on the "flop percentage", which is still high with self-hosted solutions.

### Security with Supabase:

- **Q: Explain how you manage security when working with Supabase.**
- A: At a base, supabase of course has built-in security solutions. One of them is Row-Level Security. Also it's important to secure data per userrole. Supabase itself has a bunch of them. Also, you need to be careful when setting secrets and API keys, so they remain only server side (use environment variales, and in NextJS 14 avoid naming them as ```NEXT_PUBLIC_```). 

- **Q: Describe the strategies you employ to ensure that only authorized users can access certain data.**
- A: You can create a policy that restricts a particular data to "authenticated" user

### Offline Support in PWAs:

- **Q: Have you implemented offline support in PWA applications using React Query and PWA features?  If so, describe your approach and the challenges you faced.**
- A: No, but I'm familiar with technology


### PS: About the project

Is project written entirely using Styled Components? Is it possible to switch to for ex. tailwind? It's a bit challenging using styled-components if you want to use Next's server components