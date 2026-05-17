import ArticleIcon from '@mui/icons-material/Article';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import { AppRoutes } from 'src/router/app-routes';

export const listItems = {
  app: [
    { label: 'Nasze podróże', to: AppRoutes.Trips(), icon: <FlightTakeoffIcon /> },
    { label: 'Gazetka weselna', to: AppRoutes.Newspaper(), icon: <ArticleIcon /> },
  ],
  newspaper: [
    { label: 'Nasza historia', to: AppRoutes.NewspaperOurStory(), icon: <FavoriteIcon /> },
    { label: 'Menu weselne', to: AppRoutes.NewspaperMenu(), icon: <RestaurantIcon /> },
    { label: 'Regulamin wesela', to: AppRoutes.NewspaperRegulations(), icon: <GavelIcon /> },
    { label: 'Usługodawcy', to: AppRoutes.NewspaperService(), icon: <GroupsIcon /> },
    { label: 'Horoskop weselny', to: AppRoutes.NewspaperHoroscope(), icon: <StarIcon /> },
  ],
};
