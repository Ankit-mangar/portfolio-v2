type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  spotify?: {
    playlistId: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    spotify: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: '',
    fullName: 'Ankit Thapa',
    email: 'ankit.thapa10121998@gmail.com',
  },
  spotify: {
    playlistId: '1oOfr05By9q2D7uBCnqrqb?si=c74ebe6aecfc462b',
  },
  hero: {
    name: 'Ankit Thapa',
    p: ["I'm a full stack developer with a passion for building web applications"],
  },
  contact: {
    p: "Let's Connect",
    h2: 'Get in Touch.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: 'Enter your name',
      },
      email: { span: 'Your Email', placeholder: 'Enter your email address' },
      message: {
        span: 'Your Message',
        placeholder: 'Enter your message',
      },
    },
  },
  sections: {
    about: {
      p: 'About Me',
      h2: 'Who I am.',
      content: `I am an enthusiastic full-stack developer with over 4+ years of experience in web development, specializing in technologies such as React, Angular, Spring Boot, and AWS. My journey in the tech industry has equipped me with the skills necessary to tackle complex challenges and deliver robust solutions. My primary focus has been on building dynamic and responsive web applications that provide seamless user experiences across various devices. I take great pride in my attention to detail and adherence to clean coding practices, which ensures maintainable and scalable codebases.
                My expertise extends to working with RESTful APIs, which are integral to modern web development, allowing for smooth communication between front-end and back-end systems. I am proficient in using Git and GitHub for version control, ensuring efficient collaboration and code management in team environments.
                Additionally, my experience with Agile methodologies has honed my ability to adapt to changing requirements and deliver incremental improvements, fostering a productive and responsive development process. Staying up-to-date with the latest technologies is a priority for me, and I consistently seek opportunities for continuous learning and growth.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'My Writings',
      h2: 'Blog Posts.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with a link to explore further. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
    },
    spotify: {
      p: 'Listen',
      h2: 'Spotify Playlist.',
    },
  },
};
