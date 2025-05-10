export interface Option {
  text: string;
  personalityIndicators: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically recharge after a long day?",
    options: [
      {
        text: "Spending time with friends or at social events",
        personalityIndicators: { extrovert: 3, social: 2 }
      },
      {
        text: "Reading a book or enjoying alone time",
        personalityIndicators: { introvert: 3, analytical: 1 }
      },
      {
        text: "A mix of both, depending on my mood",
        personalityIndicators: { adaptable: 3, balanced: 2 }
      },
      {
        text: "Physical activity like exercising or sports",
        personalityIndicators: { energetic: 3, disciplined: 2 }
      }
    ]
  },
  {
    id: 2,
    text: "When making important decisions, you usually:",
    options: [
      {
        text: "Trust your gut feeling and intuition",
        personalityIndicators: { intuitive: 3, creative: 1 }
      },
      {
        text: "Make a pros and cons list and analyze logically",
        personalityIndicators: { analytical: 3, methodical: 2 }
      },
      {
        text: "Ask for advice from people you trust",
        personalityIndicators: { social: 3, cautious: 1 }
      },
      {
        text: "Consider past experiences in similar situations",
        personalityIndicators: { practical: 3, reflective: 2 }
      }
    ]
  },
  {
    id: 3,
    text: "In a group project, you prefer to:",
    options: [
      {
        text: "Take the lead and organize the team",
        personalityIndicators: { leader: 3, organized: 2 }
      },
      {
        text: "Focus on specific tasks that match your expertise",
        personalityIndicators: { specialist: 3, methodical: 1 }
      },
      {
        text: "Adapt to whatever role is needed at the moment",
        personalityIndicators: { adaptable: 3, supportive: 2 }
      },
      {
        text: "Generate ideas and inspire the team",
        personalityIndicators: { creative: 3, visionary: 2 }
      }
    ]
  },
  {
    id: 4,
    text: "When faced with a problem, your first instinct is to:",
    options: [
      {
        text: "Break it down into smaller, manageable parts",
        personalityIndicators: { analytical: 3, methodical: 2 }
      },
      {
        text: "Think outside the box for creative solutions",
        personalityIndicators: { creative: 3, intuitive: 2 }
      },
      {
        text: "Discuss it with others to get different perspectives",
        personalityIndicators: { social: 3, collaborative: 2 }
      },
      {
        text: "Research how others have solved similar problems",
        personalityIndicators: { practical: 3, cautious: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Your ideal weekend would involve:",
    options: [
      {
        text: "Spontaneous adventures and new experiences",
        personalityIndicators: { adventurous: 3, energetic: 2 }
      },
      {
        text: "A planned schedule with activities you enjoy",
        personalityIndicators: { organized: 3, disciplined: 1 }
      },
      {
        text: "Relaxing and recharging at home",
        personalityIndicators: { introvert: 3, reflective: 2 }
      },
      {
        text: "Social gatherings with friends or family",
        personalityIndicators: { extrovert: 3, social: 2 }
      }
    ]
  },
  {
    id: 6,
    text: "When learning something new, you prefer to:",
    options: [
      {
        text: "Follow a step-by-step structured approach",
        personalityIndicators: { methodical: 3, analytical: 1 }
      },
      {
        text: "Dive in and learn through trial and error",
        personalityIndicators: { adventurous: 3, practical: 1 }
      },
      {
        text: "Understand the big picture first, then details",
        personalityIndicators: { visionary: 3, intuitive: 2 }
      },
      {
        text: "Learn alongside others in a collaborative environment",
        personalityIndicators: { social: 3, supportive: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "In a conversation, you are more likely to:",
    options: [
      {
        text: "Listen carefully and speak thoughtfully",
        personalityIndicators: { reflective: 3, introvert: 2 }
      },
      {
        text: "Express your ideas enthusiastically",
        personalityIndicators: { extrovert: 3, energetic: 1 }
      },
      {
        text: "Ask questions to better understand others",
        personalityIndicators: { analytical: 3, curious: 2 }
      },
      {
        text: "Share personal stories and experiences",
        personalityIndicators: { social: 3, creative: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "When under stress, you typically:",
    options: [
      {
        text: "Need alone time to process and recharge",
        personalityIndicators: { introvert: 3, reflective: 2 }
      },
      {
        text: "Talk it through with someone you trust",
        personalityIndicators: { social: 3, extrovert: 1 }
      },
      {
        text: "Make a plan to address the source of stress",
        personalityIndicators: { methodical: 3, disciplined: 2 }
      },
      {
        text: "Distract yourself with activities or exercise",
        personalityIndicators: { energetic: 3, practical: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "Your workspace is usually:",
    options: [
      {
        text: "Organized and tidy with everything in its place",
        personalityIndicators: { organized: 3, methodical: 2 }
      },
      {
        text: "Creative chaos with multiple projects visible",
        personalityIndicators: { creative: 3, adaptable: 1 }
      },
      {
        text: "Functional with only the essentials",
        personalityIndicators: { practical: 3, minimalist: 2 }
      },
      {
        text: "Personalized with items that inspire you",
        personalityIndicators: { intuitive: 3, visionary: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "When working on a project, you value:",
    options: [
      {
        text: "Efficiency and practical results",
        personalityIndicators: { practical: 3, disciplined: 2 }
      },
      {
        text: "Innovation and unique approaches",
        personalityIndicators: { creative: 3, visionary: 2 }
      },
      {
        text: "Thorough analysis and attention to detail",
        personalityIndicators: { analytical: 3, methodical: 2 }
      },
      {
        text: "Collaboration and team harmony",
        personalityIndicators: { social: 3, supportive: 2 }
      }
    ]
  },
  {
    id: 11,
    text: "In terms of future planning, you tend to:",
    options: [
      {
        text: "Have detailed plans with specific goals",
        personalityIndicators: { organized: 3, methodical: 2 }
      },
      {
        text: "Have a general direction but remain flexible",
        personalityIndicators: { adaptable: 3, balanced: 2 }
      },
      {
        text: "Focus on the present more than the future",
        personalityIndicators: { practical: 3, presentFocused: 2 }
      },
      {
        text: "Dream big with ambitious visions",
        personalityIndicators: { visionary: 3, creative: 2 }
      }
    ]
  },
  {
    id: 12,
    text: "You are more motivated by:",
    options: [
      {
        text: "Personal growth and learning",
        personalityIndicators: { reflective: 3, curious: 2 }
      },
      {
        text: "Recognition and achievement",
        personalityIndicators: { leader: 3, disciplined: 1 }
      },
      {
        text: "Making a positive impact on others",
        personalityIndicators: { supportive: 3, social: 2 }
      },
      {
        text: "Creating something innovative",
        personalityIndicators: { creative: 3, visionary: 2 }
      }
    ]
  },
  {
    id: 13,
    text: "When giving feedback, you prefer to be:",
    options: [
      {
        text: "Direct and straightforward",
        personalityIndicators: { practical: 3, leader: 1 }
      },
      {
        text: "Tactful and considerate of feelings",
        personalityIndicators: { supportive: 3, balanced: 2 }
      },
      {
        text: "Detailed and specific with examples",
        personalityIndicators: { analytical: 3, methodical: 2 }
      },
      {
        text: "Encouraging with focus on positives",
        personalityIndicators: { social: 3, optimistic: 2 }
      }
    ]
  },
  {
    id: 14,
    text: "In your free time, you often find yourself:",
    options: [
      {
        text: "Exploring new hobbies and activities",
        personalityIndicators: { curious: 3, adventurous: 2 }
      },
      {
        text: "Deepening knowledge in topics that interest you",
        personalityIndicators: { analytical: 3, specialist: 2 }
      },
      {
        text: "Spending time with friends and family",
        personalityIndicators: { social: 3, extrovert: 1 }
      },
      {
        text: "Relaxing and enjoying quiet activities",
        personalityIndicators: { introvert: 3, reflective: 2 }
      }
    ]
  },
  {
    id: 15,
    text: "When telling a story, you tend to:",
    options: [
      {
        text: "Include vivid details and emotions",
        personalityIndicators: { creative: 3, intuitive: 1 }
      },
      {
        text: "Be concise and get to the point",
        personalityIndicators: { practical: 3, methodical: 1 }
      },
      {
        text: "Emphasize how people were affected",
        personalityIndicators: { social: 3, supportive: 2 }
      },
      {
        text: "Present events in logical sequence",
        personalityIndicators: { analytical: 3, organized: 1 }
      }
    ]
  },
  {
    id: 16,
    text: "You value most in relationships:",
    options: [
      {
        text: "Deep connection and understanding",
        personalityIndicators: { intuitive: 3, reflective: 2 }
      },
      {
        text: "Fun and shared experiences",
        personalityIndicators: { energetic: 3, social: 2 }
      },
      {
        text: "Trust and reliability",
        personalityIndicators: { disciplined: 3, practical: 1 }
      },
      {
        text: "Growth and supporting each other's goals",
        personalityIndicators: { supportive: 3, balanced: 2 }
      }
    ]
  },
  {
    id: 17,
    text: "When something unexpected happens, you:",
    options: [
      {
        text: "Quickly adapt and find a new approach",
        personalityIndicators: { adaptable: 3, practical: 1 }
      },
      {
        text: "Need time to process before responding",
        personalityIndicators: { reflective: 3, analytical: 1 }
      },
      {
        text: "See it as an opportunity for something better",
        personalityIndicators: { optimistic: 3, creative: 1 }
      },
      {
        text: "Look to others for support and ideas",
        personalityIndicators: { social: 3, supportive: 1 }
      }
    ]
  },
  {
    id: 18,
    text: "Your approach to rules is typically to:",
    options: [
      {
        text: "Follow them as they provide structure",
        personalityIndicators: { disciplined: 3, methodical: 2 }
      },
      {
        text: "Question them and suggest improvements",
        personalityIndicators: { creative: 3, curious: 2 }
      },
      {
        text: "Evaluate their purpose and follow selectively",
        personalityIndicators: { analytical: 3, balanced: 2 }
      },
      {
        text: "Consider how they impact people",
        personalityIndicators: { supportive: 3, social: 1 }
      }
    ]
  },
  {
    id: 19,
    text: "In group settings, you usually find yourself:",
    options: [
      {
        text: "Leading the conversation or activities",
        personalityIndicators: { leader: 3, extrovert: 2 }
      },
      {
        text: "Observing and contributing thoughtfully",
        personalityIndicators: { reflective: 3, introvert: 2 }
      },
      {
        text: "Helping ensure everyone feels included",
        personalityIndicators: { supportive: 3, social: 2 }
      },
      {
        text: "Contributing innovative ideas",
        personalityIndicators: { creative: 3, visionary: 1 }
      }
    ]
  },
  {
    id: 20,
    text: "When facing a significant life change, you primarily focus on:",
    options: [
      {
        text: "The opportunities it presents",
        personalityIndicators: { optimistic: 3, adventurous: 2 }
      },
      {
        text: "Creating a plan for the transition",
        personalityIndicators: { organized: 3, methodical: 2 }
      },
      {
        text: "How it will affect you emotionally",
        personalityIndicators: { reflective: 3, intuitive: 2 }
      },
      {
        text: "How it will impact your relationships",
        personalityIndicators: { social: 3, supportive: 1 }
      }
    ]
  }
];
