import AINews from '../../assets/alan-ai.png';
import SentimentIMDB from '../../assets/SentimentIMDB.png';
import StackExchange from '../../assets/StackExchange.png';
import Sentiment from '../../assets/Sentiment Analysis.png';
import Semantic from '../../assets/semantic.png';
import Wrangling from '../../assets/data-wrangling.png';
import Weather from '../../assets/weather-app-image.png';
import Dictionary from '../../assets/dictionary-app.png';
import Covid from '../../assets/covid-react.png';
import Budget from '../../assets/rails-budget-app.png';
import BookingFront from '../../assets/book-doctors.png';
import BookingBack from '../../assets/booking-api.png';
import Todo from '../../assets/todo-react.png';

export const projectsData = [
  {
    id: 0,
    image: AINews,
    title: 'AI News App',
    category: 'Data Science',
    description:
      'A voice-controlled React news app built with Alan AI speech recognition, pulling headlines from News API.',
    demo: 'https://news-ai-3m0o.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/news_ai',
  },
  {
    id: 1,
    image: SentimentIMDB,
    title: 'Sentiment Analysis on IMDB Reviews',
    category: 'Data Science',
    description:
      'Python sentiment analysis that classifies a corpus of movie reviews as positive or negative.',
    repo: 'https://github.com/paulinagonzalezc/sentiment-analysis-imdb',
  },
  {
    id: 2,
    image: StackExchange,
    title: 'Stack Exchange User Growth',
    category: 'Data Science',
    description:
      'Tests the hypothesis that Stack Exchange users become better community members the longer they use the site.',
    repo: 'https://github.com/paulinagonzalezc/stack_exchange_user_analysis',
  },
  {
    id: 3,
    image: Sentiment,
    title: 'Sentiment Analysis on Amazon Reviews',
    category: 'Data Science',
    description:
      'VADER and RoBERTa compared on about 500,000 fine-food reviews from Amazon.',
    repo: 'https://github.com/paulinagonzalezc/sentiment_analysis_python',
  },
  {
    id: 4,
    image: Semantic,
    title: 'Semantic Segmentation',
    category: 'Data Science',
    description:
      'A deep learning segmentation model (DeepLab-v3+) tailored to urban scene understanding.',
    repo: 'https://github.com/paulinagonzalezc/computer_vision_semantic_segmentation',
  },
  {
    id: 5,
    image: Wrangling,
    title: 'Data Wrangling: Hospital DB',
    category: 'Data Science',
    description:
      'SQL and pandas pipeline that probabilistically imputes missing hospital data, the first step of multiple imputation.',
    repo: 'https://github.com/paulinagonzalezc/multiple-imputation',
  },
  {
    id: 6,
    image: Weather,
    title: 'Weather App',
    category: 'Software Development',
    description:
      'Search any city for its current weather and forecast.',
    demo: 'https://weatherreact-paulina.netlify.app/',
    repo: 'https://github.com/paulinagonzalezc/weather-react-app',
  },
  {
    id: 7,
    image: Dictionary,
    title: 'Dictionary App',
    category: 'Software Development',
    description:
      'Look up definitions, synonyms, pronunciation, example sentences and illustrations for any word.',
    demo: 'https://dictionaryreact-paulina.netlify.app/',
    repo: 'https://github.com/paulinagonzalezc/dictionary-react',
  },
  {
    id: 8,
    image: Covid,
    title: 'COVID-19 Tracker',
    category: 'Software Development',
    description:
      'Real-time worldwide COVID-19 case data from the disease.sh API.',
    demo: 'https://covid-tracker-react.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/covid-tracker-react',
  },
  {
    id: 9,
    image: Budget,
    title: 'Budget App',
    category: 'Software Development',
    description:
      'Rails app that links transactions to categories so you can see where your money goes.',
    demo: 'https://rails-kbsp.onrender.com/',
    repo: 'https://github.com/paulinagonzalezc/budget-app-rails',
  },
  {
    id: 10,
    image: BookingFront,
    title: 'Booking App: Front End',
    category: 'Software Development',
    description:
      'React front end for booking and cancelling appointments with specialist doctors.',
    repo: 'https://github.com/paulinagonzalezc/book-an-appointment',
  },
  {
    id: 11,
    image: BookingBack,
    title: 'Booking App: API',
    category: 'Software Development',
    description:
      'Back end that handles doctor appointments: reserving, listing and cancelling.',
    repo: 'https://github.com/paulinagonzalezc/book-an-appointment-back-end',
  },
  {
    id: 12,
    image: Todo,
    title: 'To-do App',
    category: 'Software Development',
    description:
      'Add, save, complete and delete tasks.',
    demo: 'https://paulinagonzalezc.github.io/react-to-do/',
    repo: 'https://github.com/paulinagonzalezc/react-to-do',
  },
];

export const projectsNav = ['All', 'Data Science', 'Software Development'];
