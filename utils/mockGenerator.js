/* 
 * Mock AI Generator
 * This file simulates AI-generated lesson plans until actual API integration
 */

const mockGenerator = {
  // Generate a lesson plan based on user inputs
  generateLessonPlan(theme, ageGroup, skillsFocus, duration, customRequest = "", customTopic = "") {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const plan = this.createMockPlan(theme, ageGroup, skillsFocus, duration, customRequest, customTopic);
        resolve(plan);
      }, 1500); // Simulate 1.5 second API call
    });
  },

  // Create a mock lesson plan from templates
  createMockPlan(theme, ageGroup, skillsFocus, duration, customRequest, customTopic) {
    // Get age-appropriate content
    const ageContent = this.getAgeAppropriateContent(ageGroup);

    // Get templates based on theme
    const themeTemplates = planTemplates.getThemeTemplates(theme);

    // Adjust difficulty based on age
    const difficultyLevel = this.getDifficultyLevel(ageGroup);

    // Determine number of activities based on duration
    const activityCount = this.getActivityCount(duration);

    // Get skill-focused activities
    const activities = this.getActivitiesForSkill(skillsFocus, themeTemplates, activityCount);

    // Consider custom topic if provided
    let effectiveTheme = theme;
    if (customTopic && customTopic.trim() !== "") {
      // Use custom topic in the plan, but still use theme templates as a fallback
      effectiveTheme = customTopic;
    }

    // Consider custom request if provided
    let customizedContent = {};
    if (customRequest && customRequest.trim() !== "") {
      customizedContent = this.customizeForRequest(customRequest, effectiveTheme, skillsFocus);
    }

    // Build final lesson plan
    return {
      theme: customTopic && customTopic.trim() !== "" ? customTopic : theme,
      ageGroup: ageGroup,
      skillsFocus: skillsFocus,
      duration: duration,

      // Circle Time
      circleTime: {
        song: customizedContent.song || themeTemplates.songs[Math.floor(Math.random() * themeTemplates.songs.length)],
        discussion: customizedContent.discussion || themeTemplates.discussionQuestions[Math.floor(Math.random() * themeTemplates.discussionQuestions.length)]
      },

      // Activities
      activities: activities,

      // Closing
      closing: {
        reflection: customizedContent.reflection || themeTemplates.reflectionQuestions[Math.floor(Math.random() * themeTemplates.reflectionQuestions.length)]
      },

      // Resources
      resources: this.getResources(theme, skillsFocus)
    };
  },

  // Get age-appropriate content and language
  getAgeAppropriateContent(ageGroup) {
    switch (ageGroup) {
      case '2-3':
        return {
          vocabulary: 'simple',
          instructions: 'very basic',
          attention: 'short',
          assistance: 'high'
        };
      case '3-4':
        return {
          vocabulary: 'basic',
          instructions: 'simple',
          attention: 'growing',
          assistance: 'moderate'
        };
      case '4-5':
        return {
          vocabulary: 'expanded',
          instructions: 'multi-step',
          attention: 'longer',
          assistance: 'low'
        };
      default:
        return {
          vocabulary: 'basic',
          instructions: 'simple',
          attention: 'moderate',
          assistance: 'moderate'
        };
    }
  },

  // Determine difficulty level based on age
  getDifficultyLevel(ageGroup) {
    switch (ageGroup) {
      case '2-3':return 'basic';
      case '3-4':return 'intermediate';
      case '4-5':return 'advanced';
      default:return 'intermediate';
    }
  },

  // Determine number of activities based on duration
  getActivityCount(duration) {
    switch (duration) {
      case '30 mins':return 1;
      case '1 hour':return 2;
      case 'half day':return 3;
      case 'full day':return 4;
      default:return 2;
    }
  },

  // Get activities focused on specific skills
  getActivitiesForSkill(skillsFocus, themeTemplates, count) {
    const allActivities = themeTemplates.activities.filter((activity) =>
    activity.skills.includes(skillsFocus) || skillsFocus === 'All Skills'
    );

    // If not enough skill-specific activities, add some general ones
    if (allActivities.length < count) {
      const generalActivities = themeTemplates.activities.filter((activity) =>
      !allActivities.includes(activity)
      );
      allActivities.push(...generalActivities);
    }

    // Select random activities from the filtered list
    const selectedActivities = [];
    for (let i = 0; i < count; i++) {
      if (allActivities.length > 0) {
        const randomIndex = Math.floor(Math.random() * allActivities.length);
        selectedActivities.push(allActivities[randomIndex]);
        allActivities.splice(randomIndex, 1); // Remove selected activity to avoid duplicates
      }
    }

    return selectedActivities;
  },

  // Handle custom requests by modifying parts of the lesson plan
  customizeForRequest(request, theme, skillsFocus) {
    const requestLower = request.toLowerCase();
    const customContent = {};

    // Look for specific keywords and customize accordingly
    if (requestLower.includes('dinosaur')) {
      if (requestLower.includes('math')) {
        customContent.song = "Ten Little Dinosaurs Counting Song";
        customContent.discussion = "How many legs did different dinosaurs have?";
        customContent.reflection = "What was your favorite dinosaur counting activity today?";
      } else if (requestLower.includes('science')) {
        customContent.song = "Dinosaur Stomp";
        customContent.discussion = "What did dinosaurs eat?";
        customContent.reflection = "What new fact did you learn about dinosaurs today?";
      }
    }

    return customContent;
  },

  // Get relevant educational resources
  getResources(theme, skillsFocus) {
    return planTemplates.getResources(theme, skillsFocus);
  }
};