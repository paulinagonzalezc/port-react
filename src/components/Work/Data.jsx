import Weather from '../../assets/weather-app-image.png';
import Dictionary from '../../assets/dictionary-app.png';
import Covid from '../../assets/covid-react.png';
import Todo from '../../assets/todo-react.png';
import Budget from '../../assets/rails-budget-app.png';
import BookingBack from '../../assets/booking-api.png';
import BookingFront from '../../assets/book-doctors.png';
import AINews from '../../assets/alan-ai.png';
import Sentiment from '../../assets/Sentiment Analysis.png';
import Wrangling from '../../assets/data-wrangling.png';
import SentimentIMDB from '../../assets/SentimentIMDB.png';
import StackExchange from '../../assets/StackExchange.png';
import SemanticSegmentation from '../../assets/semantic.png';

export const projectsData = [
  {
    id: 0,
    image: AINews,
    title: 'AI News App',
    category: 'Data Science',
    description:
      'An Artificial Intelligence React News Application using Alan AI. Alan AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications. It allows you to control the app using your voice. The App also uses News API to get the news to the front end.',
    demo: 'https://news-ai-3m0o.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/news_ai',
  },
  {
    id: 1,
    image: SentimentIMDB,
    title: 'Sentiment Analysis on IMDB Reviews',
    category: 'Data Science',
    description:
      'Sentiment analysis in python on a corpus of movie reviews to classify each as either positive or negative.',
    repo: 'https://github.com/paulinagonzalezc/sentiment-analysis-imdb',
  },
  {
    id: 2,
    image: StackExchange,
    title: 'Stack Exchange User Growth Analysis',
    category: 'Data Science',
    description:
      'Stack Exchange relies on users of the platform for content through questions and answers. We hypothesize that users improve as community members as they use the site for longer.',
    repo: 'https://github.com/paulinagonzalezc/stack_exchange_user_analysis',
  },
  {
    id: 3,
    image: Sentiment,
    title: 'Sentiment Analysis on Amazon Reviews',
    category: 'Data Science',
    description:
      'Sentiment analysis in python using: VADER and Roberta. With a dataset that consists of ~500,000 reviews of fine foods from amazon ',
    repo: 'https://github.com/paulinagonzalezc/sentiment_analysis_python',
  },
  {
    id: 4,
    image: Wrangling,
    title: 'Data Wrangling - Hospital DB',
    category: 'Data Science',
    description:
      'Enabled the first step of multiple imputation: using a combination of SQL and python/pandas to probabilistically impute the missing data from a Hospital DB',
    repo: 'https://github.com/paulinagonzalezc/multiple-imputation',
  },
  {
    id: 5,
    image: Weather,
    title: 'Weather App',
    category: 'Software Development',
    description:
      'A weather app designed to show the current weather and forecast of a city. Users can use the search bar to look for a city.',
    demo: 'https://weatherreact-paulina.netlify.app/',
    repo: 'https://github.com/paulinagonzalezc/weather-react-app',
  },
  {
    id: 6,
    image: Dictionary,
    title: 'Dictionary App',
    category: 'Software Developmentt',
    description:
      'Users can search for a word and get definitions, synonyms, hear the pronunciation, see how it is used in a sentence and see illustrations.',
    demo: 'https://dictionaryreact-paulina.netlify.app/',
    repo: 'https://github.com/paulinagonzalezc/dictionary-react',
  },
  {
    id: 7,
    image: Covid,
    title: 'COVID-19 Tracker App',
    category: 'React',
    description:
      'A web application that provides realtime data about COVID-19 cases worldwide using the disease.sh COVID-19 API.',
    demo: 'https://covid-tracker-react.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/covid-tracker-react',
  },
  {
    id: 8,
    image: Todo,
    title: 'To-do App',
    category: 'React',
    description:
      'A classic to do app, users can add, save, delete and mark as complete to do tasks.',
    demo: 'https://paulinagonzalezc.github.io/react-to-do/',
    repo: 'https://github.com/paulinagonzalezc/react-to-do',
  },
  {
    id: 9,
    image: Budget,
    title: 'Budget App',
    category: 'Ruby on Rails',
    description:
      'A web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you have spent and on what exactly.',
    demo: 'https://rails-kbsp.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/budget-app-rails',
  },
  {
    id: 10,
    image: BookingBack,
    title: 'Booking App API',
    category: 'Ruby on Rails',
    description:
      'The back-end of an app to book an appointment with a doctor specialized in your needs. The user can reserve and cancel appointments.',
    demo: 'http://159.223.131.191:3000/',
    repo: 'https://github.com/paulinagonzalezc/book-an-appointment-back-end',
  },
  {
    id: 11,
    image: BookingFront,
    title: 'Booking App Front',
    category: 'React',
    description:
      'The front-end of an app to book an appointment with a doctor specialized in your needs. The user can reserve and cancel appointments.',
    demo: 'http://162.243.166.190/',
    repo: 'https://github.com/paulinagonzalezc/book-an-appointment',
  },
  {
    id: 12,
    image: SemanticSegmentation,
    title: 'Semantic Segmentation',
    category: 'Python',
    description:
      'Implemented a deep learning-based semantic segmentation model: DeepLab-v3+, specifically tailored for urban scene understanding.',
    demo: '',
    repo: 'https://github.com/paulinagonzalezc/computer_vision_semantic_segmentation',
  },
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Data Science',
  },
  {
    name: 'Software Development',
  },
];
