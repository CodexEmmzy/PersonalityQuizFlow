export interface PersonalityType {
  type: string;
  title: string;
  description: string;
  keyStrengths: string[];
  growthAreas: string[];
  recommendations: string[];
}

export const results: PersonalityType[] = [
  {
    type: "creative",
    title: "The Creative Visionary",
    description: "You have a natural talent for innovation and thinking outside the box. Your mind constantly generates fresh ideas and unique solutions that others might miss. You thrive in environments that allow freedom for experimentation and value originality.",
    keyStrengths: [
      "Generating innovative ideas and solutions",
      "Seeing connections between seemingly unrelated concepts",
      "Embracing change and new possibilities",
      "Bringing fresh perspectives to challenging problems"
    ],
    growthAreas: [
      "Following through on ideas to completion",
      "Organizing and structuring your creative process",
      "Balancing creativity with practical considerations"
    ],
    recommendations: [
      "Seek roles that value innovation and creative thinking",
      "Partner with detail-oriented people who can help implement your ideas",
      "Use visual tools like mind maps to organize your creative thoughts",
      "Set small, achievable milestones for your creative projects"
    ]
  },
  {
    type: "analytical",
    title: "The Analytical Problem-Solver",
    description: "You excel at logical thinking and careful analysis. Your methodical approach to challenges allows you to break down complex problems into manageable components. You value evidence, data, and rational decision-making over emotional reactions.",
    keyStrengths: [
      "Breaking down complex problems into logical parts",
      "Making decisions based on careful analysis of evidence",
      "Identifying patterns and inconsistencies",
      "Maintaining objectivity when others might be swayed by emotions"
    ],
    growthAreas: [
      "Considering emotional and interpersonal factors in decisions",
      "Avoiding analysis paralysis - knowing when to stop analyzing and act",
      "Communicating complex ideas in accessible ways"
    ],
    recommendations: [
      "Pursue fields that reward systematic thinking and attention to detail",
      "Practice articulating your analytical insights in simplified terms",
      "Set time limits for analysis phases to avoid overthinking",
      "Actively seek diverse perspectives to broaden your analytical framework"
    ]
  },
  {
    type: "social",
    title: "The Empathetic Connector",
    description: "You have a natural talent for understanding people and building relationships. Your empathy and social awareness allow you to connect deeply with others and create harmonious environments. You value cooperation, communication, and mutual support.",
    keyStrengths: [
      "Building and maintaining strong relationships",
      "Understanding others' emotions and perspectives",
      "Creating harmonious group dynamics",
      "Communicating effectively across different personalities"
    ],
    growthAreas: [
      "Setting healthy boundaries when needed",
      "Making decisions that might not please everyone",
      "Taking time for self-care and personal reflection"
    ],
    recommendations: [
      "Consider roles in team leadership, HR, counseling, or community building",
      "Schedule regular alone time for personal reflection",
      "Practice assertive communication techniques",
      "Use your understanding of people to facilitate group discussions and conflict resolution"
    ]
  },
  {
    type: "practical",
    title: "The Practical Achiever",
    description: "You excel at turning ideas into reality with your pragmatic approach to life and work. You value efficiency, reliability, and concrete results over abstract theories. Your grounded perspective helps you create workable solutions to everyday challenges.",
    keyStrengths: [
      "Implementing plans efficiently and effectively",
      "Focusing on tangible outcomes and results",
      "Finding realistic solutions to problems",
      "Staying level-headed during challenges"
    ],
    growthAreas: [
      "Considering long-term possibilities beyond immediate practicalities",
      "Being open to theoretical or abstract concepts",
      "Recognizing when change is necessary despite disruption"
    ],
    recommendations: [
      "Pursue roles that involve project implementation and operational excellence",
      "Challenge yourself to consider 'what if' scenarios occasionally",
      "Partner with visionaries who can complement your practical skills",
      "Use your pragmatic approach to turn abstract ideas into actionable plans"
    ]
  },
  {
    type: "adaptable",
    title: "The Creative Analyst",
    description: "You blend analytical thinking with creative problem-solving. You're detail-oriented yet see the big picture, making you adaptable to various situations. This versatility allows you to thrive in changing environments and connect different domains of knowledge.",
    keyStrengths: [
      "Balancing logical analysis with creative solutions",
      "Adapting quickly to new environments and challenges",
      "Finding connections between seemingly unrelated concepts",
      "Shifting perspective to view problems from multiple angles"
    ],
    growthAreas: [
      "Practicing more consistent follow-through on projects",
      "Developing stronger time management skills",
      "Finding your specialty amid diverse interests"
    ],
    recommendations: [
      "Try structured brainstorming techniques to harness both creative and analytical strengths",
      "Consider roles that require both problem-solving and innovation",
      "Explore time-blocking methods to improve project completion",
      "Use your versatility to bridge communication between different team members"
    ]
  },
  {
    type: "leader",
    title: "The Natural Leader",
    description: "You have an innate ability to inspire and guide others toward shared goals. Your vision, decisiveness, and ability to understand people's strengths make you effective at bringing teams together and accomplishing objectives even in challenging situations.",
    keyStrengths: [
      "Providing clear direction and vision to groups",
      "Making decisions confidently",
      "Motivating others to achieve their potential",
      "Taking responsibility and initiative"
    ],
    growthAreas: [
      "Listening attentively to team input before deciding",
      "Delegating effectively rather than taking on too much",
      "Showing vulnerability when appropriate"
    ],
    recommendations: [
      "Seek leadership positions where you can guide teams and projects",
      "Practice active listening techniques to enhance team communication",
      "Develop a system for regular feedback and team check-ins",
      "Find mentors who can help you refine your leadership approach"
    ]
  }
];
