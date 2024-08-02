const commentList = [
    {
      url: "/images/avatars/image-amyrobson.png",
      alt: "amyrobson's profile photo",
      user: "amyrobson",
      you: false,
      date: "1 month ago",
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incledible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      likes: 41,
      replies: [
        {
          url: "/images/avatars/image-ramsesmiron.png",
          alt: "ramsesmiron's profile photo",
          user: "ramsesmiron",
          you: false,
          date: "1 week ago",
          content:
            "@amyrobson thanks for the feedback! I appreciate you pointing out the drag feature. We're actually working on improving it and hope to have an update soon. Glad you like the design and responsiveness!",
          likes: 0,
        },
      ],
    },
    {
      url: "/images/avatars/image-maxblagun.png",
      alt: "maxblagun's profile photo",
      user: "maxblagun",
      you: false,
      date: "2 weeks ago",
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think i want to dive into React as well soon. Perhaps you can give me an insight on where i can learn React? Thanks!",
      likes: 13,
      replies: [
        {
          url: "/images/avatars/image-ramsesmiron.png",
          alt: "ramsesmiron's profile photo",
          user: "ramsesmiron",
          you: false,
          date: "1 week ago",
          content:
            "@maxblagun thanks a lot! I've been coding for about 3 years now, but I've only been diving deep into React for the past year. It's a fantastic library! It's been a steep learning curve, but the flexibility and component-based architecture have made it a joy to work with.",
          likes: 0,
        },
        {
          url: "/images/avatars/image-ramsesmiron.png",
          alt: "ramsesmiron's profile photo",
          user: "ramsesmiron",
          you: false,
          date: "1 week ago",
          content:
            "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          likes: 0,
        },
      ],
    },
]

export default commentList