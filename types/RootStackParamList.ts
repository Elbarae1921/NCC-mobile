import { Person } from './PersonType';
import { WeatherStatsParams } from './WeatherType';

type RootStackParamList = {
    home: undefined;
    checkin: undefined;
    find: undefined;
    partner: undefined;
    findresults: Person[];
    checkinconfirmation: Person;
    weather: undefined;
    weatherstats: WeatherStatsParams;
}

export default RootStackParamList;