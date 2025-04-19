/* 
 * Plan Templates
 * Pre-defined templates and resources for various themes and skills
 */

const planTemplates = {
  // Get templates specific to a theme
  getThemeTemplates(theme) {
    switch (theme) {
      case 'Animals':
        return this.animalsTheme;
      case 'Space':
        return this.spaceTheme;
      case 'Seasons':
        return this.seasonsTheme;
      case 'ABCs':
        return this.abcsTheme;
      case 'Numbers':
        return this.numbersTheme;
      case 'Colors':
        return this.colorsTheme;
      case 'Transportation':
        return this.transportationTheme;
      case 'Feelings':
        return this.feelingsTheme;
      default:
        return this.animalsTheme; // Default to animals if theme not found
    }
  },

  // Get resources based on theme and skill focus
  getResources(theme, skillsFocus) {
    const themeResources = this.resources[theme] || this.resources['General'];
    const skillResources = this.resources[skillsFocus] || [];

    return [...themeResources, ...skillResources];
  },

  // Animals Theme
  animalsTheme: {
    songs: [
    "Old MacDonald Had a Farm",
    "Baby Shark",
    "The Animals on the Bus",
    "Five Little Monkeys",
    "Down in the Jungle"],

    discussionQuestions: [
    "What's your favorite animal?",
    "What sounds do different animals make?",
    "Where do different animals live?",
    "What do animals eat?",
    "Which animals have fur and which have feathers?"],

    reflectionQuestions: [
    "Which animal activity did you enjoy the most today?",
    "What new animal fact did you learn today?",
    "Can you name three animals we talked about today?",
    "Which animal would you like to learn more about next time?"],

    activities: [
    {
      title: "Animal Masks",
      type: "Craft",
      skills: ["Fine Motor Skills", "Creativity"],
      materials: ["Paper plates", "Markers", "Craft sticks", "Elastic", "Safety scissors", "Glue"],
      steps: [
      "Pre-cut eye holes in paper plates",
      "Let children color and decorate to look like their favorite animal",
      "Attach craft stick or elastic to make wearable",
      "Encourage children to act like their animal"]

    },
    {
      title: "Animal Movement Game",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Listening Skills"],
      materials: ["Open space", "Animal picture cards (optional)"],
      steps: [
      "Call out different animals",
      "Children move like that animal (hop like a rabbit, slither like a snake)",
      "For older children, add challenges like 'move like a slow elephant' or 'a fast cheetah'"]

    },
    {
      title: "Animal Habitat Sorting",
      type: "Cognitive Game",
      skills: ["Cognitive Development", "Classification Skills"],
      materials: ["Animal figures or cards", "Construction paper for habitats (blue for water, green for land, etc.)"],
      steps: [
      "Create simple habitat zones with paper",
      "Give children animal figures/cards",
      "Ask them to place animals in correct habitats",
      "Discuss why animals live in different places"]

    },
    {
      title: "Animal Sound Matching",
      type: "Sensory Activity",
      skills: ["Listening Skills", "Memory"],
      materials: ["Audio of animal sounds", "Animal pictures"],
      steps: [
      "Play an animal sound",
      "Children identify the animal",
      "Show the picture to confirm",
      "For older children, let them find the correct picture from a selection"]

    }]

  },

  // Space Theme
  spaceTheme: {
    songs: [
    "Twinkle Twinkle Little Star",
    "Zoom Zoom Zoom, We're Going to the Moon",
    "The Solar System Song",
    "Five Little Astronauts",
    "Rocket Ship Run"],

    discussionQuestions: [
    "What do you see in the night sky?",
    "What would you take on a trip to space?",
    "What do astronauts do?",
    "How would you feel floating in space?",
    "What planets do you know?"],

    reflectionQuestions: [
    "If you could visit one planet, which one would it be?",
    "What was your favorite space activity today?",
    "What's something new you learned about space?"],

    activities: [
    {
      title: "Rocket Ship Craft",
      type: "Craft",
      skills: ["Fine Motor Skills", "Creativity"],
      materials: ["Toilet paper tubes", "Construction paper", "Glue", "Safety scissors", "Star stickers"],
      steps: [
      "Cover toilet paper tube with paper",
      "Cut out triangle for rocket top",
      "Cut out flame shapes for bottom",
      "Decorate with star stickers",
      "For older children, add details like windows and doors"]

    },
    {
      title: "Moon Sand Sensory Play",
      type: "Sensory Activity",
      skills: ["Sensory Development", "Fine Motor Skills"],
      materials: ["8 cups flour", "1 cup vegetable oil", "Silver/white glitter (optional)", "Small space toys"],
      steps: [
      "Mix ingredients to create moon sand texture",
      "Add toys like small astronauts or rockets",
      "Encourage creative play and exploration",
      "Talk about moon craters and footprints"]

    },
    {
      title: "Planet Hop",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Counting"],
      materials: ["Colored paper circles", "Space-themed music"],
      steps: [
      "Place paper 'planets' on floor in a circle",
      "Play music while children orbit around planets",
      "When music stops, call out a planet color",
      "Children jump to that color planet"]

    },
    {
      title: "Constellation Viewer",
      type: "Science Activity",
      skills: ["STEM", "Visual Perception"],
      materials: ["Paper towel tubes", "Black paper", "Push pin", "Flashlight"],
      steps: [
      "Cover one end of tube with black paper",
      "Help children poke holes in patterns of stars",
      "Darken room and shine flashlight through tube",
      "Talk about constellations and star patterns"]

    }]

  },

  // Seasons Theme
  seasonsTheme: {
    songs: [
    "Four Seasons in a Year",
    "Mr. Sun",
    "Autumn Leaves are Falling Down",
    "Snowflake, Snowflake",
    "Spring is Here"],

    discussionQuestions: [
    "What's your favorite season?",
    "What clothes do we wear in different seasons?",
    "What happens to trees in each season?",
    "What activities can we do in summer/winter?",
    "How do animals change in different seasons?"],

    reflectionQuestions: [
    "What season are we in now?",
    "What signs of the season did you notice today?",
    "Which season would you like to learn more about?"],

    activities: [
    {
      title: "Four Seasons Tree",
      type: "Craft",
      skills: ["Fine Motor Skills", "Observation Skills"],
      materials: ["Paper", "Paint", "Cotton balls", "Green tissue paper", "Yellow/red tissue paper", "Glue"],
      steps: [
      "Draw or provide tree trunk template",
      "Section paper into four parts",
      "Create spring tree with tissue paper blossoms",
      "Summer tree with green tissue paper leaves",
      "Autumn tree with red/yellow leaves",
      "Winter tree with cotton ball snow"]

    },
    {
      title: "Weather Dress-Up Relay",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Sorting", "Following Instructions"],
      materials: ["Weather-appropriate clothes (raincoat, mittens, sunhat, scarf)", "Weather cards"],
      steps: [
      "Divide into teams",
      "Show a weather card (rainy, sunny, snowy)",
      "Children race to put on appropriate clothes",
      "Discuss why we wear different clothes for weather"]

    },
    {
      title: "Season Sensory Bins",
      type: "Sensory Activity",
      skills: ["Sensory Development", "Language Development"],
      materials: ["4 containers", "Season items (leaves, artificial snow, flowers, sand)", "Season-related toys"],
      steps: [
      "Create a sensory bin for each season",
      "Spring: soil, flower petals, seed packets",
      "Summer: sand, shells, toy sunglasses",
      "Autumn: leaves, pinecones, small pumpkins",
      "Winter: artificial snow, pine branches, mittens",
      "Let children explore each bin and discuss"]

    },
    {
      title: "Growing Season Chart",
      type: "Science Activity",
      skills: ["STEM", "Observation Skills"],
      materials: ["Chart paper", "Seeds", "Clear cups", "Soil", "Water", "Markers"],
      steps: [
      "Plant seeds in clear cups",
      "Create chart to track growth",
      "Update chart weekly with observations",
      "Discuss how plants need different things in different seasons"]

    }]

  },

  // ABCs Theme
  abcsTheme: {
    songs: [
    "The Alphabet Song",
    "Phonics Song",
    "ABC Song with Phonics",
    "Letter Sounds",
    "A My Name Is Alice"],

    discussionQuestions: [
    "What letter does your name start with?",
    "What things start with the letter 'B'?",
    "What's your favorite letter?",
    "Can you think of an animal for each letter?"],

    reflectionQuestions: [
    "What new letter did you learn today?",
    "Can you remember something that starts with our letter of the day?",
    "What letter would you like to explore next time?"],

    activities: [
    {
      title: "Letter of the Day Craft",
      type: "Craft",
      skills: ["Fine Motor Skills", "Letter Recognition"],
      materials: ["Paper letter templates", "Decorating materials (stickers, glitter, etc.)", "Glue", "Images of items beginning with the letter"],
      steps: [
      "Introduce letter of the day with sound",
      "Give each child letter template",
      "Decorate with materials",
      "Add pictures of items starting with letter",
      "Create a class alphabet book over time"]

    },
    {
      title: "Alphabet Movement Game",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Letter Recognition"],
      materials: ["Letter cards", "Open space"],
      steps: [
      "Show a letter card",
      "Children perform action starting with that letter",
      "Example: 'J' - Jump, 'S' - Skip, 'T' - Tip-toe",
      "For younger children, demonstrate the action"]

    },
    {
      title: "Letter Hunt",
      type: "Cognitive Game",
      skills: ["Visual Discrimination", "Letter Recognition"],
      materials: ["Magnetic letters", "Alphabet toys", "Letter cards"],
      steps: [
      "Hide letters around the room",
      "Give each child a letter to find",
      "When found, they say the letter and its sound",
      "For older children, find something in room starting with that letter"]

    },
    {
      title: "Sensory Letter Tracing",
      type: "Sensory Activity",
      skills: ["Fine Motor Skills", "Letter Formation"],
      materials: ["Trays", "Sand/salt/shaving cream", "Letter cards for reference"],
      steps: [
      "Spread sand/salt/shaving cream in tray",
      "Demonstrate letter formation",
      "Children trace letters with finger",
      "Say letter sound while tracing"]

    }]

  },

  // Numbers Theme
  numbersTheme: {
    songs: [
    "One, Two, Buckle My Shoe",
    "Five Little Monkeys",
    "Ten Little Fingers",
    "This Old Man",
    "Five Green Speckled Frogs"],

    discussionQuestions: [
    "How old are you?",
    "How many fingers do you have?",
    "Can you count to 10?",
    "What's your favorite number?"],

    reflectionQuestions: [
    "What numbers did we practice today?",
    "Can you show me [number] fingers?",
    "What was your favorite counting activity?"],

    activities: [
    {
      title: "Number Collage",
      type: "Craft",
      skills: ["Fine Motor Skills", "Number Recognition"],
      materials: ["Paper with large number printed", "Small items to glue (buttons, stickers)", "Glue"],
      steps: [
      "Give each child a number paper",
      "Have them glue corresponding number of items",
      "Count together while gluing",
      "For older children, create more complex patterns"]

    },
    {
      title: "Counting Hopscotch",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Counting", "Balance"],
      materials: ["Chalk or tape", "Number cards"],
      steps: [
      "Create hopscotch grid with numbers",
      "Children hop and count",
      "For younger children, focus on numbers 1-5",
      "For older children, use numbers to 10 or 20"]

    },
    {
      title: "Sorting by Numbers",
      type: "Cognitive Game",
      skills: ["Counting", "Sorting", "One-to-One Correspondence"],
      materials: ["Containers labeled with numbers", "Counting objects (bears, blocks, etc.)"],
      steps: [
      "Set up containers with number labels",
      "Children count objects into correct container",
      "Count together to verify",
      "For advanced, add simple addition/subtraction challenges"]

    },
    {
      title: "Number Sensory Hunt",
      type: "Sensory Activity",
      skills: ["Sensory Development", "Number Recognition"],
      materials: ["Sensory bin filler (rice, beans)", "Plastic numbers", "Small toys"],
      steps: [
      "Hide numbers in sensory material",
      "Children find numbers and identify them",
      "For older children, find numbers in sequence",
      "Count corresponding objects for each number found"]

    }]

  },

  // Colors Theme
  colorsTheme: {
    songs: [
    "Rainbow Song",
    "Color Farm Song",
    "I See Something Blue",
    "If You're Wearing Red Today",
    "The Color Song"],

    discussionQuestions: [
    "What's your favorite color?",
    "What color is the sky/grass/sun?",
    "What things are red/blue/yellow?",
    "What colors make up a rainbow?"],

    reflectionQuestions: [
    "What new colors did we learn today?",
    "What colors did we mix together?",
    "What's your favorite color activity we did today?"],

    activities: [
    {
      title: "Color Mixing Art",
      type: "Craft",
      skills: ["Fine Motor Skills", "Color Recognition", "Science Concepts"],
      materials: ["Primary color paints", "Paper", "Brushes", "Small containers for mixing"],
      steps: [
      "Give children primary colors",
      "Demonstrate color mixing",
      "Create color wheels or rainbow pictures",
      "For older children, discuss primary/secondary colors"]

    },
    {
      title: "Color Scavenger Hunt",
      type: "Physical Activity",
      skills: ["Color Recognition", "Visual Discrimination"],
      materials: ["Color cards or swatches", "Collection containers"],
      steps: [
      "Show color card",
      "Children find items of that color",
      "Collect or point to items",
      "Discuss various shades of colors"]

    },
    {
      title: "Color Sorting Game",
      type: "Cognitive Game",
      skills: ["Sorting", "Color Recognition"],
      materials: ["Colored containers", "Colored objects (blocks, buttons, toys)"],
      steps: [
      "Set up containers by color",
      "Children sort objects by color",
      "Count how many of each color",
      "Compare which color has most/least"]

    },
    {
      title: "Colorful Sensory Bottles",
      type: "Sensory Activity",
      skills: ["Visual Discrimination", "Color Recognition"],
      materials: ["Clear bottles", "Water", "Food coloring", "Glitter/small objects (optional)"],
      steps: [
      "Fill bottles with water",
      "Add different colors to each",
      "Add glitter or small objects if desired",
      "Children observe, shake, and identify colors"]

    }]

  },

  // Transportation Theme
  transportationTheme: {
    songs: [
    "Wheels on the Bus",
    "Row, Row, Row Your Boat",
    "Down By the Station",
    "Hurry, Hurry, Drive the Firetruck",
    "The Airplane Song"],

    discussionQuestions: [
    "How do you get to school?",
    "What vehicles have you ridden in?",
    "What vehicles can fly/sail/drive?",
    "What sounds do different vehicles make?"],

    reflectionQuestions: [
    "What was your favorite vehicle we learned about today?",
    "If you could travel in any vehicle, which would you choose?",
    "What new vehicle word did you learn today?"],

    activities: [
    {
      title: "Box Vehicles",
      type: "Craft",
      skills: ["Fine Motor Skills", "Creativity", "Imaginative Play"],
      materials: ["Cardboard boxes", "Paper plates (wheels)", "Paint", "Markers", "Scissors (teacher use)"],
      steps: [
      "Give each child a box",
      "Cut openings as needed (teacher only)",
      "Children decorate boxes as vehicles",
      "Attach wheels, steering wheels, etc.",
      "Have a vehicle parade when complete"]

    },
    {
      title: "Traffic Light Game",
      type: "Physical Activity",
      skills: ["Gross Motor Skills", "Following Directions"],
      materials: ["Red, yellow, green circles", "Open space"],
      steps: [
      "Explain traffic light colors and meanings",
      "Hold up green: children move around",
      "Yellow: slow down",
      "Red: freeze",
      "For older children, add different movement types"]

    },
    {
      title: "Transportation Sorting",
      type: "Cognitive Game",
      skills: ["Classification", "Critical Thinking"],
      materials: ["Vehicle toys/cards", "Sorting mats (air, land, water)"],
      steps: [
      "Create three areas: air, land, water",
      "Children sort vehicles by how they travel",
      "Discuss vehicles that might go in multiple categories",
      "Count vehicles in each category"]

    },
    {
      title: "Road Tape Adventure",
      type: "Sensory Activity",
      skills: ["Spatial Awareness", "Imaginative Play"],
      materials: ["Black tape", "Small vehicle toys", "Blocks for buildings"],
      steps: [
      "Create roads with tape on floor",
      "Add blocks for buildings",
      "Children drive vehicles on roads",
      "Add traffic signs for older children",
      "Create stories about where vehicles are going"]

    }]

  },

  // Feelings Theme
  feelingsTheme: {
    songs: [
    "If You're Happy and You Know It",
    "Feelings Song",
    "When You're Feeling Sad",
    "I Have Feelings",
    "The Mood Song"],

    discussionQuestions: [
    "How are you feeling today?",
    "What makes you happy/sad/scared?",
    "How do you know when someone else is happy/sad?",
    "What do you do when you feel angry?"],

    reflectionQuestions: [
    "What feelings did we talk about today?",
    "How can we help friends who feel sad?",
    "What can we do when we feel angry or upset?"],

    activities: [
    {
      title: "Emotion Masks",
      type: "Craft",
      skills: ["Emotional Intelligence", "Fine Motor Skills"],
      materials: ["Paper plates", "Craft sticks", "Markers", "Yarn (for hair)", "Glue"],
      steps: [
      "Discuss facial expressions for different emotions",
      "Each child creates a face showing emotion",
      "Attach to craft stick",
      "Have children show their emotion and others guess",
      "Use in storytelling activities"]

    },
    {
      title: "Feelings Freeze Dance",
      type: "Physical Activity",
      skills: ["Emotional Expression", "Gross Motor Skills"],
      materials: ["Music", "Emotion cards"],
      steps: [
      "Play music, children dance",
      "When music stops, show emotion card",
      "Children freeze in pose showing that emotion",
      "Discuss how body shows different feelings"]

    },
    {
      title: "Emotion Matching Game",
      type: "Cognitive Game",
      skills: ["Emotional Intelligence", "Memory"],
      materials: ["Emotion cards (pairs of same emotion)", "Or emotion faces/matching scenarios"],
      steps: [
      "Place cards face down",
      "Children turn over two cards",
      "Match same emotions or emotion to scenario",
      "Discuss each emotion as it's matched"]

    },
    {
      title: "Calm Down Bottles",
      type: "Sensory Activity",
      skills: ["Self-Regulation", "Emotional Management"],
      materials: ["Clear bottles", "Water", "Glitter", "Food coloring", "Baby oil (optional)"],
      steps: [
      "Fill bottles with water and oil",
      "Add glitter and color",
      "Secure lid tightly",
      "Demonstrate shaking bottle and watching glitter settle",
      "Discuss using as calming tool when upset"]

    }]

  },

  // Resources by theme and skill
  resources: {
    // Theme-based resources
    'Animals': [
    {
      type: 'Video',
      title: 'Animal Sounds Song',
      url: 'https://www.youtube.com/watch?v=t99ULJjCsaM'
    },
    {
      type: 'Printable',
      title: 'Animal Matching Cards',
      url: 'https://www.twinkl.com/resource/t-t-2546-animal-matching-cards'
    }],

    'Space': [
    {
      type: 'Video',
      title: 'Zoom Zoom Zoom, We\'re Going to the Moon',
      url: 'https://www.youtube.com/watch?v=DEHBrmZxAf8'
    },
    {
      type: 'Printable',
      title: 'Planet Coloring Pages',
      url: 'https://www.education.com/download/worksheet/127229/color-the-planets.pdf'
    }],

    'Seasons': [
    {
      type: 'Video',
      title: 'Seasons Song',
      url: 'https://www.youtube.com/watch?v=8ZjpI6fgYSY'
    },
    {
      type: 'Printable',
      title: 'Weather Chart',
      url: 'https://www.twinkl.com/resource/t-t-2545-weather-chart'
    }],

    'ABCs': [
    {
      type: 'Video',
      title: 'Phonics Song',
      url: 'https://www.youtube.com/watch?v=BELlZKpi1Zs'
    },
    {
      type: 'Printable',
      title: 'Letter Tracing Worksheets',
      url: 'https://www.education.com/worksheets/preschool/writing-alphabets/'
    }],

    'Numbers': [
    {
      type: 'Video',
      title: 'Counting to 10 Song',
      url: 'https://www.youtube.com/watch?v=DR-cfDsHCGA'
    },
    {
      type: 'Printable',
      title: 'Number Tracing Worksheets',
      url: 'https://www.education.com/worksheets/preschool/writing-numbers/'
    }],


    // Skill-based resources
    'Motor Skills': [
    {
      type: 'Activity Guide',
      title: 'Fine Motor Activities for Preschoolers',
      url: 'https://handsonaswegrow.com/fine-motor-skills-activities/'
    }],

    'Social-Emotional': [
    {
      type: 'Guide',
      title: 'Teaching Emotional Intelligence',
      url: 'https://www.naeyc.org/resources/pubs/yc/mar2017/teaching-emotional-intelligence'
    }],

    'Literacy': [
    {
      type: 'Printable',
      title: 'Alphabet Activities Pack',
      url: 'https://www.education.com/download-pdf/worksheet/107478/'
    }],

    'STEM': [
    {
      type: 'Activity Guide',
      title: 'Simple Science Experiments for Preschoolers',
      url: 'https://www.pre-kpages.com/science-experiments-for-kids/'
    }],


    // General resources
    'General': [
    {
      type: 'Song Collection',
      title: 'Nursery Rhymes and Songs',
      url: 'https://www.bbc.co.uk/teach/school-radio/nursery-rhymes-a-to-z-index/z4ddgwx'
    },
    {
      type: 'Guide',
      title: 'Setting Up Learning Centers',
      url: 'https://www.naeyc.org/resources/pubs/tyc/feb2014/learning-centers'
    }]

  }
};