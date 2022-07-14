import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Utilities } from './types';
interface Props {
    utilities: Utilities;
    colorScheme?: ColorSchemeName;
    children: React.ReactNode;
}
declare const TailwindProvider: React.FC<Props>;
export default TailwindProvider;
