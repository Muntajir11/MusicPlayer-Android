/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerServices';

import {name as appName} from './app.json';


console.log('Registering app');
AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => playbackService);