import { Person } from './PersonType'

type RootStackParamList = {
    home: undefined;
    checkin: undefined;
    find: undefined;
    partner: undefined;
    findresults: Person[];
    checkinconfirmation: Person;
}

export default RootStackParamList;