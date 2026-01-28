import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TMessage, TAIChatProps } from '../../types';

const AIChat: React.FC<TAIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<TMessage[]>([
    {
      role: 'assistant',
      content: "Neural links established. I am Ankit's AI Assistant. What data do you require?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rule-based chatbot fallback (works without API)
  const getRuleBasedResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // Contact information
    if (input.match(/(email|contact|reach|get in touch|phone|whatsapp|number)/)) {
      return `You can contact Ankit through:
📧 Email: ankit.thapa10121998@gmail.com
📱 Phone/WhatsApp: +91 8617015319
💬 WhatsApp: https://api.whatsapp.com/send/?phone=%2B918617015319&text=Hello+Ankit
📝 Or use the contact form on this website!`;
    }

    // Social media
    if (input.match(/(linkedin|github|instagram|telegram|medium|social|profile)/)) {
      return `Here are Ankit's social media profiles:
🔗 LinkedIn: http://www.linkedin.com/in/ankit-thapa
💻 GitHub: https://github.com/Ankit-mangar/
📸 Instagram: https://www.instagram.com/ankit_mangar
✈️ Telegram: https://t.me/Craazyyyyy
✍️ Medium/Blog: https://medium.com/@ankit.thapa10121998`;
    }

    // Skills
    if (input.match(/(skill|technology|tech|framework|language|stack|what.*know|expertise)/)) {
      return `Ankit's Technical Skills:

Frontend: React.js, Angular, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Material UI, Bootstrap, Angular Material, Redux Toolkit, NgRx, Tanstack, Three.js

Backend: Spring Boot (Java), Node.js, RESTful APIs, Microservices Architecture

Database: MongoDB, SQL

Cloud & DevOps: AWS (Amazon Web Services), Docker

Tools: Git, GitHub, GitLab, Figma, ES6+ Standards, Test-Driven Development (TDD), Agile Methodology`;
    }

    // Experience
    if (input.match(/(experience|work|job|company|roche|thinkitive|where.*work|current.*job)/)) {
      return `Ankit's Work Experience:

1. Full Stack Developer at Roche (October 2024 - Present)
   • Created comprehensive API documentation
   • Optimized high-traffic websites and handled cross-browser compatibility
   • Managed source code using GitHub and GitLab
   • Conducted technical interviews and client communication

2. Full Stack Developer at Thinkitive Technologies (July 2021 - October 2024)
   • Led software development for Project Management and Healthcare domains
   • Managed a team of 6 members using Agile methodology
   • Developed applications using React.js, Angular, Spring Boot
   • Built scalable backend systems with microservices architecture`;
    }

    // Projects
    if (input.match(/(project|work.*on|built|developed|portfolio|what.*build)/)) {
      return `Ankit has worked on several projects:

1. Navify Clinical Hub - Large-scale clinical platform for oncology teams (React, Spring Boot, NX, Module Federation, TypeScript)

2. NodMd - Telehealth platform for specialist treatment (Angular, Spring Boot, Bootstrap, Twilio) - https://www.nodmd.com/

3. Wazo - Real Estate portfolio management platform (Angular, Spring Boot, Bootstrap) - https://wazotechnology.com/en/home

4. Restore - Healthcare therapy services platform (React, Spring Boot, Material UI) - https://anewhealthcare-provider.production-insights.restoreskills.com/

5. Mind Clinic - Mental health support platform (React, Spring Boot, Zoom Integration) - https://emr.mind.clinic/`;
    }

    // About
    if (input.match(/(about|who.*is|tell.*about|background|introduction)/)) {
      return `Ankit Thapa is a Full Stack Developer with over 4+ years of experience in web development. He specializes in React, Angular, Spring Boot, and AWS.

He focuses on building dynamic and responsive web applications with seamless user experiences. Ankit is proficient in RESTful APIs, Git/GitHub, and Agile methodologies. He takes pride in clean coding practices and staying updated with the latest technologies.`;
    }

    // CV/Resume
    if (input.match(/(cv|resume|curriculum vitae|download.*cv)/)) {
      return `For Ankit's CV or resume, please contact him directly:
📧 Email: ankit.thapa10121998@gmail.com
📱 WhatsApp: +91 8617015319
📝 Or use the contact form on this website`;
    }

    // Blog
    if (input.match(/(blog|article|write|medium|post)/)) {
      return `Ankit writes blog posts on Medium! You can find his articles at:
✍️ Medium Profile: https://medium.com/@ankit.thapa10121998

You can also check out the Blog section on this portfolio website to see his latest posts.`;
    }

    // Default response
    return `I can help you learn about Ankit's:
• Skills and technologies
• Work experience
• Projects
• Contact information
• Social media profiles
• Blog posts

Try asking about any of these topics! For specific questions, you can contact Ankit directly at ankit.thapa10121998@gmail.com or +91 8617015319.`;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: TMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check if API key exists - if not, use rule-based chatbot directly
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    // If no API key, use rule-based chatbot directly
    if (!apiKey) {
      const response = getRuleBasedResponse(userMessage.content);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response,
        },
      ]);
      setIsLoading(false);
      return;
    }

    // Try API only if key exists
    try {
      // System prompt for Gemini
      const systemPrompt = `You are Ankit Thapa's Personal AI Assistant. You help visitors learn everything about Ankit's professional background, personal information, contact details, and portfolio.

PERSONAL INFORMATION:
- Full Name: Ankit Thapa
- Email: ankit.thapa10121998@gmail.com
- Phone Number: +91 8617015319
- Profession: Full Stack Developer
- Location: Based on email domain and phone code, appears to be in India

CONTACT INFORMATION:
- Email: ankit.thapa10121998@gmail.com
- Phone/WhatsApp: +91 8617015319

SOCIAL MEDIA & LINKS:
- LinkedIn: http://www.linkedin.com/in/ankit-thapa
- GitHub: https://github.com/Ankit-mangar/
- WhatsApp: https://api.whatsapp.com/send/?phone=%2B918617015319&text=Hello+Ankit
- Telegram: https://t.me/Craazyyyyy (Username: @Craazyyyyy)
- Instagram: https://www.instagram.com/ankit_mangar (Username: @ankit_mangar)
- Medium/Blog: https://medium.com/@ankit.thapa10121998 (Username: @ankit.thapa10121998)

BLOG & WRITINGS:
- Ankit writes blog posts on Medium
- Medium Profile: https://medium.com/@ankit.thapa10121998
- Blog posts are available on the portfolio website under the "Blog" section
- You can find his latest articles and technical writings there

TECHNICAL SKILLS:
Frontend Technologies:
- React.js, Angular, Next.js
- TypeScript, JavaScript
- HTML, CSS
- Tailwind CSS, Material UI, Bootstrap, Angular Material
- Redux Toolkit, NgRx, Tanstack
- Three.js

Backend Technologies:
- Spring Boot (Java)
- Node.js
- RESTful APIs
- Microservices Architecture

Database:
- MongoDB
- SQL

Cloud & DevOps:
- AWS (Amazon Web Services)
- Docker

Tools & Others:
- Git, GitHub, GitLab
- Figma
- ES6+ Standards
- Test-Driven Development (TDD)
- Agile Methodology

PROFESSIONAL EXPERIENCE:

1. Full Stack Developer at Roche
   - Period: October 2024 - Present
   - Key Responsibilities:
     * Created clear and comprehensive API documentation with user-friendly communication of technical concepts
     * Handled challenging cross-browser compatibility issues and optimized high-traffic websites
     * Implemented performance testing, debugging, and common component libraries
     * Managed source code using GitHub and GitLab for version control
     * Responsible for bug fixes, feature enhancements, and continuous improvements
     * Proficient in client communication and conducting technical interviews
     * Troubleshooting complex issues with strong management skills
     * Fostering collaborative team environments

2. Full Stack Developer at Thinkitive Technologies Pvt. Ltd.
   - Period: July 2021 - October 2024
   - Key Responsibilities:
     * Led full lifecycle software development for Project Management and Healthcare domains using Agile methodology
     * Managed project estimation, scheduling, and successfully led a dynamic team of 6 members
     * Developed responsive single-page applications using React.js, Angular, Redux, NgRx, Tanstack, TypeScript
     * Used modern UI frameworks (Bootstrap, Material UI, Angular Material) with ES6+ standards
     * Built scalable backend systems using Java Spring Boot
     * Implemented RESTful APIs, CRUD operations, and microservices architecture
     * Used Gateway and Feign Client for distributed systems
     * Established clear development standards and procedures for both frontend and backend
     * Ensured code quality through Test-Driven Development (TDD) and comprehensive code reviews

PROJECTS:

1. Navify Clinical Hub
   - Description: Large-scale clinical platform used by oncology teams to access consolidated patient data and support critical decision-making workflows
   - Technologies: React, Spring Boot, NX, Module Federation, TypeScript
   - Note: This is a current project at Roche

2. NodMd
   - Description: A telehealth platform designed by specialists to treat patients wherever they are. Brings specialist treatment to critical access hospitals, skilled nursing facilities, post-acute rehab centers, and directly to patient's home
   - Technologies: Angular, Spring Boot, Bootstrap, Twilio, Payment Gateway
   - Website: https://www.nodmd.com/

3. Wazo
   - Description: A platform for landlords, owners, and tenants to map and manage their properties. Helps manage Real Estate portfolios. Allows users to store and access all required documents related to Building, Apartments, Tenants, and Billing information. Also allows creating Leases for Tenants and managing properties accordingly
   - Technologies: Angular, Spring Boot, Bootstrap
   - Website: https://wazotechnology.com/en/home

4. Restore
   - Description: A healthcare project focused on therapy services, aimed at aiding individuals in their recovery from injuries or surgeries. Offers personalized rehabilitation programs delivered by expert therapists, accessible at hospitals, rehabilitation centers, or even at home. Through teletherapy solutions and a network of skilled professionals, Restore facilitates seamless healing journeys
   - Technologies: React, Spring Boot, Material UI
   - Website: https://anewhealthcare-provider.production-insights.restoreskills.com/

5. Mind Clinic
   - Description: Offers accessible mental health support through personalized counseling and therapy sessions. Connects individuals with licensed professionals for tailored care, fostering emotional resilience and well-being
   - Technologies: React, Spring Boot, Zoom Integration
   - Website: https://emr.mind.clinic/

ABOUT ANKIT:
Ankit is an enthusiastic full-stack developer with over 4+ years of experience in web development, specializing in technologies such as React, Angular, Spring Boot, and AWS. His journey in the tech industry has equipped him with the skills necessary to tackle complex challenges and deliver robust solutions. His primary focus has been on building dynamic and responsive web applications that provide seamless user experiences across various devices. He takes great pride in his attention to detail and adherence to clean coding practices, which ensures maintainable and scalable codebases.

His expertise extends to working with RESTful APIs, which are integral to modern web development, allowing for smooth communication between front-end and back-end systems. He is proficient in using Git and GitHub for version control, ensuring efficient collaboration and code management in team environments. Additionally, his experience with Agile methodologies has honed his ability to adapt to changing requirements and deliver incremental improvements, fostering a productive and responsive development process. Staying up-to-date with the latest technologies is a priority for him, and he consistently seeks opportunities for continuous learning and growth.

CV/RESUME:
- For CV or resume requests, direct visitors to contact Ankit directly via email (ankit.thapa10121998@gmail.com) or through the contact form on the portfolio website

INSTRUCTIONS:
- Answer all questions about Ankit's experience, skills, projects, contact information, social media, blog, and background in a professional, helpful, and friendly manner
- When providing contact information or social media links, always provide the full URLs
- Keep responses concise and relevant
- If asked about something not in your knowledge (like specific project details not mentioned, exact age, or other personal details not provided), suggest they contact Ankit directly through email or the contact form
- Be enthusiastic and helpful, representing Ankit's professional brand positively`;

      // Convert messages to Gemini format
      const conversationHistory: any[] = [];

      // If this is the first user message, include system prompt as context
      if (messages.length === 1 && messages[0].role === 'assistant') {
        // First interaction - include system prompt
        conversationHistory.push({
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nUser: ${userMessage.content}` }],
        });
      } else {
        // Convert existing messages
        messages.forEach(msg => {
          conversationHistory.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
          });
        });

        // Add current user message with system context if needed
        conversationHistory.push({
          role: 'user',
          parts: [{ text: userMessage.content }],
        });
      }

      // Gemini API call - try multiple models/versions
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      // Try different model/version combinations - using latest models from AI Studio
      const modelConfigs = [
        { model: 'gemini-3-pro-preview', version: 'v1' },
        { model: 'gemini-1.5-flash', version: 'v1' },
        { model: 'gemini-1.5-pro', version: 'v1' },
        { model: 'gemini-pro', version: 'v1' },
      ];

      let response: Response | null = null;

      // Try each configuration until one works
      for (const config of modelConfigs) {
        try {
          response = await fetch(
            `https://generativelanguage.googleapis.com/${config.version}/models/${config.model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contents: conversationHistory,
                generationConfig: {
                  temperature: 0.7,
                  maxOutputTokens: 500,
                },
              }),
            }
          );

          if (response.ok) {
            break; // Success! Exit the loop
          } else {
            response = null; // Reset for next attempt
          }
        } catch (err) {
          continue; // Try next configuration
        }
      }

      // If all attempts failed, use rule-based chatbot instead
      if (!response?.ok) {
        const ruleBasedResponse = getRuleBasedResponse(userMessage.content);
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: ruleBasedResponse,
          },
        ]);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      
      // Extract response from Gemini format
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!responseText) {
        throw new Error('No response from AI');
      }

      const assistantMessage: TMessage = {
        role: 'assistant',
        content: responseText,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error:', error);
      
      // Check for API key errors
      const errorData = error?.errorData || error?.response?.errorData;
      const isApiKeyError = errorData?.error?.reason === 'API_KEY_INVALID' || 
                           errorData?.code === 400 && errorData?.message?.includes('API key');
      
      // Always use rule-based chatbot as fallback when API fails
      const ruleBasedResponse = getRuleBasedResponse(userMessage.content);
      
      // If API key is invalid/expired, mention it but still provide the answer
      const responseMessage = isApiKeyError 
        ? `Note: Your Gemini API key has expired. I'm using my local knowledge base to help you!\n\n${ruleBasedResponse}`
        : ruleBasedResponse;
      
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: responseMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: 'Skills', action: "What are Ankit's technical skills?" },
    { label: 'Experience', action: "Tell me about Ankit's work experience" },
    { label: 'Projects', action: 'What projects has Ankit worked on?' },
  ];

  const handleQuickAction = (action: string) => {
    setInput(action);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="ai-chat-panel border-purple-500/30 rounded-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12v4c0 1.103.897 2 2 2h2v-6H4v-2c0-4.411 3.589-8 8-8s8 3.589 8 8v2h-2v6h2c1.103 0 2-.897 2-2v-4c0-5.514-4.486-10-10-10z" />
                </svg>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold">Ankit's Personal AI</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((message, index) => (
              <motion.div
                key={`message-${index}-${message.content.substring(0, 20)}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-white'
                      : 'bg-[#2d1b69] text-white border border-purple-500/30'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#2d1b69] border border-purple-500/30 p-3 rounded-2xl">
                  <div className="flex gap-2">
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto">
            {quickActions.map(item => (
              <button
                key={item.label}
                onClick={() => handleQuickAction(item.action)}
                className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30 whitespace-nowrap transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-500/20 bg-[#1a0f3d]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#2d1b69] text-white px-4 py-3 rounded-xl border border-purple-500/30 focus:border-purple-400 focus:outline-none transition-all duration-300 placeholder-gray-400 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChat;
