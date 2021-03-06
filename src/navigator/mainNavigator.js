import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList174676Navigator from '../features/ArticleList174676/navigator';
import Maps174663Navigator from '../features/Maps174663/navigator';
import ArticleList174658Navigator from '../features/ArticleList174658/navigator';
import Maps174645Navigator from '../features/Maps174645/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList174676: { screen: ArticleList174676Navigator },
Maps174663: { screen: Maps174663Navigator },
ArticleList174658: { screen: ArticleList174658Navigator },
Maps174645: { screen: Maps174645Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
